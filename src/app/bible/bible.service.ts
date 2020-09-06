import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export enum SearchType {
  all = '',
  translation = 'translation',
  book = 'book',
  capital = 'capital',
  verse = 'verse',
  language = ''
}
@Injectable({
  providedIn: "root",
})
export class BibleService {
  url = "https://www.bibleserver.com/api/";
  key = "3ab0fef183533190956eaefbc48cc344321cbfe0";

  constructor(private http: HttpClient) {}

  searchData(title: string) {}
}
