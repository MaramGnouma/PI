export class Food {
  constructor(
    public idProduit: number,
    public designation: String,
    public description: String,
    public prix: number,
    public photo: String,
    public marque: String,
    public quantite: String,
    public garniture: String,
    public promotion: number,
    public categorie: String,
    public type: String
  ) {}
}
