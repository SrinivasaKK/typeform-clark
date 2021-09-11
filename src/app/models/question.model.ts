export interface Choice {
  label: string;
  value: string;
  selected: boolean;
}

export interface Jump {
  conditions: Conditions[];
  destination: Destination;
}

export interface Conditions {
  field: string;
  value: string;
}

export interface Destination {
  id: string;
}

export interface Questions {
  question_type: string;
  identifier: string;
  headline: string;
  description: string;
  required: boolean;
  multiline?: string;
  multiple?: string;
  choices?: Choice[];
  jumps?: Jump[];
}

export interface Questionnaire {
  id: number;
  identifier: string;
  name: string;
  questions: Questions[];
}
