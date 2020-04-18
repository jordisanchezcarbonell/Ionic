import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { llista } from './test.service';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  arraydeitems :llista[] =[];
  constructor(private storage: Storage) { }


  guardarLemento(arraydeitems :llista){
    this.arraydeitems.unshift(arraydeitems);
    this.storage.set('favoritos',this.arraydeitems);
  }
}
