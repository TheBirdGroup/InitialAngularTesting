import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { QuizSettings } from './mock-quizSettings';

import { QuizSettingsService } from './quiz-settings.service';



@Component({
  selector: 'birdid-media-select',
  templateUrl: 'app/quizMediaSelect.component.html',
  styleUrls:  ['app/dashboard.component.css'],
  providers: [
	  QuizSettingsService
  ]
})


export class QuizMediaSelectComponent implements OnInit {

    mediaTypes = [];

	constructor(
	  private _quizSettingsService: QuizSettingsService,
	  private _router: Router) {
	}

	ngOnInit() {



		this._quizSettingsService.getQuizSettings().then(mediaTypes => this.mediaTypes = mediaTypes);
		//switch lines for slow responce testing
		//this._quizSettingsService.getQuizSettingsSlow().then(mediaTypes => this.mediaTypes = mediaTypes);

	}

    gotoMediaType(mediaType) {
        console.log(mediaType);
        let link = ['Quiz', { id: mediaType }];
        this._router.navigate(link);


        //PROBLEM EXPLANED: https://github.com/angular/angular/issues/4490
        //this._router.navigateByUrl(`mediaType/${mediaType}`);

        //this._router.navigate( ['QuizComponent/', { id: mediaType }] );
    }


	// gotoDetail(hero: Hero) {
	//   let link = ['HeroDetail', { id: hero.id }];
	//   this._router.navigate(link);
	// }
}
