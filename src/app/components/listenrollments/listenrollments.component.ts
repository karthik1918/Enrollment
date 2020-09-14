import { Component, OnInit } from '@angular/core';
import {Router,NavigationExtras} from "@angular/router";
import {EnrollService} from "./../../services/enroll.service";
import{Enroll} from './../../interfaces/enroll'
@Component({
  selector: 'app-listenrollments',
  templateUrl: './listenrollments.component.html',
  styleUrls: ['./listenrollments.component.css']
})
export class ListenrollmentsComponent implements OnInit {
  users: Enroll[];
  constructor(private router: Router, private userService: EnrollService) { 
    this.users=this.userService.getUsers();
  }

  ngOnInit(): void {
  }
  changeUserStatus(user: Enroll): void {
   
  };

  editUser(user: Enroll): void {
   this.navigateTo('editEnrollment',user);
  };
  navigateTo(page,stateObject) {
    let navigationExtras: NavigationExtras = {
      state: stateObject
    };
    this.router.navigate([page], navigationExtras);
  }
}
