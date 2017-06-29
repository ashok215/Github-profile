import { ProfileComponent } from './profile/profile.component';
import { GitService } from './git.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [GitService]
})

export class AppComponent {
  title = 'Git Profile Finder';
}
