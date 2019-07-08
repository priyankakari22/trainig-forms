
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormRService } from '../form-r.service';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-form-r',
  templateUrl: './form-r.component.html',
  styleUrls: ['./form-r.component.scss']
})
export class FormRComponent implements OnInit {
  employeelist: any = [];

  constructor(private fb: FormBuilder, private serviceR: FormRService) {
  }


  employeeForm: FormGroup;
  doorerror: boolean;
  districterror: boolean;
  staterror: boolean;
  streeterror: boolean;
  cmail: boolean = false;
  array: any;
  @Output() info = new EventEmitter<any>();

  ngOnInit() {
    this.serviceR.getformr().subscribe(data => {

      this.employeelist = data;
     


    });





    this.employeeForm = this.fb.group({
      name: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.pattern("[A-Za-z]{1,20}")]),
      email: new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      number: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],
      dob: ['', Validators.required],
      mail: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      doorNum: ['', Validators.required],
      street: ['', Validators.required],
      district: ['', Validators.required],
      state: ['', Validators.required],

    })


  }
  onSubmit() {
    //alert(JSON.stringify(this.employeeForm.value))
    this.employeelist.push(this.employeeForm.value)


    this.employeeForm.reset();



  }
  onchange(event: any): void {
    //console.log(event.target.value);
    //Door Number
    if (
      (this.employeeForm['controls'].doorNum.errors) &&
      ((this.employeeForm.controls.doorNum.touched) ||
        (this.employeeForm.controls.doorNum.invalid))) {

      this.doorerror = true;
    }
    else {
      this.doorerror = false;
    }
  }


  onchange2(event: any): void {
    //District
    if ((this.employeeForm.controls.district.errors) &&
      ((this.employeeForm.controls.district.touched) ||
        (this.employeeForm.controls.district.dirty))) {
      this.districterror = true;
    }
    else {
      this.districterror = false;
    }
  }


  onchange3(event: any): void {
    //state
    if ((this.employeeForm.controls.state.errors) &&
      ((this.employeeForm.controls.state.touched) ||
        (this.employeeForm.controls.state.dirty))) {
      this.staterror = true;
    }
    else {
      this.staterror = false;
    }
  }

  onchange1(event: any): void {
    //street
    if ((this.employeeForm.controls.street.errors) &&
      ((this.employeeForm.controls.street.touched) ||
        (this.employeeForm.controls.street.dirty))) {
      this.streeterror = true;
    }
    else {
      this.streeterror = false;
    }
  }

  //company mail
  mail1(event: any) {
    if (this.employeeForm.value.mail == this.employeeForm.value.email) {
      this.cmail = true;

    }
    else {
      this.cmail = false;

    }
  }
  confrim(value: any) {
  //  console.log(value);
    //this.info.emit(this.employeelist);
    this.info.emit(value);
 
  }





}


