export type Language = 'en' | 'ko';

export type RunningGoal = 
  | 'firstRace' 
  | 'pr' 
  | 'distanceIncrease' 
  | 'baseBuilding' 
  | 'weightLoss' 
  | 'general';

export type RunningLevel = 'beginner' | 'intermediate' | 'advanced';

export type RaceDistance = '5k' | '10k' | 'half' | 'full' | 'ultra' | 'none';

export type TrainingModule = 'trainingPlan' | 'nutrition' | 'injury' | 'recovery' | 'pacing';

export interface FormData {
  goal: RunningGoal | '';
  currentLevel: RunningLevel | '';
  weeklyMileage: string;
  raceDistance: RaceDistance | '';
  raceDate: string;
  trainingDays: string;
  limitations: string[];
  terrain: string[];
  modules: Record<TrainingModule, boolean>;
  longestRun: string;
  currentPace: string;
  targetPace: string;
  preferredTime: string;
  nutritionGoal: string;
  raceNutrition: string;
  strengthTraining: string;
  mobilityWork: string;
  recoveryMethods: string[];
  sleepHours: string;
}
