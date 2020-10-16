import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AboutComponent } from './about/about.component';
import { UeberMichComponent} from "./ueber-mich/ueber-mich.component";


const routes: Routes = [
  { path: '', redirectTo: '/angebot', pathMatch: 'full' },
  { path: 'ueber-mich', component: UeberMichComponent },
  { path: 'angebot', component: DashboardComponent },
  { path: 'kontakt', component: AboutComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'preise', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
