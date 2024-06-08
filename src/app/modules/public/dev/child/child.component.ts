import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() search:string;

  @Output() onDataChange = new EventEmitter<any>();

  // @Input() set search(value: string) {
  //   this._search = value;
  // }
  // get search(): string {
  //   return this._search;
  // }
  //
  //  _search :string;


  constructor() { }

  ngOnInit(): void {
  }

  value=1;

  btnclick(){
    this.value +=1
  }


}
