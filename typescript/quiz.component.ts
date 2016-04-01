import { Component, OnInit } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';

import {AutoGrowDirective} from './auto-grow.directive';
import {QuizMediaComponent} from './quiz-media.component';

@Component({
  selector: 'birdid-quiz',
  templateUrl: 'app/quiz.component.html',
  styleUrls: ['app/hero-detail.component.css'],
  directives: [AutoGrowDirective, QuizMediaComponent]
})
export class QuizComponent implements OnInit {

	someValue = 0;

    mediaID = 0;

	buttonDisabled = true;

	randomName = "Grege";

    constructor(
      private _routeParams: RouteParams,
  	  private _router: Router) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this.mediaID = id;

		if(!(id == 1 || id == 2 || id == 3)){

			this._router.navigateByUrl(`dashboard`);

		}

    }

	toUpper(name:string){

		this.randomName = name.toUpperCase();

	}

	heroIsJust(){

		if(this.randomName == "Greger" || this.randomName == "GREGER"){
			return true;
		}else{
			return false;
		}

	}

	incrementSomeValue(){


		this.someValue = this.someValue + 1;
		console.log("incrementSomeValue: "+this.someValue);

	}

	randomOnClick(){

		console.log("We clicked it!");

	}

	//not needed?
    goBack() {
        console.log("ha det bra");
        window.history.back();

    }



}
