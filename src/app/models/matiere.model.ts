export interface Matiere {
  id: number;
  nom: string;
  created_at: string;
  updated_at: string;
}

export interface ReponseMatiere {
  statut: number;
  data: Matiere[];
}
