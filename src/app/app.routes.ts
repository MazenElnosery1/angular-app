import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
  {path:'', component:HomeComponent,title:'Home'},
  {path:'about', component:AboutComponent,title:'ABOUT'},
  {path:'protfolio',component:PortfolioComponent ,title:'PROTFOLIO'},
  {path:'contact',component:ContactComponent ,title:'CONTACT'},
  {path:'**',component:NotfoundComponent,title:'ERROR 404'}


];
