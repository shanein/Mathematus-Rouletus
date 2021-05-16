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


  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.gameStarted = true;
    this.compt = 200;
    this.zero = '0';
    this.score = 0;
    this.maxtimetrue = 5;
    this.decrementCompt();
  }

  verif(check: boolean) {
    //determiner si la reponse est oui ou non
    if (check == true) {
      //oui
      if (1 == 2) {
        //si la reponse est cencé etre correct
        this.reponse(true);
      } else {
        //sinon
        this.reponse(false);
      }
    }
    if (check == false) {
      //non
      if (1 == 2) {
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
