import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
	selector: '[autoGrow]',
	host: {
		'(focus)': 'onFocus()',
		'(blur)': 'onBlur()'
	}
})

export class AutoGrowDirective{
	//https://www.youtube.com/watch?v=_-CD_5YhJTA
	constructor(private _element: ElementRef, private _renderer: Renderer){

	}

	onFocus(){
		//jo
		this._renderer.setElementStyle(this._element.nativeElement, 'width', "300")﻿;

	}

	onBlur(){

		this._renderer.setElementStyle(this._element.nativeElement, 'width', "179")﻿;

	}

}
