
export class Adresse {
    private rue :String;
    private ville :String;
    private codePostale :String;
     constructor(rue:String , ville:String, codePostale:String){
        this.rue=rue;
        this.ville=ville;
        this.codePostale=codePostale;
     }
 //les getters 
 get ruegetter():String{
    return this.rue;
 }
 get villegetter():String{
    return this.ville;
 }
 get codegetter():String{
    return this.codePostale;
 }
 //les setters
set rueset(rue:String){
    this.rue=rue;
}
set villset(ville:String){
    this.ville=ville;
}
set codeset(codePostale:String){
    this.codePostale=codePostale;
}
}
