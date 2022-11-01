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
<<<<<<< Updated upstream
import { ServiciosComponent } from './servicios/servicios.component';
=======
import {MatTabsModule} from '@angular/material/tabs';
import { ListaServiciosComponent } from './lista-servicios/lista-servicios.component';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AdminComponent,
    AddAdminComponent,
<<<<<<< Updated upstream
    ServiciosComponent
=======
    ListaServiciosComponent
>>>>>>> Stashed changes
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatTableModule,
    MatDividerModule
    
  ]
})
export class AdminModule { }
