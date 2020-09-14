import { Injectable } from '@angular/core';
import{Enroll} from './../interfaces/enroll'
@Injectable({
  providedIn: 'root'
})
export class EnrollService {
  enrollUsers:Array<Enroll> = [{id: 1, name: 'Dhiraj', status:true,dobDate:'22-03-1981' },
  {id: 2, name: 'Naresh', status:true,dobDate:'12-06-1988' },
  {id: 3, name: 'Kumar', status:false,dobDate:'02-05-1991' },
  {id: 4, name: 'Karthik', status:true,dobDate:'09-03-1981' },
  {id: 5, name: 'Rajesh', status:true,dobDate:'23-08-1985' },
  {id: 6, name: 'Prakash', status:true,dobDate:'12-09-1983' }
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
