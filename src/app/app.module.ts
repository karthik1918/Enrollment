import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListenrollmentsComponent } from './components/listenrollments/listenrollments.component';
import { EditenrollmentsComponent } from './components/editenrollments/editenrollments.component';
import {EnrollService} from "./services/enroll.service";
@NgModule({
  declarations: [
    AppComponent,
    ListenrollmentsComponent,
    EditenrollmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [EnrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
