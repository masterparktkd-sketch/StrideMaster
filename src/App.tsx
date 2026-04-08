import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Check, 
  Copy, 
  Globe, 
  RefreshCw, 
  Activity, 
  Target, 
  TrendingUp, 
  Calendar,
  Zap,
  ShieldAlert,
  Moon,
  Dumbbell,
  Timer,
  MapPin
} from 'lucide-react';
import { TRANSLATIONS } from './constants';
import { FormData, Language, TrainingModule } from './types';

const RunningPromptBuilder = () => {
  const [lang, setLang] = useState<Language>('ko');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    goal: '',
    currentLevel: '',
    weeklyMileage: '',
    raceDistance: '',
    raceDate: '',
    trainingDays: '',
    limitations: [],
    terrain: [],
    modules: {
      trainingPlan: true,
      nutrition: false,
      injury: false,
      recovery: false,
      pacing: false
    },
    longestRun: '',
    currentPace: '',
    targetPace: '',
    preferredTime: '',
    nutritionGoal: '',
    raceNutrition: '',
    strengthTraining: '',
    mobilityWork: '',
    recoveryMethods: [],
    sleepHours: ''
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [copied, setCopied] = useState(false);

  const t = TRANSLATIONS[lang];

  const generatePrompt = () => {
    const getRiskFlags = () => {
      const flags = [];
      if (formData.limitations.includes(t.limitations.kneeIssues)) flags.push('knee_pathologies');
      if (formData.limitations.includes(t.limitations.shinSplints)) flags.push('medial_tibial_stress');
      if (formData.limitations.includes(t.limitations.itBand)) flags.push('it_band_friction');
      if (formData.limitations.includes(t.limitations.plantarFasciitis)) flags.push('plantar_fasciitis');
      if (formData.limitations.includes(t.limitations.hipPain)) flags.push('hip_impingement');
      if (formData.limitations.includes(t.limitations.achilles)) flags.push('achilles_tendinopathy');
      return flags;
    };

    const prompt = lang === 'en' ? `# MASTER RUNNING ARCHITECT PROMPT

You are an elite, data-driven running coach. Your expertise covers exercise physiology, progressive overload, biomechanics, and endurance nutrition.

## RUNNER PROFILE
- **Primary Objective**: ${formData.goal}
- **Experience Level**: ${formData.currentLevel}
- **Current Volume**: ${formData.weeklyMileage}
- **Target Event**: ${formData.raceDistance || 'None'}
- **Event Date**: ${formData.raceDate || 'TBD'}
- **Availability**: ${formData.trainingDays} days/week
- **Peak Duration**: ${formData.longestRun || 'Not specified'}
- **Threshold Pace**: ${formData.currentPace || 'Not specified'}
- **Target Pace**: ${formData.targetPace || 'Not specified'}
- **Terrain**: ${formData.terrain.join(', ') || 'Road'}
- **Constraints**: ${formData.limitations.join(', ') || 'None'}

## MODULES REQUESTED
${Object.entries(formData.modules).filter(([_, v]) => v).map(([k]) => `- [x] ${k}`).join('\n')}

## ARCHITECTURAL CONSTRAINTS
1. **80/20 Rule**: 80% of volume MUST be strictly aerobic (Zone 2).
2. **10% Rule**: Weekly volume increase must not exceed 10%.
3. **Periodization**: Include a cutback week every 4th week (25% volume reduction).
4. **Resilience**: Prioritize injury prevention over aggressive speed work.
${getRiskFlags().length > 0 ? `5. **Pathology Focus**: Address ${getRiskFlags().join(', ')} with specific prehab.` : ''}

## OUTPUT STRUCTURE
1. **Executive Summary**: 3 high-level focus points.
2. **Macrocycle Overview**: Timeline and phases.
3. **Microcycle (Weekly) Plan**: Detailed table with Day, Type, Distance/Duration, Effort (RPE/Pace), and Purpose.
4. **Module Specifics**: Detailed guidance for ${Object.keys(formData.modules).filter(m => formData.modules[m as TrainingModule]).join(', ')}.
5. **Next Steps**: Immediate action items for Week 1.

---
` : `# 마스터 러닝 아키텍트 프롬프트

당신은 데이터 기반의 엘리트 러닝 코치입니다. 운동 생리학, 점진적 과부하, 생체역학 및 지구력 영양 분야의 전문가입니다.

## 러너 프로필
- **주요 목표**: ${formData.goal}
- **경력 수준**: ${formData.currentLevel}
- **현재 훈련량**: ${formData.weeklyMileage}
- **목표 대회**: ${formData.raceDistance || '없음'}
- **대회 날짜**: ${formData.raceDate || '미정'}
- **가용 시간**: 주 ${formData.trainingDays}일
- **최장 훈련**: ${formData.longestRun || '미지정'}
- **역치 페이스**: ${formData.currentPace || '미지정'}
- **목표 페이스**: ${formData.targetPace || '미지정'}
- **지형**: ${formData.terrain.join(', ') || '로드'}
- **제약 사항**: ${formData.limitations.join(', ') || '없음'}

## 요청 모듈
${Object.entries(formData.modules).filter(([_, v]) => v).map(([k]) => `- [x] ${k}`).join('\n')}

## 설계 원칙
1. **80/20 법칙**: 전체 훈련량의 80%는 반드시 엄격한 유산소(Zone 2)여야 합니다.
2. **10% 법칙**: 주간 훈련량 증가는 10%를 초과할 수 없습니다.
3. **주기화**: 매 4주마다 감량 주간(25% 볼륨 감소)을 포함하십시오.
4. **회복력**: 공격적인 속도 훈련보다 부상 예방을 우선시하십시오.
${getRiskFlags().length > 0 ? `5. **병증 집중**: ${getRiskFlags().join(', ')}에 대한 특정 프리햅을 다루십시오.` : ''}

## 출력 구조
1. **요약**: 3가지 핵심 중점 사항.
2. **거시 사이클 개요**: 타임라인 및 단계별 계획.
3. **미시 사이클(주간) 계획**: 요일, 유형, 거리/시간, 강도(RPE/페이스), 목적이 포함된 상세 표.
4. **모듈별 세부 사항**: ${Object.keys(formData.modules).filter(m => formData.modules[m as TrainingModule]).join(', ')}에 대한 상세 가이드.
5. **다음 단계**: 1주차 즉시 실행 항목.

---
`;
    return prompt;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatePrompt());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed', err);
    }
  };

  const toggleLimitation = (limitation: string) => {
    if (limitation === t.limitations.none) {
      setFormData({ ...formData, limitations: [t.limitations.none] });
    } else {
      const newLimitations = formData.limitations.includes(limitation)
        ? formData.limitations.filter(l => l !== limitation)
        : [...formData.limitations.filter(l => l !== t.limitations.none), limitation];
      setFormData({ ...formData, limitations: newLimitations.length === 0 ? [t.limitations.none] : newLimitations });
    }
  };

  const toggleTerrain = (terrain: string) => {
    const newTerrain = formData.terrain.includes(terrain)
      ? formData.terrain.filter(t => t !== terrain)
      : [...formData.terrain, terrain];
    setFormData({ ...formData, terrain: newTerrain });
  };

  const toggleModule = (module: TrainingModule) => {
    setFormData({
      ...formData,
      modules: {
        ...formData.modules,
        [module]: !formData.modules[module]
      }
    });
  };

  const toggleRecoveryMethod = (method: string) => {
    const newMethods = formData.recoveryMethods.includes(method)
      ? formData.recoveryMethods.filter(m => m !== method)
      : [...formData.recoveryMethods, method];
    setFormData({ ...formData, recoveryMethods: newMethods });
  };

  const canProceed = () => {
    if (step === 1) return formData.goal !== '';
    if (step === 2) return formData.currentLevel !== '' && formData.weeklyMileage !== '' && formData.trainingDays !== '';
    if (step === 3) return Object.values(formData.modules).some(v => v);
    return true;
  };

  return (
    <div className="min-h-screen bg-[#F5F5F4] text-[#1C1917] font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-stone-200 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">{t.title}</span>
            <span className="hidden sm:inline-block px-2 py-0.5 bg-stone-100 text-[10px] font-bold uppercase tracking-widest text-stone-500 rounded ml-2">
              {t.tagline}
            </span>
          </div>
          <button
            onClick={() => setLang(lang === 'en' ? 'ko' : 'en')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-200 hover:bg-stone-50 transition-colors text-sm font-medium"
          >
            <Globe className="w-4 h-4" />
            {lang === 'en' ? '한국어' : 'English'}
          </button>
        </div>
      </header>

      <main className="pt-24 pb-32 px-6 max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          {!showPrompt ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-12"
            >
              {/* Progress */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight">{t.steps[step - 1]}</h2>
                    <p className="text-stone-500 mt-1">{t.subtitle}</p>
                  </div>
                  <span className="text-sm font-mono text-stone-400">0{step} / 05</span>
                </div>
                <div className="h-1 bg-stone-200 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-orange-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${(step / 5) * 100}%` }}
                    transition={{ type: 'spring', bounce: 0, duration: 0.6 }}
                  />
                </div>
              </div>

              {/* Step Content */}
              <div className="min-h-[400px]">
                {step === 1 && (
                  <div className="grid grid-cols-1 gap-3">
                    {Object.entries(t.goals).map(([key, value]) => (
                      <button
                        key={key}
                        onClick={() => setFormData({ ...formData, goal: key as any })}
                        className={`group relative p-6 rounded-2xl border-2 text-left transition-all ${
                          formData.goal === key
                            ? 'border-orange-600 bg-white shadow-xl shadow-orange-900/5'
                            : 'border-white bg-white/50 hover:border-stone-200'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-lg font-semibold ${formData.goal === key ? 'text-orange-600' : 'text-stone-700'}`}>
                            {value as string}
                          </span>
                          {formData.goal === key && <Check className="w-5 h-5 text-orange-600" />}
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-8">
                    <section className="space-y-4">
                      <label className="text-xs font-bold uppercase tracking-widest text-stone-400">{t.currentLevelTitle}</label>
                      <div className="grid grid-cols-1 gap-3">
                        {['beginner', 'intermediate', 'advanced'].map((level) => (
                          <button
                            key={level}
                            onClick={() => setFormData({ ...formData, currentLevel: level as any })}
                            className={`p-4 rounded-xl border-2 text-left transition-all ${
                              formData.currentLevel === level
                                ? 'border-orange-600 bg-white shadow-lg shadow-orange-900/5'
                                : 'border-white bg-white/50 hover:border-stone-200'
                            }`}
                          >
                            <div className="font-bold text-stone-800">{t.levels[level]}</div>
                            <div className="text-sm text-stone-500 mt-1">{t.levels[`${level}Desc`]}</div>
                          </button>
                        ))}
                      </div>
                    </section>

                    <section className="space-y-4">
                      <label className="text-xs font-bold uppercase tracking-widest text-stone-400">{t.weeklyMileageTitle}</label>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                        {Object.entries(t.mileages).map(([key, value]) => (
                          <button
                            key={key}
                            onClick={() => setFormData({ ...formData, weeklyMileage: value })}
                            className={`p-3 rounded-lg border-2 text-xs font-bold transition-all ${
                              formData.weeklyMileage === value
                                ? 'border-orange-600 bg-white text-orange-600'
                                : 'border-white bg-white/50 hover:border-stone-200'
                            }`}
                          >
                            {value as string}
                          </button>
                        ))}
                      </div>
                    </section>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <section className="space-y-4">
                        <label className="text-xs font-bold uppercase tracking-widest text-stone-400">{t.raceDistanceTitle}</label>
                        <select 
                          className="w-full p-4 bg-white border-2 border-white rounded-xl focus:border-orange-600 outline-none transition-all font-medium"
                          value={formData.raceDistance}
                          onChange={(e) => setFormData({ ...formData, raceDistance: e.target.value as any })}
                        >
                          {Object.entries(t.distances).map(([key, value]) => (
                            <option key={key} value={key}>{value as string}</option>
                          ))}
                        </select>
                      </section>
                      <section className="space-y-4">
                        <label className="text-xs font-bold uppercase tracking-widest text-stone-400">{t.trainingDaysTitle}</label>
                        <div className="flex gap-2">
                          {['3', '4', '5', '6', '7'].map((day) => (
                            <button
                              key={day}
                              onClick={() => setFormData({ ...formData, trainingDays: day })}
                              className={`flex-1 p-3 rounded-lg border-2 font-bold transition-all ${
                                formData.trainingDays === day
                                  ? 'border-orange-600 bg-white text-orange-600'
                                  : 'border-white bg-white/50 hover:border-stone-200'
                              }`}
                            >
                              {day}
                            </button>
                          ))}
                        </div>
                      </section>
                    </div>

                    <section className="space-y-4">
                      <label className="text-xs font-bold uppercase tracking-widest text-stone-400">{t.limitationsTitle}</label>
                      <div className="flex flex-wrap gap-2">
                        {Object.entries(t.limitations).map(([key, value]) => (
                          <button
                            key={key}
                            onClick={() => toggleLimitation(value as string)}
                            className={`px-4 py-2 rounded-full border-2 text-xs font-bold transition-all ${
                              formData.limitations.includes(value as string)
                                ? 'border-red-500 bg-red-50 text-red-600'
                                : 'border-white bg-white/50 hover:border-stone-200'
                            }`}
                          >
                            {value as string}
                          </button>
                        ))}
                      </div>
                    </section>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <p className="text-stone-500 mb-6">{t.modulesSubtitle}</p>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        { key: 'trainingPlan', icon: Activity, title: t.moduleTraining, desc: t.moduleTrainingDesc },
                        { key: 'nutrition', icon: Target, title: t.moduleNutrition, desc: t.moduleNutritionDesc },
                        { key: 'injury', icon: ShieldAlert, title: t.moduleInjury, desc: t.moduleInjuryDesc },
                        { key: 'recovery', icon: Moon, title: t.moduleRecovery, desc: t.moduleRecoveryDesc },
                        { key: 'pacing', icon: Timer, title: t.modulePacing, desc: t.modulePacingDesc }
                      ].map(({ key, icon: Icon, title, desc }) => (
                        <button
                          key={key}
                          onClick={() => toggleModule(key as TrainingModule)}
                          className={`p-6 rounded-2xl border-2 text-left transition-all flex items-start gap-4 ${
                            formData.modules[key as TrainingModule]
                              ? 'border-orange-600 bg-white shadow-lg'
                              : 'border-white bg-white/50 hover:border-stone-200'
                          }`}
                        >
                          <div className={`p-3 rounded-xl ${formData.modules[key as TrainingModule] ? 'bg-orange-100 text-orange-600' : 'bg-stone-100 text-stone-400'}`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-stone-800">{title}</div>
                            <div className="text-sm text-stone-500 mt-1">{desc}</div>
                          </div>
                          {formData.modules[key as TrainingModule] && <Check className="w-5 h-5 text-orange-600 mt-1" />}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-8">
                    {formData.modules.nutrition && (
                      <section className="p-6 bg-white rounded-2xl border-2 border-white shadow-sm space-y-6">
                        <div className="flex items-center gap-2 text-emerald-600">
                          <Target className="w-5 h-5" />
                          <h3 className="font-bold">{t.moduleNutrition}</h3>
                        </div>
                        <div className="space-y-4">
                          <label className="text-xs font-bold uppercase tracking-widest text-stone-400">{t.nutritionGoalTitle}</label>
                          <div className="grid grid-cols-2 gap-2">
                            {Object.entries(t.nutritionGoals).map(([key, value]) => (
                              <button
                                key={key}
                                onClick={() => setFormData({ ...formData, nutritionGoal: value as string })}
                                className={`p-3 rounded-lg border-2 text-xs font-bold transition-all ${
                                  formData.nutritionGoal === value
                                    ? 'border-emerald-600 bg-emerald-50 text-emerald-600'
                                    : 'border-stone-100 bg-stone-50 hover:border-stone-200'
                                }`}
                              >
                                {value as string}
                              </button>
                            ))}
                          </div>
                        </div>
                      </section>
                    )}

                    {formData.modules.injury && (
                      <section className="p-6 bg-white rounded-2xl border-2 border-white shadow-sm space-y-6">
                        <div className="flex items-center gap-2 text-red-600">
                          <ShieldAlert className="w-5 h-5" />
                          <h3 className="font-bold">{t.moduleInjury}</h3>
                        </div>
                        <div className="space-y-4">
                          <label className="text-xs font-bold uppercase tracking-widest text-stone-400">{t.strengthTrainingTitle}</label>
                          <div className="grid grid-cols-2 gap-2">
                            {Object.entries(t.strengthLevels).map(([key, value]) => (
                              <button
                                key={key}
                                onClick={() => setFormData({ ...formData, strengthTraining: value as string })}
                                className={`p-3 rounded-lg border-2 text-xs font-bold transition-all ${
                                  formData.strengthTraining === value
                                    ? 'border-red-600 bg-red-50 text-red-600'
                                    : 'border-stone-100 bg-stone-50 hover:border-stone-200'
                                }`}
                              >
                                {value as string}
                              </button>
                            ))}
                          </div>
                        </div>
                      </section>
                    )}

                    {formData.modules.recovery && (
                      <section className="p-6 bg-white rounded-2xl border-2 border-white shadow-sm space-y-6">
                        <div className="flex items-center gap-2 text-blue-600">
                          <Moon className="w-5 h-5" />
                          <h3 className="font-bold">{t.moduleRecovery}</h3>
                        </div>
                        <div className="space-y-4">
                          <label className="text-xs font-bold uppercase tracking-widest text-stone-400">{t.recoveryMethodsTitle}</label>
                          <div className="flex flex-wrap gap-2">
                            {Object.entries(t.recoveryMethods).map(([key, value]) => (
                              <button
                                key={key}
                                onClick={() => toggleRecoveryMethod(value as string)}
                                className={`px-4 py-2 rounded-full border-2 text-xs font-bold transition-all ${
                                  formData.recoveryMethods.includes(value as string)
                                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                                    : 'border-stone-100 bg-stone-50 hover:border-stone-200'
                                }`}
                              >
                                {value as string}
                              </button>
                            ))}
                          </div>
                        </div>
                      </section>
                    )}
                  </div>
                )}

                {step === 5 && (
                  <div className="space-y-6">
                    <div className="p-8 bg-white rounded-3xl border-2 border-white shadow-xl shadow-stone-900/5 space-y-8">
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 block mb-2">Primary Goal</label>
                          <div className="font-bold text-lg">{t.goals[formData.goal] || 'Not set'}</div>
                        </div>
                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 block mb-2">Athlete Level</label>
                          <div className="font-bold text-lg">{t.levels[formData.currentLevel] || 'Not set'}</div>
                        </div>
                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 block mb-2">Weekly Volume</label>
                          <div className="font-bold text-lg">{formData.weeklyMileage || 'Not set'}</div>
                        </div>
                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 block mb-2">Target Event</label>
                          <div className="font-bold text-lg">{t.distances[formData.raceDistance] || 'None'}</div>
                        </div>
                      </div>
                      
                      <div className="pt-8 border-t border-stone-100">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 block mb-4">Active Modules</label>
                        <div className="flex flex-wrap gap-2">
                          {Object.entries(formData.modules).filter(([_, v]) => v).map(([k]) => (
                            <span key={k} className="px-3 py-1 bg-orange-50 text-orange-600 text-[10px] font-black uppercase tracking-widest rounded-full border border-orange-100">
                              {k}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation */}
              <div className="flex gap-4 pt-12">
                {step > 1 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="flex items-center gap-2 px-6 py-4 rounded-2xl font-bold text-stone-500 hover:bg-stone-200 transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    {t.back}
                  </button>
                )}
                <button
                  onClick={() => step === 5 ? setShowPrompt(true) : setStep(step + 1)}
                  disabled={!canProceed()}
                  className={`flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold transition-all ${
                    canProceed()
                      ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/20 hover:scale-[1.02] active:scale-[0.98]'
                      : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                  }`}
                >
                  {step === 5 ? t.generate : t.next}
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="prompt"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">{t.promptTitle}</h2>
                  <p className="text-stone-500 mt-1">{t.promptSubtitle}</p>
                </div>
                <button
                  onClick={() => setShowPrompt(false)}
                  className="p-2 text-stone-400 hover:text-stone-600 transition-colors"
                >
                  <RefreshCw className="w-5 h-5" />
                </button>
              </div>

              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                <div className="relative bg-white border-2 border-stone-100 rounded-3xl p-8 shadow-2xl overflow-hidden">
                  <div className="max-h-[500px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-stone-200">
                    <pre className="whitespace-pre-wrap text-sm font-mono text-stone-800 leading-relaxed">
                      {generatePrompt()}
                    </pre>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleCopy}
                  className="flex-1 flex items-center justify-center gap-3 bg-orange-600 text-white px-8 py-5 rounded-2xl font-bold shadow-xl shadow-orange-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  {copied ? <Check className="w-6 h-6" /> : <Copy className="w-6 h-6" />}
                  {copied ? t.copied : t.copy}
                </button>
                <button
                  onClick={() => {
                    setShowPrompt(false);
                    setStep(1);
                  }}
                  className="flex items-center justify-center gap-2 px-8 py-5 rounded-2xl font-bold text-stone-500 hover:bg-stone-200 transition-all"
                >
                  <RefreshCw className="w-5 h-5" />
                  {t.restart}
                </button>
              </div>

              <div className="p-6 bg-stone-100 rounded-2xl border border-stone-200">
                <p className="text-xs text-stone-500 leading-relaxed italic">
                  {t.disclaimer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Branding */}
      <footer className="fixed bottom-0 left-0 right-0 p-6 pointer-events-none">
        <div className="max-w-5xl mx-auto flex justify-end">
          <div className="bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-stone-200/50 text-[10px] font-black uppercase tracking-[0.3em] text-stone-300">
            Engineered by StrideMaster
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return <RunningPromptBuilder />;
}
