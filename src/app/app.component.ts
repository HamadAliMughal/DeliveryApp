import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MHeaderComponent } from './m-framework/m-header/m-header.component';
import { MCardComponent } from './m-framework/m-card/m-card.component';
import { MContainerComponent } from './m-framework/m-container/m-container.component';
import { CommonModule } from '@angular/common';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfkkoEisi7qJkSucYhZ0v2zUSXspmPJF8",
  authDomain: "deliveryapp-5bedb.firebaseapp.com",
  projectId: "deliveryapp-5bedb",
  storageBucket: "deliveryapp-5bedb.appspot.com",
  messagingSenderId: "754271695647",
  appId: "1:754271695647:web:7faec24cd2f2937c3b762a",
  measurementId: "G-44QFFSXZ8L"
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
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAnalyticsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'DeliveryApp';

  constructor() {
  
  }
}
