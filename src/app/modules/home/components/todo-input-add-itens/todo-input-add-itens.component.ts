import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.css']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emmitItemTaskList = new EventEmitter();

  public addItemTaskList: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public submitItemTaskList(){
    console.log(this.addItemTaskList)
  }

}
