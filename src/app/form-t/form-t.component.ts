
import { Component,  OnInit }  from '@angular/core';
import { FormtService } from '../Formt.service';



@Component({
  selector: 'app-form-t',
  templateUrl: './form-t.component.html',
  styleUrls: ['./form-t.component.scss']
})
export class  FormTComponent implements OnInit {
  title = 'Template Driven Form';
  data:any={};
  
  er:boolean=false;
  array:any=[];
 
  onSubmit(){
    //alert(JSON.stringify(this.data) )
    this.array.push(this.data);
    console.log(this.array)
  
  }
  
  onchange(event: any){
    console.log(event);
  
    if(this.data.email===this.data.Cmail){
      this.er=true;
    }
    else
      this.er=false;
  }
  ngOnInit(){

  }

  


}

