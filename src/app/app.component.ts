import { Component,OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

/*SERVICES*/
// import {GithubService} from './services/github.service';


/*COMPONENTS*/
import {SearchpageComponent} from './components/searchpage/searchpage.component';


declare var $:any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(){
  }
 ngOnInit() {
    $(document).foundation();
  }
}
