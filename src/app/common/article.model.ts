import { TOOLS } from './tools';

export class Article {
  public id: number;
  public description: string;
  public prix: number;
  public quantite: number;

  constructor(description: string, prix: number, quantite: number) {
    this.id = TOOLS.generateRandomNumber(1, 1000000);
    this.description = description;
    this.prix = prix;
    this.quantite = quantite;
  }
}
