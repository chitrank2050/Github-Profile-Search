import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService {
  private _username:string;
  private _client_id = '59fd956e5fd01baa11b8';
  private _client_secret = '0ed2c7f8c85a3bd96fc6556a42ffb763e663a936';

  constructor(private _http:Http) { 
    console.log('Serive Ready');

  }

  _getUser(){
    return this._http.get('http://api.github.com/users/'+this._username+'?client_id='+this._client_id+'&client_secret='+this._client_secret)
          .map(res => res.json())
  }
  _getRepos(){
    return this._http.get('http://api.github.com/users/'+this._username+'/repos?client_id='+this._client_id+'&client_secret='+this._client_secret)
          .map(res => res.json())
  }
  _updateUser(user:string){
    this._username=user;
  }
}
