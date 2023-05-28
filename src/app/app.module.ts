import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Classes/menu/menu.component';
import { AcceuilComponent } from './Classes/acceuil/acceuil.component';
import { ProduitsComponent } from './Classes/produits/produits.component';
import { ProposComponent } from './Classes/propos/propos.component';
import { MarquesComponent } from './Classes/marques/marques.component';
import { LoginComponent } from './Classes/login/login.component';
import { DiagnosticComponent } from './Classes/diagnostic/diagnostic.component';
import { ErreurComponent } from './Classes/erreur/erreur.component';
import { FooterComponent } from './Classes/footer/footer.component';

import { DetailProduitComponent } from './Classes/detail-produit/detail-produit.component';
import { HttpClientModule } from '@angular/common/http';
import { CategorieComponent } from './Classes/categorie/categorie.component';
import { FormsModule } from '@angular/forms';
import { ListpanierComponent } from './Classes/listpanier/listpanier.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AcceuilComponent,
    ProduitsComponent,
    ProposComponent,
    MarquesComponent,
    LoginComponent,
    DiagnosticComponent,
    ErreurComponent,
    FooterComponent,
    DetailProduitComponent,
    CategorieComponent,
    ListpanierComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
