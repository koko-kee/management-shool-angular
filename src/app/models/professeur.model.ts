export interface Professeur {
  id: number;
  nom: string;
  prenom: string;
  specialite: string;
  created_at: string;
  updated_at: string;
}

export interface ReponseProfesseur {
  statut: number;
  data: Professeur[];
}
