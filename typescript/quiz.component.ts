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

    questionAlternatives: string[];
    questionRightAnswer = ""



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

        this.setupQuestion();



        this.quizLoaded = true;

    }

    nextQuestion(){

        this.questionNumber ++;
        this.setupQuestion();




    }

    setupQuestion(){

        this.mediaID = this.quizQuestions['mediaArray'][this.questionNumber]['media_id'];
        let alts = this.quizQuestions['mediaArray'][this.questionNumber]['mediaChoices']

        this.questionAlternatives = [];
        this.questionAlternatives.push(alts['right_answer']['name']);
        this.questionAlternatives.push(alts['choice_2']['name']);
        this.questionAlternatives.push(alts['choice_3']['name']);
        this.questionAlternatives.push(alts['choice_4']['name']);
        this.questionAlternatives.push(alts['choice_5']['name']);

        this.questionAlternatives = this.shuffle(this.questionAlternatives);

        this.questionRightAnswer = alts['right_answer']['name'];



    }

    checkIfAltCorrect(altID){

        if(this.questionAlternatives[altID] == this.questionRightAnswer){

            console.log("correct!");

        }else{

            console.log("inncorrect!");

        }

    }

    //http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        }

        return array;
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
