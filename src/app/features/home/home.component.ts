import { Component } from '@angular/core';
import { MContainerComponent } from '../../m-framework/m-container/m-container.component';
import { Router } from '@angular/router';
import { ToastService } from '../../services/toast.service';
import { MAhaComponent } from '../../m-framework/m-aha/m-aha.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MContainerComponent,MAhaComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

 // Menu navigation here
 constructor(private router:Router, public toastService:ToastService){

 }
  
  goToTrackRoute(){
    this.router.navigateByUrl('track');
  }
  goToDefineRoute(){
    this.router.navigateByUrl('define');
  }
  toastError(){
    this.toastService.prepare("Test toast body as error","error",3000,"Error").show();
  }
  toastInfo(){
    this.toastService.prepare("Test toast body as info","success",3000,"Info").show();
  }
}