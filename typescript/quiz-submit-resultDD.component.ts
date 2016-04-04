import { Component, OnInit, EventEmitter } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';
import { ControlGroup, Validators, FormBuilder, Control } from 'angular2/common';


@Component({
  selector: 'birdid-quiz-submit-resultDD',
  templateUrl: 'app/quiz-submit-resultDD.component.html',
  styleUrls: ['app/quiz-submit-result.component.css'],
  directives: []
})
export class QuizSumbitResultDDComponent implements OnInit {

	myForm: ControlGroup;

	formInformation = ""


    constructor(
	  private _formBuilder: FormBuilder,
      private _routeParams: RouteParams,
  	  private _router: Router) {
    }

    ngOnInit() {

		this.myForm = this._formBuilder.group({

			'email': ['', Validators.required],
			'name': ['', Validators.required],
			'score': ['', Validators.compose([
				Validators.required,
				this.hasNumbers
			])]

		})

    }

	onSubmit(){

		console.log(this.myForm);
		this.formInformation = this.myForm.value;

	}

	hasNumbers(control: Control): {[s: string]:boolean}{

		if(!control.value.match('\\d+')){

			return {noNumber: true}

		}

	}



}
