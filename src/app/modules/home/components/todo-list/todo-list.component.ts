import { Component, OnInit } from '@angular/core';

//interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  //Declarando variáveis
  public taskList: Array<TaskList> = [
    {task: "Minha nova Task", checked: true},
    {task: "Minha nova Task", checked: false}
  ];

  constructor() { }

  ngOnInit(): void {
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

}
