import { Injectable } from '@angular/core';
import{Enroll} from './../interfaces/enroll'
@Injectable({
  providedIn: 'root'
})
export class EnrollService {
  enrollUsers:Array<Enroll> = [{id: 1, name: 'Dhiraj', status:true,dobDate:'02/23/1981' },
  {id: 2, name: 'Martin', status:true,dobDate:'06/16/1988' },
  {id: 3, name: 'Kevin', status:false,dobDate:'02/15/1991' },
  {id: 4, name: 'Robert', status:true,dobDate:'09/23/1981' },
  {id: 5, name: 'Rajesh', status:true,dobDate:'03/18/1985' },
  {id: 6, name: 'Prakash', status:true,dobDate:'12/09/1983' }
];
  constructor() {

   }

   getUsers() {
     //get all enrollments list
    return this.enrollUsers;
  }
  updateUser(user: Enroll) {
    for (var i=0, iLen=this.enrollUsers.length; i<iLen; i++) {
      //find enroll object by id
      if(this.enrollUsers[i].id==user.id)
      {
        this.enrollUsers[i].name=user.name;
        this.enrollUsers[i].status=user.status;
      }
    }
    return user;
  }
}
