import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public gameStarted!: boolean;
  compt!: number;
  zero!: string;
  score!: number;
  maxtimetrue!: number;

  nb1!: number;
  nb2!: number;
  ope!: string;

  nb3!: number;
  ope2!: string;

  resultaffiche!: string;

  result!: number;
  resultrep!: number;


  constructor() { }

  ngOnInit(): void {
  }

  nbrandom() {
    return  Math.floor(Math.random() * (10 - -10 + 1)) + -10;
  }

  operandom() {
    let tab = ['+', '-', '*', '/', '^'];
    return tab[Math.floor(Math.random() * tab.length)];
  }

  operation(nb1:number, nb2:number, ope:string) {
    switch (ope) {
      case '+':
        return (nb1 + nb2);
      case '-':
        return (nb1 - nb2);
      case '*':
        return (nb1 * nb2);
      case '/':
        return (nb1 / nb2);
      case '^':
        return (nb1 ** nb2);
    }
  }

  question() {
    this.nb1 = this.nbrandom();
    this.nb2 = this.nbrandom();
    this.ope = this.operandom();

    this.nb3 = this.nbrandom();
    this.ope2 = this.operandom();


    if (Math.floor(Math.random() * 2) == 0) {
      this.resultaffiche = '(' + this.nb1 + ' ' + this.ope + ' ' + this.nb2 + ')';
      console.log(this.resultaffiche);
      this.result = this.operation(this.nb1, this.nb2, this.ope);
      console.log(this.result);
    }

    else {
      this.resultaffiche = '(' + this.nb1 + ' ' + this.ope + ' ' + this.nb2 + ')'

      this.resultaffiche = '(' + this.resultaffiche + ' ' + this.ope2 + ' ' + this.nb3 + ')';
      console.log(this.resultaffiche);
      this.result = this.operation(this.operation(this.nb1, this.nb2, this.ope), this.nb3, this.ope2);
      console.log(this.result);
    }

    if (Math.floor(Math.random() * 2) == 0) {
      this.resultrep = this.result;
    }
    else {
      this.resultrep = (this.result*this.nb1)+this.nb2;
    }
  }

  handleClick() {
    this.gameStarted = true;
    this.compt = 2000;
    this.zero = '0';
    this.score = 0;
    this.maxtimetrue = 5;
    this.decrementCompt();
    this.question();
  }


  verif(check: boolean) {
    //determiner si la reponse est oui ou non
    if (check == true) {
      //oui
      if (this.result == this.resultrep) {
        //si la reponse est cencé etre correct
        this.reponse(true);
      } else {
        //sinon
        this.reponse(false);
      }
    }
    if (check == false) {
      //non
      if (this.result ==  this.resultrep) {
        //si la reponse est cencé etre correct
        this.reponse(false);
      } else {
        //la reponse est cencé etre incorect
        this.reponse(true);
      }
    }
  }
  reponse(result: boolean) {
    if (result == true) {
      this.question();
      this.score ++;
      this.compt += this.maxtimetrue * 100;
      if (this.maxtimetrue > 3)
      {
        this.maxtimetrue--;
      }
    }
    if (result == false) {
      this.compt = 1;
    }
  }

  private decrementCompt() {
    const interval = window.setInterval(() => {
      this.compt--;
      if (this.compt === 0) {
        window.clearInterval(interval);
        this.zero = '';
      }
    }, 10);
  }

  get gameEnded() {
    return this.compt === 0;
  }

}
