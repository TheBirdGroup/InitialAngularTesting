import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { QuizSettings } from './mock-quizSettings';


@Component({
  selector: 'birdid-media-select',
  templateUrl: 'app/quizMediaSelect.component.html',
  styleUrls:  ['app/dashboard.component.css']
})


export class QuizMediaSelectComponent implements OnInit {

    mediaTypes = QuizSettings;

	constructor(
	  private _router: Router) {
	}

	ngOnInit() {

	}

    gotoMediaType(mediaType) {
        console.log(mediaType);
        // let link = ['QuizComponent', { id: mediaType }];
        // this._router.navigate(link);


        //PROBLEM EXPLANED: https://github.com/angular/angular/issues/4490
        this._router.navigateByUrl(`mediaType/${mediaType}`);

        //this._router.navigate( ['QuizComponent/', { id: mediaType }] );
    }


	// gotoDetail(hero: Hero) {
	//   let link = ['HeroDetail', { id: hero.id }];
	//   this._router.navigate(link);
	// }
}
