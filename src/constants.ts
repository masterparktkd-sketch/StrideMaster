import { Language } from './types';

export const TRANSLATIONS: Record<Language, any> = {
  en: {
    title: 'StrideMaster',
    tagline: 'AI Running Architect',
    subtitle: 'Craft your perfect training blueprint',
    steps: ['Objective', 'Athlete Profile', 'Intelligence Modules', 'Fine-tuning', 'Final Review'],
    next: 'Continue',
    back: 'Previous',
    confirm: 'Review Blueprint',
    generate: 'Generate Master Prompt',
    restart: 'New Session',
    copy: 'Copy to Clipboard',
    copied: 'Copied!',
    
    // Step 1: Goals
    goalTitle: 'Primary Objective',
    goalSubtitle: 'What is the focus of this training cycle?',
    goals: {
      firstRace: 'Complete First Race',
      pr: 'Personal Record (PR)',
      distanceIncrease: 'Distance Progression',
      baseBuilding: 'Aerobic Base Building',
      weightLoss: 'Metabolic Conditioning',
      general: 'General Longevity'
    },
    
    // Step 2: Profile
    profileTitle: 'Athlete Profile',
    currentLevelTitle: 'Experience Level',
    levels: {
      beginner: 'Beginner',
      beginnerDesc: 'New to running or < 6 months consistent',
      intermediate: 'Intermediate',
      intermediateDesc: '6 months - 2 years consistent training',
      advanced: 'Advanced',
      advancedDesc: '2+ years of structured training'
    },
    weeklyMileageTitle: 'Current Weekly Volume',
    mileages: {
      '0-10': '0-10 miles',
      '10-20': '10-20 miles',
      '20-30': '20-30 miles',
      '30-40': '30-40 miles',
      '40+': '40+ miles'
    },
    raceDistanceTitle: 'Target Event Distance',
    distances: {
      '5k': '5K',
      '10k': '10K',
      'half': '21.1K (Half)',
      'full': '42.2K (Full)',
      'ultra': 'Ultra Marathon',
      'none': 'Non-Event Specific'
    },
    raceDateTitle: 'Event Date',
    raceDatePlaceholder: 'e.g., Oct 12, 2026',
    trainingDaysTitle: 'Availability (Days/Week)',
    limitationsTitle: 'Biomechanical Constraints',
    limitations: {
      kneeIssues: 'Knee Pathologies',
      shinSplints: 'Medial Tibial Stress',
      itBand: 'IT Band Friction',
      plantarFasciitis: 'Plantar Fasciitis',
      hipPain: 'Hip Impingement',
      achilles: 'Achilles Tendinopathy',
      none: 'No Known Constraints'
    },
    terrainTitle: 'Primary Training Surface',
    terrains: {
      road: 'Asphalt/Road',
      trail: 'Technical Trail',
      track: 'Synthetic Track',
      treadmill: 'Treadmill',
      mixed: 'Multi-Surface'
    },
    longestRunTitle: 'Recent Peak Duration',
    longestRunPlaceholder: 'e.g., 90 mins or 10 miles',
    currentPaceTitle: 'Current Threshold Pace',
    currentPacePlaceholder: 'e.g., 8:45/mile',
    targetPaceTitle: 'Target Event Pace',
    targetPacePlaceholder: 'e.g., 7:30/mile',
    preferredTimeTitle: 'Training Window',
    times: {
      earlyMorning: 'Dawn',
      morning: 'Morning',
      afternoon: 'Afternoon',
      evening: 'Dusk/Night',
      flexible: 'Variable'
    },
    
    // Step 3: Modules
    modulesTitle: 'Intelligence Modules',
    modulesSubtitle: 'Select the components for your AI coach to architect',
    moduleTraining: 'Training Periodization',
    moduleTrainingDesc: 'Macro/Meso/Micro cycle planning with specific workouts',
    moduleNutrition: 'Metabolic Fueling',
    moduleNutritionDesc: 'Intra-workout and daily nutritional strategies',
    moduleInjury: 'Structural Resilience',
    moduleInjuryDesc: 'Prehab, strength, and mobility protocols',
    moduleRecovery: 'Recovery Optimization',
    moduleRecoveryDesc: 'Sleep, inflammation management, and rest cycles',
    modulePacing: 'Pacing Dynamics',
    modulePacingDesc: 'Race day execution and split analysis',
    
    // Step 4: Details
    detailsTitle: 'Module Calibration',
    nutritionGoalTitle: 'Nutritional Focus',
    nutritionGoals: {
      performance: 'Power-to-Weight',
      weightLoss: 'Fat Oxidation',
      fuelRace: 'Glycogen Loading',
      general: 'General Health'
    },
    raceNutritionTitle: 'Fueling Modality',
    raceNutritions: {
      gels: 'Hydrogels/Gels',
      chews: 'Solid Chews',
      realFood: 'Whole Foods',
      mixed: 'Hybrid Approach',
      undecided: 'Coach Recommendation'
    },
    strengthTrainingTitle: 'Strength Foundation',
    strengthLevels: {
      none: 'Sedentary',
      minimal: 'Occasional (1x/week)',
      moderate: 'Consistent (2x/week)',
      regular: 'Structured (3x/week)'
    },
    mobilityWorkTitle: 'Mobility Routine',
    mobilityLevels: {
      none: 'None',
      occasional: 'Reactive',
      regular: 'Proactive (3x/week)',
      daily: 'Daily Integration'
    },
    recoveryMethodsTitle: 'Recovery Assets',
    recoveryMethods: {
      foam: 'SMR (Foam Rolling)',
      massage: 'Percussive/Manual',
      ice: 'Cryotherapy',
      compression: 'Pneumatic Compression',
      yoga: 'Restorative Yoga',
      stretching: 'Static Stretching'
    },
    sleepHoursTitle: 'Circadian Rest (Hours)',
    
    // Confirmation
    confirmationTitle: 'Review Blueprint',
    confirmationSubtitle: 'Verify your parameters before generation',
    edit: 'Modify',
    looksGood: 'Architect Prompt',
    
    // Prompt
    promptTitle: 'Master Coaching Prompt',
    promptSubtitle: 'Inject this logic into your preferred LLM',
    disclaimer: '⚠️ Disclaimer: This tool provides architectural guidance. Consult a physician before beginning any high-intensity exercise program.'
  },
  ko: {
    title: 'StrideMaster',
    tagline: 'AI 러닝 아키텍트',
    subtitle: '당신만의 완벽한 훈련 청사진을 설계하세요',
    steps: ['목표 설정', '러너 프로필', '지능형 모듈', '세부 조정', '최종 검토'],
    next: '계속하기',
    back: '이전으로',
    confirm: '청사진 검토',
    generate: '마스터 프롬프트 생성',
    restart: '새 세션 시작',
    copy: '클립보드에 복사',
    copied: '복사 완료!',
    
    goalTitle: '주요 목표',
    goalSubtitle: '이번 훈련 사이클의 핵심은 무엇인가요?',
    goals: {
      firstRace: '첫 대회 완주',
      pr: '개인 기록(PR) 경신',
      distanceIncrease: '거리 점진적 확대',
      baseBuilding: '유산소 베이스 구축',
      weightLoss: '대사 컨디셔닝(체중 감량)',
      general: '전반적인 건강 및 장수'
    },
    
    profileTitle: '러너 프로필',
    currentLevelTitle: '경력 수준',
    levels: {
      beginner: '초급',
      beginnerDesc: '러닝 시작 또는 6개월 미만 꾸준함',
      intermediate: '중급',
      intermediateDesc: '6개월 - 2년 꾸준한 훈련',
      advanced: '고급',
      advancedDesc: '2년 이상의 체계적인 훈련'
    },
    weeklyMileageTitle: '현재 주간 훈련량',
    mileages: {
      '0-10': '0-16km',
      '10-20': '16-32km',
      '20-30': '32-48km',
      '30-40': '48-64km',
      '40+': '64km 이상'
    },
    raceDistanceTitle: '목표 대회 거리',
    distances: {
      '5k': '5K',
      '10k': '10K',
      'half': '하프 마라톤 (21.1K)',
      'full': '풀 마라톤 (42.2K)',
      'ultra': '울트라 마라톤',
      'none': '특정 대회 없음'
    },
    raceDateTitle: '대회 날짜',
    raceDatePlaceholder: '예: 2026년 10월 12일',
    trainingDaysTitle: '주간 가용 시간 (일수)',
    limitationsTitle: '생체역학적 제약 사항',
    limitations: {
      kneeIssues: '무릎 병증',
      shinSplints: '정강이 통증',
      itBand: '장경인대 증후군',
      plantarFasciitis: '족저근막염',
      hipPain: '고관절 충돌',
      achilles: '아킬레스건염',
      none: '알려진 제약 없음'
    },
    terrainTitle: '주요 훈련 지형',
    terrains: {
      road: '아스팔트/로드',
      trail: '테크니컬 트레일',
      track: '트랙',
      treadmill: '트레드밀',
      mixed: '혼합 지형'
    },
    longestRunTitle: '최근 최장 훈련 시간/거리',
    longestRunPlaceholder: '예: 90분 또는 16km',
    currentPaceTitle: '현재 역치 페이스',
    currentPacePlaceholder: '예: 5:30/km',
    targetPaceTitle: '목표 대회 페이스',
    targetPacePlaceholder: '예: 4:45/km',
    preferredTimeTitle: '훈련 시간대',
    times: {
      earlyMorning: '새벽',
      morning: '오전',
      afternoon: '오후',
      evening: '저녁/밤',
      flexible: '유동적'
    },
    
    modulesTitle: '지능형 모듈',
    modulesSubtitle: 'AI 코치가 설계할 구성 요소를 선택하세요',
    moduleTraining: '훈련 주기화',
    moduleTrainingDesc: '거시/중시/미시 사이클 계획 및 특정 워크아웃',
    moduleNutrition: '대사 영양',
    moduleNutritionDesc: '운동 중 및 일상 영양 전략',
    moduleInjury: '구조적 회복력',
    moduleInjuryDesc: '프리햅, 근력 및 모빌리티 프로토콜',
    moduleRecovery: '회복 최적화',
    moduleRecoveryDesc: '수면, 염증 관리 및 휴식 사이클',
    modulePacing: '페이스 역학',
    modulePacingDesc: '대회 당일 실행 및 스플릿 분석',
    
    detailsTitle: '모듈 정밀 조정',
    nutritionGoalTitle: '영양 중점 사항',
    nutritionGoals: {
      performance: '체중 대비 파워 최적화',
      weightLoss: '지방 산화 촉진',
      fuelRace: '글리코겐 로딩',
      general: '전반적인 건강'
    },
    raceNutritionTitle: '에너지 보충 방식',
    raceNutritions: {
      gels: '에너지 젤/하이드로젤',
      chews: '고체 츄',
      realFood: '자연식',
      mixed: '하이브리드 방식',
      undecided: '코치 추천'
    },
    strengthTrainingTitle: '근력 기초',
    strengthLevels: {
      none: '거의 없음',
      minimal: '가끔 (주 1회)',
      moderate: '꾸준함 (주 2회)',
      regular: '체계적 (주 3회)'
    },
    mobilityWorkTitle: '모빌리티 루틴',
    mobilityLevels: {
      none: '없음',
      occasional: '통증 발생 시',
      regular: '선제적 (주 3회)',
      daily: '매일 통합'
    },
    recoveryMethodsTitle: '보유 회복 자산',
    recoveryMethods: {
      foam: 'SMR (폼롤링)',
      massage: '퍼커시브/수동 마사지',
      ice: '냉각 요법',
      compression: '공기압 압박',
      yoga: '회복 요법(요가)',
      stretching: '정적 스트레칭'
    },
    sleepHoursTitle: '수면 시간 (시간)',
    
    confirmationTitle: '청사진 검토',
    confirmationSubtitle: '생성 전 설정한 파라미터를 확인하세요',
    edit: '수정하기',
    looksGood: '프롬프트 설계 시작',
    
    promptTitle: '마스터 코칭 프롬프트',
    promptSubtitle: '이 로직을 선호하는 LLM에 주입하세요',
    disclaimer: '⚠️ 면책 조항: 이 도구는 구조적 가이드를 제공합니다. 고강도 운동 프로그램을 시작하기 전에 의사와 상담하십시오.'
  }
};
