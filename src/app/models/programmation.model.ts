export interface Professeur {
  id: number;
  nom: string;
  prenom: string;
  specialite: string;
  created_at: string;
  updated_at: string;
}

export interface Matiere {
  id: number;
  nom: string;
  created_at: string;
  updated_at: string;
}

export interface Classe {
  id: number;
  nom: string;
  created_at: string;
  updated_at: string;
}

export interface Programmation {
  id: number;
  matiere_id: number;
  classe_id: number;
  professeur_id: number;
  created_at: string;
  updated_at: string;
  professeur: Professeur;
  matiere: Matiere;
  classe: Classe;
}

export interface Link {
  url: string | null;
  label: string;
  active: boolean;
}

export interface Data {
  current_page: number;
  data: Programmation[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface ReponseProgrammation {
  statut: number;
  data: Data;
}
