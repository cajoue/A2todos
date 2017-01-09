import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text;
  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        text: 'install Angular CLI'
      },
      {
        text: 'work through tutorial'
      },
      {
        text: 'keep up with the changes'
      }
    ];
  }

  addTodo(){
    this.todos.push({
      text: this.text
    });
  }

}
