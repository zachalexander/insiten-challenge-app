import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NewtargetComponent } from './components/newtarget/newtarget.component';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';

import {TargetService} from './services/target.service';



const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'newtarget', component: NewtargetComponent},
  {path:'edit/:id', component: EditComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NewtargetComponent,
    HomeComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [],
  providers: [TargetService],
  bootstrap: [AppComponent]
})
export class AppModule {}
