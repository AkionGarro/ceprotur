import { Component, OnInit } from '@angular/core';
import { ListServiceInterface } from 'src/app/models/admin';

const element : ListServiceInterface[] = [
  {position: 1, name: 'Hydrogen', tipo: 'Asesoría'},
  {position: 2, name: 'Helium', tipo: 'Consultoría'},
  {position: 3, name: 'Lithium', tipo: 'Asesoría'},
  {position: 4, name: 'Beryllium', tipo: 'Contratación de profesionales'},
  {position: 5, name: 'Boron', tipo: 'Asesoría'},
  {position: 6, name: 'Carbon', tipo: 'Capacitación'},
  {position: 7, name: 'Nitrogen', tipo: 'Consultoría'},
  {position: 8, name: 'Oxygen', tipo: 'Asesoría'},
  {position: 9, name: 'Fluorine', tipo: 'Asesoría'},
  {position: 10, name: 'Neon', tipo: 'Consultoría'},
  {position: 10, name: 'Gold', tipo: 'Capacitación'},
  {position: 11, name: 'Sodium', tipo: 'Asesoría'},
];

@Component({
  selector: 'app-lista-servicios',
  templateUrl: './lista-servicios.component.html',
  styleUrls: ['./lista-servicios.component.css']
})
export class ListaServiciosComponent implements OnInit {
    
  
  dataSource: any;
  displayedColumns: any; 

  clickedRows = new Set<ListServiceInterface>();

  constructor() { 
    this.dataSource = element;
    this.displayedColumns = ['position', 'name', 'tipo'];
  }
  

  ngOnInit(): void {
  }

}
