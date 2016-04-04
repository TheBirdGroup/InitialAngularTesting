import { Component, OnInit } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';

import {AutoGrowDirective} from './auto-grow.directive';
import {QuizMediaComponent} from './quiz-media.component';
import {QuizSumbitResultComponent} from './quiz-submit-result.component';

import { QuizQuestion } from './quizQuestion';
import { QuizQuestionsService } from './quiz-questions.service';

//import {UnlessDirective} from './unless.directive';

@Component({
  selector: 'birdid-quiz',
  templateUrl: 'app/quiz.component.html',
  styleUrls: ['app/quiz.component.css'],
  directives: [AutoGrowDirective, QuizMediaComponent, QuizSumbitResultComponent],
  providers: [
      QuizQuestionsService
  ]
})
export class QuizComponent implements OnInit {

	someValue = 0;

    mediaID = 0;
    mediaTypeID = 0;

	buttonDisabled = true;

	randomName = "Grege";

    usingExtraStyle = false;

    mediaLoadedMessage = "Not loaded";

    quizQuestions = [];

    constructor(
      private _quizQuestionsService: QuizQuestionsService,
      private _routeParams: RouteParams,
  	  private _router: Router) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this.mediaTypeID = id;

		if(!(id == 1 || id == 2 || id == 3)){

			this._router.navigateByUrl(`dashboard`);

		}


        this._quizQuestionsService.getQuizQuestions().then(this.questionsLoaded);
        //this._quizQuestionsService.getQuizQuestions().then(quizQuestions => this.quizQuestions = quizQuestions);

        console.log("quizQuestions: ", this.quizQuestions);


        this.mediaID = 6028;



    }

    //not working? THIS IS NULL!
    questionsLoaded(aruments:QuizQuestion[]){

        console.log(this);
        //this.quizQuestions = aruments;
        console.log("quizQuestions2: ", aruments);

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
