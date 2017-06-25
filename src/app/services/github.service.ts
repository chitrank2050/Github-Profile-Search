import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService {
  private _username:string;

  constructor(private _http:Http) { 
    console.log('Serive Ready');
    this._username = 'chitrank2050';
  }

  _getUser(){
    return this._http.get('http://api.github.com/users/'+this._username)
          .map(res => res.json())
  }
  _getRepos(){
    return this._http.get('http://api.github.com/users/'+this._username+'/repos')
          .map(res => res.json())
  }
  updateUser(user:string){
    this._username=user;
  }
}
