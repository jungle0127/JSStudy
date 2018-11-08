import { Component, OnInit } from '@angular/core';
import { Hero} from '../hero'
import { heroStore} from '../mock-heros'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heros  = heroStore;
  constructor() { }

  ngOnInit() {
  }

}