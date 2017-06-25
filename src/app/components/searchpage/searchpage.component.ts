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

  constructor(private _githhubserice:GithubService) {
    this._githhubserice._getUser().subscribe(user=>{
      this._user=user;
    });
    this._githhubserice._getRepos().subscribe(repos=>{
      this._repos=repos;
      console.log(repos);
    });
   }

  ngOnInit() {
  }
}
