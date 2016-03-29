import { Component, OnInit } from 'angular2/core';
import {RouteParams} from 'angular2/router';


@Component({
  selector: 'birdid-quiz',
  templateUrl: 'app/quiz.component.html',
  styleUrls: ['app/hero-detail.component.css']
})
export class QuizComponent implements OnInit {

    mediaID = 0;

    constructor(
      private _routeParams: RouteParams) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this.mediaID = id;
    }

    goBack() {
        console.log("ha det bra");
        window.history.back();

    }



}
