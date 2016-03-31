import { Component }       from 'angular2/core';

@Component({
	selector: 'birdid-bottom-bar',
	template: '<h2>Developed by Hemb Studios (and a few slaves)</h2><br>Team: {{developers}}'
})

export class BottomBarComponent{

	developers:string = "Greger and his crew"

}
