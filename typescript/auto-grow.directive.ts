import {Directive, ElementRef, Renderer, OnInit} from 'angular2/core'

@Directive({
	selector: '[autoGrow]',
	host: {
		'(focus)': 'onFocus()',
		'(blur)': 'onBlur()',
		'(mouseenter)': 'onMouseEnter()',
		'(mouseleave)': 'onMouseLeave()'
	},
	inputs: ['expandMaxSize']
})

export class AutoGrowDirective implements OnInit{

	expandMaxSize = "400";

	//https://www.youtube.com/watch?v=_-CD_5YhJTA
	constructor(private _element: ElementRef, private _renderer: Renderer){

	}

	ngOnInit(){

		this.onBlur();

	}

	onFocus(){
		//jo
		this._renderer.setElementStyle(this._element.nativeElement, 'width', this.expandMaxSize)﻿;

	}

	onBlur(){

		this._renderer.setElementStyle(this._element.nativeElement, 'width', "179")﻿;

	}

	onMouseEnter(){

		this._renderer.setElementStyle(this._element.nativeElement, 'border-color', "rgb(247, 9, 40)")﻿;

	}

	onMouseLeave(){

		this._renderer.setElementStyle(this._element.nativeElement, 'border-color', "rgb(0, 0, 0)")﻿;


	}

}
