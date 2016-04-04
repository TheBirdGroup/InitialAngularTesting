import { Component, OnInit } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';

import {AutoGrowDirective} from './auto-grow.directive';
import {QuizMediaComponent} from './quiz-media.component';
import {QuizSumbitResultComponent} from './quiz-submit-result.component';
import {QuizSumbitResultDDComponent} from './quiz-submit-resultDD.component';

import { QuizQuestion } from './quizQuestion';
import { QuizQuestionsService } from './quiz-questions.service';

import { ReversePipe } from './reverse.pipe';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

//import {UnlessDirective} from './unless.directive';

@Component({
  selector: 'birdid-quiz',
  templateUrl: 'app/quiz.component.html',
  styleUrls: ['app/quiz.component.css'],
  directives: [AutoGrowDirective, QuizMediaComponent, QuizSumbitResultComponent, QuizSumbitResultDDComponent],
  providers: [
      QuizQuestionsService
  ],
  pipes: [ReversePipe]
})
export class QuizComponent implements OnInit {

	statefullPipeOutput = new Promise((resolve, reject) => {
		setTimeout(() => resolve('Data is here!'), 1500);
	})

	someValue = 0;

    mediaID = 0;
    mediaTypeID = 0;

	buttonDisabled = true;

	randomName = "Grege";

    usingExtraStyle = false;

    mediaLoadedMessage = "Not loaded";

    quizQuestions = [];

    quizLoaded = false;

    questionNumber = 0;


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


        this._quizQuestionsService.getQuizQuestions()
            .subscribe(
                data => {
                    console.log(data);
                    this.quizQuestions = data;
                    this.startQuiz();
                },
                error => console.error("getQuizQuestions ERROR! ", error)
            )



        //this._quizQuestionsService.getQuizQuestions().then(this.questionsLoaded);
        //this._quizQuestionsService.getQuizQuestions().then(quizQuestions => this.quizQuestions = quizQuestions);
        //this._quizQuestionsService.getQuizQuestions().then(quizQuestions => this.questionsLoaded);


        console.log("quizQuestions000: ", this.quizQuestions);


        this.mediaID = 6028;



    }


    startQuiz(){

        console.log("starting quiz!!!", this.quizQuestions['mediaArray'][0]['media_id']);


        this.mediaID = this.quizQuestions['mediaArray'][this.questionNumber]['media_id'];

        this.quizLoaded = true;

    }

    nextQuestion(){

        this.questionNumber ++;
        this.mediaID = this.quizQuestions['mediaArray'][this.questionNumber]['media_id'];


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
