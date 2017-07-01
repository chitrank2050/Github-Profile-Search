import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

/*SERVICES*/
import {GithubService} from '../../services/github.service';

@Component({
  selector: 'search',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.scss'],
  providers: [GithubService],
})
export class SearchpageComponent implements OnInit {
  private _user=[];
  private _repos=[];
  status:boolean;
  username:string;
  loader:boolean;

  constructor(private _githhubserice:GithubService) {
    this.status=false;
    this.loader=false;
   }

  _searchUser(){
    this.status=true;
    this.loader=true;
    if((this.username.trim())==="")
    {
      this.loader=false;
      this.status=false;
    }
    this._githhubserice._updateUser(this.username);

    this._githhubserice._getUser().subscribe(user=>{
      this.loader=false;
      this._user=user;
    });
    
    this._githhubserice._getRepos().subscribe(repos=>{
      this._repos=repos;
    });
  }
  ngOnInit() {
  }
}
