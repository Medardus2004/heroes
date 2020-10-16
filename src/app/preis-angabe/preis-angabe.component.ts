import { Component, OnInit , Input} from '@angular/core';
import {Hero} from "../hero";

@Component({
  selector: 'app-preis-angabe',
  templateUrl: './preis-angabe.component.html',
  styleUrls: ['./preis-angabe.component.css']
})
export class PreisAngabeComponent implements OnInit {

  @Input() tarif: Hero;
  constructor() { }

  ngOnInit(): void {
  }

}
