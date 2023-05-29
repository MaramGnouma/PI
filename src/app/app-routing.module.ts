import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './Classes/acceuil/acceuil.component';
import { DetailProduitComponent } from './Classes/detail-produit/detail-produit.component';
import { DiagnosticComponent } from './Classes/diagnostic/diagnostic.component';
import { ErreurComponent } from './Classes/erreur/erreur.component';
import { MarquesComponent } from './Classes/marques/marques.component';
import { ProduitsComponent } from './Classes/produits/produits.component';
import { ProposComponent } from './Classes/propos/propos.component';
import { CategorieComponent } from './Classes/categorie/categorie.component';
import { NavComponent } from './admin/nav/nav.component';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ListeProduitsComponent } from './admin/liste-produits/liste-produits.component';
import { UpdateProduitComponent } from './admin/update-produit/update-produit.component';
import { AddComponent } from './admin/add/add.component';
import { LoginAdmin2Component } from './admin/login-admin2/login-admin2.component';
import { AccountComponent } from './admin/account/account.component';
import { UpdatePasswordComponent } from './admin/update-password/update-password.component';
import { DetailsmatComponent } from './admin/detailsmat/detailsmat.component';
import { AddfoodComponent } from './admin/addfood/addfood.component';
import { DetailsfoodComponent } from './admin/detailsfood/detailsfood.component';
import { DetailsMaterielsComponent } from './Classes/details-materiels/details-materiels.component';

const routes: Routes = [
  { path: 'acceuil', title: 'Acceuil', component: AcceuilComponent },
  {path:'nav',title:'Menu',component:NavComponent},
  //{path:'loginadmin',title:'Login Admin',component:LoginAdminComponent},
  {path:'loginadmin',title:'Login Admin',component:LoginAdmin2Component},
  {path:'dash',title:'Acceuil Admin',component:DashboardComponent,
  children:[
    {path:'listeproduits',title:'Liste des Produits',component:ListeProduitsComponent},
  {path:'Ajouter',title:'Ajouter Produit',component:AddComponent},
  {path:'Ajouter2',title:'Ajouter Produit',component:AddfoodComponent},
  {path:'account',title:'Account',component:UpdatePasswordComponent},
  {path:'details/:id',title:'Détails Matériels',component:DetailsmatComponent},
  {path:'detailsfood/:id',title:'Détails Matériels',component:DetailsfoodComponent}
  ]
},
{path :'updateproduit/:id',title:'Update Produit',component:UpdateProduitComponent},

 
  { path: 'propos', title: 'A propos', component: ProposComponent },
  { path: 'marque', title: 'Nos marques', component: MarquesComponent },

 { path: 'categorie/:id', title: 'Votre catégorie', component: CategorieComponent },

  {
    path: 'diagnostic',
    title: 'Diagnosctic-IMC',
    component: DiagnosticComponent,
  },
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
  { path: 'mate/:id', component:DetailsMaterielsComponent }
,
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
