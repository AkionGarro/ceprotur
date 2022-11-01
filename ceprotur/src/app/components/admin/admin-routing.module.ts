import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AdminComponent } from './admin.component';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'add-admin', component: AddAdminComponent },
  { path: 'servicios', component: ServiciosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
