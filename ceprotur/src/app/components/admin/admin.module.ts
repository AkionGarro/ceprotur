import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiciosComponent } from './servicios/servicios.component';

@NgModule({
  declarations: [AdminComponent, AddAdminComponent, ServiciosComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
