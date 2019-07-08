
import { Component,  OnInit, Output,EventEmitter }  from '@angular/core';
import { FormtService } from '../Formt.service';



@Component({
  selector: 'app-form-t',
  templateUrl: './form-t.component.html',
  styleUrls: ['./form-t.component.scss']
})
export class  FormTComponent implements OnInit {
  title = 'Template Driven Form';
  data:any={};
  constructor(private service:FormtService) {}
  @Output() infot=new EventEmitter<any>();
  
  er:boolean=false;
  array:any=[];
  array1=[];
 
  onSubmit(f){
    //alert(JSON.stringify(this.data) )
    this.array.push(this.data);
    //console.log(this.array)
    this.data={}
    f.reset();
  
  }
  
  onchange(event: any){
    //console.log(event);
  
    if(this.data.email===this.data.Cmail){
      this.er=true;
    }
    else
      this.er=false;
  }
  ngOnInit(){
    this.service.getformt().subscribe(data=>{
      this.array=data
    });

  }
  conform(value:any){
    this.infot.emit(value);
    //console.log(value,"yaaaa")
  }
  

  


}

