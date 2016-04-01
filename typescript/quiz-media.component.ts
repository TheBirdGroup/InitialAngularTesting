import { Component, OnInit } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';


@Component({
  selector: 'birdid-quiz-media',
  templateUrl: 'app/quiz-media.component.html',
  styleUrls: ['app/hero-detail.component.css'],
  directives: []
})
export class QuizMediaComponent implements OnInit {


    constructor(
      private _routeParams: RouteParams,
  	  private _router: Router) {
    }

    ngOnInit() {

    }


}
