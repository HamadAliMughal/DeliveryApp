import { Component } from '@angular/core';
import { MContainerComponent } from '../../m-framework/m-container/m-container.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

 // Menu navigation here
 constructor(private router:Router){

 }
  
  goToTrackRoute(){
    this.router.navigateByUrl('track');
  }
  goToDefineRoute(){
    this.router.navigateByUrl('define');
  }
  
}