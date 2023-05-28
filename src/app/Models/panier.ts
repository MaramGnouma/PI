import { Lpanier } from "./lpanier";

export class Panier {
    id!: number;
	numero!:number;
	annee!:number;
	montant!:number;
	date_mvt:any;
	idClient!:number;
	client!:String;
	adresse!:String;
	nba!:number;
	lpaniers:Array<Lpanier> =[];

}
