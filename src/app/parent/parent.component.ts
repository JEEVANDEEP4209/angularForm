import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentData:any

  public angularForm!: FormGroup;

  countryResponse:any
  IsActive: any;
  Select: any;
  status:any

  receivedNameData:any;
  receivedStatusData:any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private titleService: Title,
  ) { }


  ngOnInit() {

    this.angularForm = this.formBuilder.group({
      enter_text: ['', Validators.required],
      status: ['', Validators.required],
    });

  }

  SubmitForm(val:any){
    this.parentData = val.value;
    console.log(43,val.value)
  }



  receiveFromChild(data: any) {
    console.log(47 ,"Received from child: ", data);
    this.receivedNameData = data.name;
    this.receivedStatusData = data.status
  }

}
