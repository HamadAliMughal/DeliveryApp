import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MHeaderComponent } from './m-framework/m-header/m-header.component';
import { MCardComponent } from './m-framework/m-card/m-card.component';
import { MContainerComponent } from './m-framework/m-container/m-container.component';
import { CommonModule } from '@angular/common';
import {AngularFireModule} from '@angular/fire/compat';


const firebaseConfig = {
  apiKey: "AIzaSyCfkkoEisi7qJkSucYhZ0v2zUSXspmPJF8",
  authDomain: "deliveryapp-5bedb.firebaseapp.com",
  projectId: "deliveryapp-5bedb",
  storageBucket: "deliveryapp-5bedb.appspot.com",
  messagingSenderId: "754271695647",
  appId: "1:754271695647:web:e43489f7c612ec6a3b762a",
  measurementId: "G-J54VJ3TJCR"
};


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MContainerComponent,
    MCardComponent,
    MHeaderComponent,
    RouterOutlet,
    CommonModule,
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'DeliveryApp';

  constructor() {
    AngularFireModule.initializeApp(firebaseConfig)
    if(AngularFireModule.initializeApp(firebaseConfig))
      {
        console.log('Firebase initialized successfully');
      }
      else{
        console.error('Error initializing Firebase:');
      }
  
  }
}