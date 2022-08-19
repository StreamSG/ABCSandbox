import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './app-home/aaronComponents/search-component/search.component';
import { DefaultComponent } from './app-home/default/default.component';

const routes: Routes = [
  { path: '', component: DefaultComponent },
  { path: 'search', component: SearchComponent },
  { path: 'default', component: DefaultComponent},
  { path: '**', component: DefaultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
