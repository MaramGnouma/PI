import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Classes/menu/menu.component';
import { AcceuilComponent } from './Classes/acceuil/acceuil.component';
import { ProduitsComponent } from './Classes/produits/produits.component';
import { ProposComponent } from './Classes/propos/propos.component';
import { MarquesComponent } from './Classes/marques/marques.component';
import { DiagnosticComponent } from './Classes/diagnostic/diagnostic.component';
import { ErreurComponent } from './Classes/erreur/erreur.component';
import { FooterComponent } from './Classes/footer/footer.component';

import { DetailProduitComponent } from './Classes/detail-produit/detail-produit.component';
import { HttpClientModule } from '@angular/common/http';
import { CategorieComponent } from './Classes/categorie/categorie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './admin/nav/nav.component';
import { AddComponent } from './admin/add/add.component';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HeaderComponent } from './admin/header/header.component';
import { ListeProduitsComponent } from './admin/liste-produits/liste-produits.component';
import { UpdateProduitComponent } from './admin/update-produit/update-produit.component';
import { LoginAdmin2Component } from './admin/login-admin2/login-admin2.component';
import { AccountComponent } from './admin/account/account.component';
import { UpdatePasswordComponent } from './admin/update-password/update-password.component';
import { DetailsmatComponent } from './admin/detailsmat/detailsmat.component';
import { AddfoodComponent } from './admin/addfood/addfood.component';
import { DetailsfoodComponent } from './admin/detailsfood/detailsfood.component';
import { DetailsMaterielsComponent } from './Classes/details-materiels/details-materiels.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AcceuilComponent,
    ProduitsComponent,
    ProposComponent,
    MarquesComponent,
    DiagnosticComponent,
    ErreurComponent,
    FooterComponent,
    DetailProduitComponent,
    CategorieComponent,
    NavComponent,
    AddComponent,
    LoginAdminComponent,
    DashboardComponent,
    HeaderComponent,
    ListeProduitsComponent,
    UpdateProduitComponent,
    LoginAdmin2Component,
    AccountComponent,
    UpdatePasswordComponent,
    DetailsmatComponent,
    AddfoodComponent,
    DetailsfoodComponent,
    DetailsMaterielsComponent,
  ],

  imports: [BrowserModule,
     AppRoutingModule,
      HttpClientModule,
      FormsModule,
     ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
