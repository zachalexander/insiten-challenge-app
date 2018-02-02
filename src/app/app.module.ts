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
import { SplashComponent } from './components/splash/splash.component';
import { ProfileComponent } from './components/profile/profile.component';

import {TargetService} from './services/target.service';


const appRoutes: Routes = [
  {path:'', component: SplashComponent},
  {path:'home', component: HomeComponent},
  {path:'newtarget', component: NewtargetComponent},
  {path:'edit/:id', component: EditComponent},
  {path:'delete/:id', component: DeleteComponent},
  {path:'profile/:id', component: ProfileComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NewtargetComponent,
    HomeComponent,
    EditComponent,
    DeleteComponent,
    SplashComponent,
    ProfileComponent
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
