
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-r',
  templateUrl: './form-r.component.html',
  styleUrls: ['./form-r.component.scss']
})
export class FormRComponent  implements OnInit {

  constructor(private fb: FormBuilder) { }
  employeeForm:any;
  doorerror:boolean;
  districterror:boolean;
  staterror:boolean;
  streeterror:boolean;
  cmail:boolean=false;
  
  ngOnInit() {
  
  
  
  
  this.employeeForm= this.fb.group({
  name: new FormControl({value:'', disabled: false},[Validators.required,Validators.pattern("[A-Za-z]{1,20}")]),
  email:new FormControl('',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
number:['',[Validators.required,Validators.pattern("[0-9]{10}")]],
  dob:['',Validators.required],
  mail:['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
  address:this.fb.group({
    doorNum: ['',Validators.required],
    street:['',Validators.required],
    district:['',Validators.required],
    state:['',Validators.required],
    
})
  })
}
  onSubmit(){
    alert(JSON.stringify(this.employeeForm.value))
   
    
  }
  onchange(event:any):void{
    //console.log(event.target.value);
    //Door Number
    if(
      (this.employeeForm['controls'].address.controls.doorNum.errors)&&
    ((this.employeeForm.controls.address.controls.doorNum.touched) ||
      (this.employeeForm.controls.address.controls.doorNum.invalid))){

      this.doorerror=true;
    }
    else
    {
      this.doorerror=false;
    }
  }


    onchange2(event:any):void{
      //District
    if((this.employeeForm.controls.address.controls.district.errors)&&
     ((this.employeeForm.controls.address.controls.district.touched )||
      (this.employeeForm.controls.address.controls.district.dirty))){
        this.districterror=true;
      }
      else{
        this.districterror=false;
      }
    }


    onchange3(event:any):void{
      //state
    if((this.employeeForm.controls.address.controls.state.errors)&&
     ((this.employeeForm.controls.address.controls.state.touched )||
      (this.employeeForm.controls.address.controls.state.dirty))){
        this.staterror=true;
      }
      else{
        this.staterror=false;
      }
    }

    onchange1(event:any):void{
      //street
    if((this.employeeForm.controls.address.controls.street.errors)&&
     ((this.employeeForm.controls.address.controls.street.touched ) ||
      (this.employeeForm.controls.address.controls.street.dirty))){
        this.streeterror=true;
      }
      else{
        this.streeterror=false;
      }
    }
    
    //company mail
    mail1(event:any):void{
      if(this.employeeForm.value.mail==this.employeeForm.value.email){
        this.cmail=true;
           
      }
      else{
        this.cmail=false;
      
      }
    }

    }


    