import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { LoadingModule } from 'ngx-loading';

import { AppComponent } from './app.component';
import { NewtargetComponent } from './components/newtarget/newtarget.component';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';
import { DeleteComponent } from './components/delete/delete.component';

import {TargetService} from './services/target.service';




const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'newtarget', component: NewtargetComponent},
  {path:'edit/:id', component: EditComponent},
  {path:'delete/:id', component: DeleteComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NewtargetComponent,
    HomeComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    LoadingModule
  ],
  exports: [],
  providers: [TargetService],
  bootstrap: [AppComponent]
})
export class AppModule {}
