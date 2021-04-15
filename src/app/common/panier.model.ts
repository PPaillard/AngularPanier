import { Article } from './article.model';

export class Panier {
  private total: number;
  public articles: Article[];

  constructor() {
    this.total = 0;
    this.articles = new Array<Article>();
  }
  // Fonction permettant d'ajouter un article au panier
  ajouterArticle(article: Article) {
    this.articles.push(article);
  }
  // Fonction permettant de supprimer un article du panier
  supprimerArticle(article) {
    for (let i = 0; i < this.articles.length; i++) {
      if (this.articles[i].id === article.id) {
        this.articles.splice(i, 1);
        break;
      }
    }
  }
  // met à jour le prix total du panier
  mettreAJourTotal() {
    this.total = 0;
    // Pour chaque article de mon panier
    for (let article of this.articles) {
      // je multiplie la quantité de l'article indiqué par son prix
      this.total += article.prix * article.quantite;
    }
  }

  getTotal(): number {
    this.mettreAJourTotal();
    return this.total;
  }
}
