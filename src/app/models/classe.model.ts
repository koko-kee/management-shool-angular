export interface Classe {
  id: number;
  nom: string;
  created_at: string;
  updated_at: string;
}

export interface ReponseClasse {
  statut: number;
  data: Classe[];
}
