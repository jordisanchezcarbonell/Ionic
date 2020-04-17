import { Component, OnInit } from '@angular/core';
import { AlertController,NavController } from '@ionic/angular';
import { ListaPage } from '../lista/lista.page';
import {Router} from '@angular/router';

const prueba="";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  allPlayers = [];

  constructor(public router:Router ,public alertController: AlertController,public navCntrl:NavController) {}
  async presentAlert(prueba) {
    const alert = await this.alertController.create({
      header: 'Nueva lista',
      subHeader: 'Introduce el nombre de la nueva lista',
      inputs: [
        {
          name: 'Nombre',
          placeholder: 'Nombre de la lista'
        }      
      ],
      buttons: [
        
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Agregar',
            handler: data => {
              
              prueba=data.Nombre
              this.mostrar(prueba);
              this.allPlayers.push(data.Nombre);

          }
          }
        
      ]
      
    });

    
    await alert.present();
  

 // this.navCtrl.navigateForward('/tabs',data.nombre); 
    
  }

 
  public mostrar(prueba){
  //  this.router.navigate(['/lista'],prueba)
    this.navCntrl.navigateForward(`/lista/${prueba}`);
   // this.router.navigate(['/lista' + '/' + prueba]);

   // this.navCntrl.push(ListaPage)
console.log("hola");
console.log(prueba);
  
  }


  ngOnInit() {
  }

}
