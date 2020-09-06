export class Quiz {
  constructor(
    public id: string,
    public title: string,
    public question: string,
    public imageUrl: string,
    public answerA: string,
    public answerB: string,
    public answerC: string,
    public answerD: string,
    public rightAnswer: string
  ) {}
}
