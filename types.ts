
export interface PerformanceData {
  originalBhp: number;
  tunedBhp: number;
  originalTorque: number;
  tunedTorque: number;
  efficiencyGain: string;
  stageInfo: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

export enum TuningStage {
  STAGE_1 = 'Stage 1',
  STAGE_2 = 'Stage 2',
  ECO = 'Eco Tuning',
}
