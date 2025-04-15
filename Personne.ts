import { Adresse } from "./Adresse";

export class Personne {
    private nom: string;
    private sexe: 'M' | 'F';
    private tabadresse: Adresse[];

    // Constructeur
    constructor(nom: string, sexe: 'M' | 'F', tabadresse: Adresse[]) {
        this.nom = nom;
        this.sexe = sexe;
        this.tabadresse = tabadresse;
    }

    //les  Getters
    get getnom(): string {
        return this.nom;
    }

    get getsexe(): 'M' | 'F' {
        return this.sexe;
    }

    get getadresses(): Adresse[] {
        return this.tabadresse;
    }

    //les  Setters
    set setnom(nom: string) {
        this.nom = nom;
    }

    set setsexe(sexe: 'M' | 'F') {
        this.sexe = sexe;
    }

    set setadresses(adresses: Adresse[]) {
        this.tabadresse = adresses;
    }

}
