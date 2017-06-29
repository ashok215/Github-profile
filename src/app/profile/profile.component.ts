import { Component, OnInit } from '@angular/core';

import { GitService } from '../git.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',

})
export class ProfileComponent {
   user: any[];
   repos: any[];
  constructor(private _gitService: GitService) {
    this._gitService.getUser().subscribe(user => { this.user = user;
    });
    this._gitService.getRepo().subscribe(repos => { this.repos = repos;
    });


   }
// tslint:disable-next-line:member-ordering


}
