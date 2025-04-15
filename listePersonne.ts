import { Personne } from "./Personne";

export class listePersonne{
   private personnes:Personne[];
   //le constructeur
   constructor(personnes:Personne[]){
    this.personnes=personnes;
   }
   //getter
   public getpers(): Personne[] {
    return this.personnes;
  }

  // Setter 
  public setpers(personnes: Personne[]): void {
    this.personnes = personnes;
  }
  findByNom(s: string): Personne | null {
    for (let i of this.personnes) {
      if (s === i.getnom) {
        return i;
      }
    }
    
    return null; 
  }
  public findByCodePostal(cp: string) : boolean{
    for (let pers of  this.personnes){
        for(let  a of pers.getadresses){
            if(cp === a.codegetter ) {
                return true ;
            }
        }
       
    }
    return false ;
}


public countPersonneVille(ville: string) : number {
let c =0 ;

    for (let pers of  this.personnes){
        for(let  a of pers.getadresses){
            if(ville === a.villegetter ) {
               c++; 
            }
        }
       
    }
    return c;
}
  

   }
