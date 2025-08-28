import { Component, DoCheck, OnInit } from '@angular/core';

//interface
import { TaskList } from '../../model/task-list';
import { first, last } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements DoCheck {

  //Declarando variáveis
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]') 

  constructor() { }

  ngDoCheck() {
    this.setLocalStorage()
    if(this.taskList){
      this.taskList.sort( (first, last) =>Number(first.checked) - Number(last.checked) )
      localStorage.setItem("list", JSON.stringify(this.taskList))
    }
    
  }

  public setEmitItemTaskList(event: string){
    this.taskList.push({task: event, checked: false})
  }

  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList(){
    const confirm = window.confirm("Você deseja realmente deletar tudo?");
    
    if(confirm == true){
      this.taskList = []
    }
  }

  public validationInput(event: string, index: number){
    if(!event.length){
      const confirm = window.confirm("Task está vazia, deseja deletar?");

      if(confirm){
        this.deleteItemTaskList(index);
      }
    }
  }

  public setLocalStorage(){

  }

}
