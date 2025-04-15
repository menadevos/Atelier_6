class Point {
    private abs: number;
    private ord: number; 
    //constructeur 
    constructor(abs:number , ord:number){
        this.abs=abs;
        this.ord=ord; 
    }
    //les getters des deux attributs
    get abscisse(): number {
        return  this.abs;
    }
    get ordonne(): number {
        return  this.ord;
    }
//les setters des deux attributs
 set abscisse (abs:number){
    this.abs=abs;
 }
 set ordonne (ord:number){
    this.ord=ord;
 }
 //la fonction calculerdistance 
 calculerDistance(p: Point): number {
 return Math.sqrt( (Math.pow((this.abs - p.abs),2))+(Math.pow((this.ord - p.ord),2)));
 }} 
 let p1= new Point (5,7);
 let p2= new Point (5,2);
 console.log(`le point p1 : (${p1.abscisse},${p1.ordonne})`);
 console.log(`le point p2 : (${p2.abscisse},${p2.ordonne})`);
 //la distance entre les deux point 
 console.log(`la distance entre les points est  :${p1.calculerDistance(p2)}`);

