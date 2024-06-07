import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.css']
})
export class DevComponent implements OnInit {
  value: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  btnSetData(){
    this.value = 'Longcutmoi';
  }
}
