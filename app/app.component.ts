import { Component }       from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { QuizMediaSelectComponent } from './quizMediaSelect.component';

import { HeroDetailComponent } from './hero-detail.component';
import { QuizComponent } from './quiz.component';

import { BottomBarComponent } from './bottom-bar.component';

@Component({
	selector: 'birdid-idclient-main',
	template: `
	  <h1>{{title}}</h1>
	  <nav>
		<a [routerLink]="['QuizMediaSelect']">Dashboard</a>

		<a [routerLink]="['Heroes']">Heroes</a>
	  </nav>
	  <router-outlet></router-outlet>
	  <birdid-bottom-bar></birdid-bottom-bar>
	`,
	styleUrls: ['app/app.component.css'],
	directives: [
		ROUTER_DIRECTIVES,
		BottomBarComponent
	],
	providers: [
	  ROUTER_PROVIDERS,
	  HeroService
	]
})

@RouteConfig([
	{path: '/dashboard', 		name: 'QuizMediaSelect', 	component: QuizMediaSelectComponent, useAsDefault: true},
    {path: '/mediaType/:id', 	name: 'Quiz', 				component: QuizComponent  },
  	{path: '/detail/:id',		name: 'HeroDetail',			component: HeroDetailComponent },
	{path: '/heroes',			name: 'Heroes',				component: HeroesComponent  }
])

export class AppComponent {
	  title = 'Birdid Quiz';
}
