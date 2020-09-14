import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EnrollService } from "./../../services/enroll.service";
import { Enroll } from './../../interfaces/enroll'
@Component({
  selector: 'app-editenrollments',
  templateUrl: './editenrollments.component.html',
  styleUrls: ['./editenrollments.component.css']
})
export class EditenrollmentsComponent implements OnInit {
  user: Enroll ;
  editForm: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private userService: EnrollService) {
    this.user = <Enroll>this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
    //initiating form group with validations
    this.editForm = this.formBuilder.group({
      id: [],
      dobDate: [],
      name: ['', Validators.required],
      status: []
    });
    this.editForm.setValue(this.user);
  }
  onSubmit() {
    //check is form is valid or not
    if (this.editForm.valid) {
      var edituser = this.editForm.value;
      this.userService.updateUser(edituser);
      let navigationExtras: NavigationExtras = {
      };
      //on suucess navigate to home page
      this.router.navigate([""], navigationExtras);
    }
  }
}
