import { Component, OnInit } from '@angular/core';
import { Article } from '../common/article.model';
import { Panier } from '../common/panier.model';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  public panier: Panier;

  constructor() { 
    this.panier = new Panier();
  }

  ngOnInit(): void {
  }

  receiveArticle($event:Article):void{
    this.panier.ajouterArticle($event);
  }

}
