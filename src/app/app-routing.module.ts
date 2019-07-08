import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormRComponent} from './form-r/form-r.component';
import { FormTComponent } from './form-t/form-t.component';

// const routes: Routes = [
//   {path:'reactiveform',component:FormRComponent},
//   {path:'templateform',component:FormTComponent},
// ];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 export const routingComponents=[FormRComponent,FormTComponent]
