import { Adresse } from "./Adresse";
import { Personne } from "./Personne";
import { listePersonne } from "./listePersonne";

const adr1 = new Adresse("Rue Zerktouni", "Tanger", "90000");
const adr2 = new Adresse("Rue Lafayette", "Paris", "75000");
const adr3 = new Adresse("Rue Mohammed V", "Rabat", "10000");

const p1 = new Personne("Ali", "M", [adr1, adr2]);
const p2 = new Personne("Sara", "F", [adr3]);
const p3 = new Personne("Youssef", "M", [adr1]);

const liste = new listePersonne([p1, p2, p3]);

console.log("Personne nommée Sara :", liste.findByNom("Sara"));
console.log("Code postal 75000 trouvé ?", liste.findByCodePostal("75000")); // true
console.log("Nombre de personnes à Tanger :", liste.countPersonneVille("Tanger")); // 2
