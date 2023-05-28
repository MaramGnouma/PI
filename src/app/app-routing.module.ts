import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './Classes/acceuil/acceuil.component';
import { DetailProduitComponent } from './Classes/detail-produit/detail-produit.component';
import { DiagnosticComponent } from './Classes/diagnostic/diagnostic.component';
import { ErreurComponent } from './Classes/erreur/erreur.component';

import { LoginComponent } from './Classes/login/login.component';
import { MarquesComponent } from './Classes/marques/marques.component';
import { ProduitsComponent } from './Classes/produits/produits.component';
import { ProposComponent } from './Classes/propos/propos.component';
import { CategorieComponent } from './Classes/categorie/categorie.component';
import { ListpanierComponent } from './Classes/listpanier/listpanier.component';

const routes: Routes = [
  { path: 'acceuil', title: 'Acceuil', component: AcceuilComponent },
  { path: 'listepanier', title: 'Liste Panier', component: ListpanierComponent },
  { path: 'propos', title: 'A propos', component: ProposComponent },
  { path: 'marque', title: 'Nos marques', component: MarquesComponent },
 { path: 'categorie/:id', title: 'Votre catégorie', component: CategorieComponent },

  {
    path: 'diagnostic',
    title: 'Diagnosctic-IMC',
    component: DiagnosticComponent,
  },
  { path: 'login', title: 'Login', component: LoginComponent },
  { path: 'produit', title: 'Nos produits', component: ProduitsComponent },
  {
    path: 'produit/:sante',
    title: 'Nos produits',
    component: ProduitsComponent,
  },
  {
    path: 'produit/:performance',
    title: 'Nos produits',
    component: ProduitsComponent,
  },
  {
    path: 'produit/:perd',
    title: 'Nos produits',
    component: ProduitsComponent,
  },
  {
    path: 'produit/:prise',
    title: 'Nos produits',
    component: ProduitsComponent,
  },
  {
    path: 'prod/:id',
    component: DetailProduitComponent,
  },
  { path: '', redirectTo: 'acceuil', pathMatch: 'full' },
  { path: '**', title: 'Erreur 404', component: ErreurComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
