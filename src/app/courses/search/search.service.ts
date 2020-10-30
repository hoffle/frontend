import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

export enum SearchType {
  all = '',
  id = 'id',
  title = 'title',
  imageUrl = 'ImageUrl'
}

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  url = 'http://h2889309.stratoserver.net:1337/parse/classes/courses';
  appId = 'jujwAD35njn34553wadWkoijko2783878aDW';

  constructor(private http: HttpClientModule) { }
  
  searchData() {

  }
}
