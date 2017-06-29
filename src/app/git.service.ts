import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitService {
private username: string;
private client_id= 'f99c09775717740e053d';
private client_secret= '6c187e10d203e2e89b039861c5dac53078500e0d';

  constructor(private _http: Http) {
    console.log('Github Service ready');
    this.username = 'mosh-hamedani';
   }

getUser() {
        // tslint:disable-next-line:whitespace
        // tslint:disable-next-line:max-line-length
        // tslint:disable-next-line:whitespace
        return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json()); }


getRepo() {
        // tslint:disable-next-line:whitespace
        // tslint:disable-next-line:max-line-length
        // tslint:disable-next-line:whitespace
        return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json()); }

// tslint:disable-next-line:eofline
}

// tslint:disable-next-line:eofline

