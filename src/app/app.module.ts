import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PanierComponent } from './panier/panier.component';
import { ArticleComponent } from './panier/article/article.component';
import { CreateArticleComponent } from './panier/create-article/create-article.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PanierComponent,
    ArticleComponent,
    CreateArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
