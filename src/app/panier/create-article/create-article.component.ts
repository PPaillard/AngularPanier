import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Article } from 'src/app/common/article.model';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  @Output() sendArticle: EventEmitter<Article> = new EventEmitter();
  description: string;
  prix: number;
  quantite: number;
  constructor() { }

  ngOnInit(): void {
  }

  createAndSendArticle():void{
    this.sendArticle.emit(
      new Article(this.description, this.prix, this.quantite)
    )
    this.description = ""
    this.prix = null
    this.quantite = null
  }

}
