import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // @Input() search:string;


  @Input() set search(value: string) {
    this._search = value;
  }
  get search(): string {
    return this._search;
  }
  private _search :string;


  constructor() { }

  ngOnInit(): void {
  }



}
