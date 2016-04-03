
import { Injectable } from 'angular2/core';
import { QuizSettings } from './mock-quizSettings';
import { QuizSetting } from './quizSetting';

@Injectable()
export class QuizSettingsService{

	getQuizSettings(){

		return Promise.resolve(QuizSettings);


	}

	getQuizSettingsSlow(){

		return new Promise<QuizSetting[]>(resolve => setTimeout(()=>resolve(QuizSettings), 2000));

	}

}
