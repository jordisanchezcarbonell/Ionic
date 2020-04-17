import { Component, OnInit } from '@angular/core';
import { AlertController,NavController } from '@ionic/angular';
import {ActivatedRoute} from  '@angular/router';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  prueba="";
  inputValue: string;
  Object1 ="";
  allPlayers = [];
  constructor(public alertController: AlertController,public navCntrl:NavController,private activeRoute:ActivatedRoute) {

    //this.prueba=navParams.get("prueba");
    this.allPlayers;

  }

  ngOnInit() {
    this.prueba=this.activeRoute.snapshot.paramMap.get('id');
  }
  handleLogin() {
    // Do your stuff here
    this.Object1=this.inputValue;
    console.log( this.allPlayers);
    console.log( this.Object1);
    this.allPlayers.push(this.Object1);
    alert(this.Object1);
}
}
