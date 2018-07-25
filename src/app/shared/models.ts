export class Allergy {
  name: string;
  loinc: string;
  onset_date: string;
  status: string;
}

export class Medication {
  name: string;
  start_date: string;
  description: string;
  dose: string;
  status: string;
}


export class ChecklistItem {
  name: string;
  checked: boolean;

  constructor(name: string) {
    this.name = name;
  }
}
