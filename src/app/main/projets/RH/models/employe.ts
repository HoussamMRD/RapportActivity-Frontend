export interface Competence {
    id: number;
    name: string;
}

export interface Tache {
    id: number;
    description: string;
}

export interface Poste {
    id: number;
    intitule: string;
    minSalaire?: number | null;
    maxSalaire?: number | null;
    description: string;
    niveau: string;
    experience: number;
    competences: Competence[];
    taches: Tache[];
}

export interface Department {
    id: number;
    deptCode: string;
    deptName: string;
    firstTransactionTime: string;
    lastTransactionTime: string;
    lunchBreakTime: string;
    morningDuration: number;
    pmDuration: number;
    durationDay: number;
    exposureTime: number;
    actif: boolean;
    responsable?: any;
}

export interface Coordonnees {
    id: number;
    adresse: string;
    telephone: string;
    portable: string;
    email: string;
    codePostal: number;
    nomBanque: string;
    rib: number;
    iban: string;
    paiementMode: string;
}

export interface Employee {
    id: number;
    matricule: string;
    nom: string;
    prenom: string;
    civilite: string;
    dateNaissance: Date;
    nationalite: string;
    department: Department;
    poste: Poste;
    nombreEnfants: number;
    coordonnees: Coordonnees;
    competences: Competence[];
}
