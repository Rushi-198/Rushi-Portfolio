import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { AboutComponent } from './shared/component/about/about.component';
import { PortfolioComponent } from './shared/component/portfolio/portfolio.component';
import { ContactComponent } from './shared/component/contact/contact.component';



const routes: Routes = [

  { path: '', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },



];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
