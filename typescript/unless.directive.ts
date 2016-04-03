import {Directive, TemplateRef, ViewContainerRef} from "Angular2/Core"

//THIS CAUSES A ZONE.JS ERROR?!?
// @Directive({
// 	selector: '[myUnless]',
// 	inputs: ['myUnless']
// })

//<!-- <div *myUnless="heroIsJust()">This is an abomination of an hero</div> -->

export class UnlessDirective{

	constructor(
		private _templateRef: TemplateRef,
		private _viewContainerRef: ViewContainerRef
	){ }

	set myUnless(condition: boolean){

		if(!condition){
			this._viewContainerRef.createEmbeddedView(this._templateRef);
		}else{
			this._viewContainerRef.clear();
		}

	}


}
