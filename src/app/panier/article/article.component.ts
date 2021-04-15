import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from 'src/app/common/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  @Output() articleToParent: EventEmitter<Article> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  supprArticle() {
    // j'appelle la méthode chez le parent qui va supprimer l'article
    this.articleToParent.emit(this.article);
  }
}
