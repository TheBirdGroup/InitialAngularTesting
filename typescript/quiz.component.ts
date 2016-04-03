import { Component, OnInit } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';

import {AutoGrowDirective} from './auto-grow.directive';
import {QuizMediaComponent} from './quiz-media.component';

@Component({
  selector: 'birdid-quiz',
  templateUrl: 'app/quiz.component.html',
  styleUrls: ['app/quiz.component.css'],
  directives: [AutoGrowDirective, QuizMediaComponent]
})
export class QuizComponent implements OnInit {

	someValue = 0;

    mediaID = 0;
    mediaTypeID = 0;

	buttonDisabled = true;

	randomName = "Grege";

    usingExtraStyle = false;

    mediaLoadedMessage = "Not loaded";

    constructor(
      private _routeParams: RouteParams,
  	  private _router: Router) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this.mediaTypeID = id;

		if(!(id == 1 || id == 2 || id == 3)){

			this._router.navigateByUrl(`dashboard`);

		}

        this.mediaID = 6028;

    }

	toUpper(name:string){

		this.randomName = name.toUpperCase();

	}

    changeTextStyleClass(){

        if(this.usingExtraStyle == true){
            this.usingExtraStyle = false;
        }else{
            this.usingExtraStyle = true;
        }

    }

	heroIsJust(){

		if(this.randomName == "Greger" || this.randomName == "GREGER"){
            //this.usingExtraStyle = true;
			return true;
		}else{
            //this.usingExtraStyle = false;
			return false;
		}

	}

	incrementSomeValue(){


		this.someValue = this.someValue + 1;
		//console.log("incrementSomeValue: "+this.someValue);

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
