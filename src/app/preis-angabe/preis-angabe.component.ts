import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import{Hero} from "../hero";

@Component({
  selector: 'app-preis-angabe',
  templateUrl: './preis-angabe.component.html',
  styleUrls: ['./preis-angabe.component.css']
})
export class PreisAngabeComponent implements OnInit {

  heroes = HEROES;
  constructor() { }

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  ngOnInit(): void {
  }

}
