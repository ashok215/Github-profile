import { Component, OnInit } from '@angular/core';

import { GitService } from '../git.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',

})
export class ProfileComponent {
   user: any;
   repos: any[];
   username: string;

  constructor(private _gitService: GitService) {
    this.user = false;


   }
// tslint:disable-next-line:member-ordering
searchuser() {
    this._gitService.updateuser(this.username);

   this._gitService.getUser().subscribe(user => { this.user = user;
    });
    this._gitService.getRepo().subscribe(repos => { this.repos = repos;
    });
}

}
