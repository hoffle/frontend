import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

export enum Question {
  all = '',
  id = 'id',
  title = 'title',
  question = 'question',
  answerOne = 'answerOne',
  answerTwo = 'answerTwo',
  answerThree = 'answerThree',
  imageUrl = 'ImageUrl'
}

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  url = 'http://h2889309.stratoserver.net:1337/parse/classes/courses/questions';
  appId = 'jujwAD35njn34553wadWkoijko2783878aDW';

  constructor(private http: HttpClientModule) { }

  
}
