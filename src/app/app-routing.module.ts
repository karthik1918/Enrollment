import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListenrollmentsComponent } from './components/listenrollments/listenrollments.component';
import { EditenrollmentsComponent } from './components/editenrollments/editenrollments.component';
const routes: Routes = [
  {
    path: '',
    component: ListenrollmentsComponent
  },
  {
    path: 'editEnrollment',
    component: EditenrollmentsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
