import { Component, OnInit, EventEmitter } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';


@Component({
  selector: 'birdid-quiz-media',
  templateUrl: 'app/quiz-media.component.html',
  styleUrls: ['app/hero-detail.component.css'],
  directives: [],
  inputs: ['mediaID:usingMediaID'], //using ALIAS
  outputs: ['mediaLoadedEvent']
})
export class QuizMediaComponent implements OnInit {

    imageURL = "images/testMedia.jpg";

    mediaID = 0;

    mediaLoadedEvent = new EventEmitter<string>();


    constructor(
      private _routeParams: RouteParams,
  	  private _router: Router) {
    }

    ngOnInit() {

        console.log("mediaID: ", this.mediaID);
        this.imageURL = "https://hembstudios.no//birdid/IDprogram/getMedia.php?mediaID="+this.mediaID;

        //mediaLoadedEvent is undefined when setTimeout is done?!? Bug in angular2?
        //this.setTimeout(this.emitMediaLoaded, 1000);

        this.emitMediaLoaded();


    }

    emitMediaLoaded(){

        //console.log("delayed execution, this.mediaLoadedEvent: ", this.mediaLoadedEvent);
        this.mediaLoadedEvent.emit("MediaLoaded: "+ this.imageURL);

    }

    changeImage(){


        console.log("changing image");
        //this.imageURL = "images/testMedia2.jpg";
        this.imageURL = "https://hembstudios.no//birdid/IDprogram/getMedia.php?token="+Math.random();

        this.emitMediaLoaded();

    }


}
