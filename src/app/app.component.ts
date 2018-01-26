import { Component, OnInit } from '@angular/core';
import {TargetService} from './services/target.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  companyName: String;
  location: String;

  constructor(
    private targetService: TargetService,
  ) { }

  onTargetSubmit() {
    const target = {
      companyName: this.companyName,
      location: this.location
    }
    console.log(target);
    // Submit Post
    this.targetService.submitTarget(target).subscribe(data => {
    console.log(data);
    //   if(data.success){
        // this.processing = true;
        // this.flashMessage.show('Your post has been successfully submitted!', {cssClass: 'alert-success', timeout: 3000});
        // setTimeout(function () {
        //   window.location.reload();
        // }, 1000);

      // } else {
      //   // this.flashMessage.show('Something went wrong with your post', {cssClass: 'alert-danger', timeout: 3000});
      //   // this.router.navigate(['/']);
      //   console.log(err);
      // }
    });
  }
}
