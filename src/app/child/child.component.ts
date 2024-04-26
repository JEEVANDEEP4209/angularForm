import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  public childForm!: FormGroup;

  @Input()dataFromParent:any = {
    enter_text:"",
    status:""
  };
  @Output() dataToParent: EventEmitter<any> = new EventEmitter<any>();

  // dataFromParents:any = {
  //   enter_text:"",
  //   status:""
  // }


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private titleService: Title,
  ) { }


  ngOnInit() {

    this.childForm = this.formBuilder.group({
      name: ['', Validators.required],
      status: ['', Validators.required],
    });

  }

  sendDataToParent(val:any) {
    this.dataToParent.emit(val.value);
  }

}
