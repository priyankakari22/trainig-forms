import { Component,OnInit } from '@angular/core';
import { FormRComponent } from './form-r/form-r.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'form';
  //array:any=[];
  det1: any;
  det2: any;
  
  ngOnInit(){
   
    
  }
 
  
  
  //  public det1($event: any){
  //   console.log(this.array,"appp");
  //   console.log($event,"evebe");
    
  //     return this.array=$event;
      
  
   
    
  //  }
  
}
