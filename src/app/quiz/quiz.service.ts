import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { take, map, tap, delay, switchMap } from "rxjs/operators";

import { Quiz } from "./quiz.model";
import { AuthService } from "../auth/auth.service";

@Injectable({
  providedIn: "root",
})
export class QuizService {
  private _quizes = new BehaviorSubject<Quiz[]>([
    new Quiz(
      "test01",
      "Tageschau",
      "When start the Tageschau?",
      "https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200",
      "20:00 Uhr",
      "Immer auf Tagesschau.com",
      "Niemandem ist mehr zu vertrauen, die Tageschau ist nur noch Fake News der Politik",
      "Alles ist vorbei, ich muss jetzt los!",
      "answerA"
    ),
  ]);

  get quizes() {
    return this._quizes.asObservable();
  }

  constructor(private authService: AuthService, private http: HttpClient) {}

  getQuiz(id: string) {
    return this.quizes.pipe(
      take(1),
      map((quizes) => {
        return { ...quizes.find((p) => p.id === id) };
      })
    );
  }

  addQuiz(
    title: string,
    question: string,
    imageUrl: string,
    answerA: string,
    answerB: string,
    answerC: string,
    answerD: string,
    rightAnswer: string
  ) {
    let generatedId: string;
    const newQuiz = new Quiz(
      Math.random().toString(),
      title,
      question,
      imageUrl,
      answerA,
      answerB,
      answerC,
      answerD,
      rightAnswer
    );
    return this.http
      .post<{ name: string }>(
        "quiz-app api",
        { ...newQuiz, id: null }
      )
      .pipe(
        switchMap((resData) => {
          generatedId = resData.name;
          return this.quizes;
        }),
        take(1),
        tap((quizes) => {
          newQuiz.id = generatedId;
          this._quizes.next(quizes.concat(newQuiz));
        })
      );
    // return this.quizes.pipe(
    //   take(1),
    //   delay(1000),
    //   tap(quizes => {
    //     this._quizes.next(quizes.concat(newQuiz));
    //   })
    // );
  }

  updateQuiz(quizId: string, title: string, description: string) {
    return this.quizes.pipe(
      take(1),
      delay(1000),
      tap((quizes) => {
        const updatedQuizIndex = quizes.findIndex((qu) => qu.id === quizId);
        const updatedQuizes = [...quizes];
        const oldQuiz = updatedQuizes[updatedQuizIndex];
        updatedQuizes[updatedQuizIndex] = new Quiz(
          oldQuiz.id,
          title,
          oldQuiz.question,
          oldQuiz.imageUrl,
          oldQuiz.answerA,
          oldQuiz.answerB,
          oldQuiz.answerC,
          oldQuiz.answerD,
          oldQuiz.rightAnswer,
        );
        this._quizes.next(updatedQuizes);
      })
    );
  }
}
