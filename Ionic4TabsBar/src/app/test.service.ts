import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
}

export interface llista {
  id: Number;
  nombre: string;
  fechaInicio: Date;
  //fechaFin: Date;
  terminada: boolean;
  items: llistaItem[];
}


export interface llistaItem {
  descripcion: string;
  completado: boolean;

}
/*
	id → guardarà la data de creació de la llista new Date.getTime();
	titulo → nom de la llista
	fechaInicio → new Date()
	fechaFin → Date()
	terminada → boolean
	items[] → listaItem[]
Classe listaItem:
	descripcion → string
	completado → boolean

  */