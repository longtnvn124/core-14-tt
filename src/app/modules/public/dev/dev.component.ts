import {Component, OnInit, ViewChild} from '@angular/core';
import {ChildComponent} from "@modules/public/dev/child/child.component";

interface ThiSinh{
  id:number,
  ten:string,
  css:string
}
@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.css']
})
export class DevComponent implements OnInit {
  @ViewChild(ChildComponent) childComponent:ChildComponent;
  value: string = '';
  changeNumber:1|2 = 1;
  datafor: ThiSinh[] = [
    {id:1,ten:'Long',css:`<p class="colorR">brown</p>`},
    {id:2,ten:'Lực',css:`<p class="colorR">1b9e3e</p>`},
    {id:3,ten:'Vũ',css:`<p class="colorR">59e0c5</p>`},
    {id:4,ten:'Hưng',css:`<p class="colorR">666666</p>`},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  btnSetData(){
    this.value = 'Longcutmoi';
  }

  btnCallChild(){
    this.childComponent.btnclick();
  }

  btnChangeNunber(){
    this.changeNumber = this.changeNumber === 1 ? 2 : 1;
    console.log(this.changeNumber);
  }
}
