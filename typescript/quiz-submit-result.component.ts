import { Component, OnInit, EventEmitter } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';


@Component({
  selector: 'birdid-quiz-submit-result',
  templateUrl: 'app/quiz-submit-result.component.html',
  styleUrls: ['app/hero-detail.component.css'],
  directives: []
})
export class QuizSumbitResultComponent implements OnInit {

	formInformation = ""


    constructor(
      private _routeParams: RouteParams,
  	  private _router: Router) {
    }

    ngOnInit() {



    }

	onSubmit(formSubmitObject){

		console.log(formSubmitObject);
		this.formInformation = formSubmitObject.value;

	}



}
