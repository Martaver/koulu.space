import { Component } from '@angular/core';

import { AppState } from '../app.service';
import {Router} from "@angular/router";

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>

  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.style.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: `
<div id="home-container">
  
  <div id="home-container-content">
    <img class="home-container-logo" src="../../assets/img/koulu-logo.png">
  </div>
  
  <div id="home-container-actions">
    <button md-button (click)="onTeachClicked()">
      <div class="action">Sign</div>
      <div class="prefix">the Yearbook</div>
    </button>
    <button md-button (click)="onLearnClicked()">
      <div class="action">Learn</div>
      <div class="prefix">anything</div>
      
    </button>  
  </div>
  
</div>


`
})
export class Home {

  // TypeScript public modifiers
  constructor(public appState: AppState, public router: Router) {

  }

  ngOnInit() {

  }

  onTeachClicked(){

    this.router.navigate(['/teach']);
  }

  onLearnClicked() {

    this.router.navigate(['/learn']);
  }


}
