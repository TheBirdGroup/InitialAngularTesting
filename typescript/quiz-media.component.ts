import { Component, OnInit } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';


@Component({
  selector: 'birdid-quiz-media',
  templateUrl: 'app/quiz-media.component.html',
  styleUrls: ['app/hero-detail.component.css'],
  directives: []
})
export class QuizMediaComponent implements OnInit {

    imageURL = "images/testMedia.jpg";


    constructor(
      private _routeParams: RouteParams,
  	  private _router: Router) {
    }

    ngOnInit() {

    }

    changeImage(){

        console.log("changing image");
        //this.imageURL = "images/testMedia2.jpg";
        this.imageURL = "https://hembstudios.no//birdid/IDprogram/getMedia.php?token="+Math.random();

    }


}
