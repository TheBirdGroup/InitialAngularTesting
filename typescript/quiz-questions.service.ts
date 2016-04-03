
import { Injectable } from 'angular2/core';
import { quizQuestions } from './mock-quizQuestion';
import { QuizQuestion } from './quizQuestion';

@Injectable()
export class QuizQuestionsService{

	getQuizQuestions(){

		return Promise.resolve(quizQuestions);


	}

	getQuizQuestionsSlow(){

		return new Promise<QuizQuestion[]>(resolve => setTimeout(()=>resolve(quizQuestions), 2000));

	}

}
