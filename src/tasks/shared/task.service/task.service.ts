import { Injectable } from '@nestjs/common';
import { Task } from '../task/task';

@Injectable()
export class TaskService {
  tasks: Task[] = [
    { id: 1, description: 'Levar o lixo', completed: true },
    { id: 2, description: 'levar o cachorro', completed: false },
    { id: 3, description: 'lavar banheiro', completed: true },
  ];
  getAll() {
    return this.tasks;
  }

  getById(id: number): Task {
    const task = this.tasks.find((value) => value.id == id);
    return task;
  }
  create(task: Task) {
    let lastId = 0;
    if (this.tasks.length > 0) {
      lastId = this.tasks[this.tasks.length - 1].id;
    }
    task.id = lastId + 1;
    this.tasks.push(task);
    return task;
  }
  update(task: Task) {
    const taskArray = this.getById(task.id);
    if (taskArray) {
      taskArray.description = task.description;
      taskArray.completed = task.completed;
    }
    return taskArray;
  }
  delete(id: number) {
    const index = this.tasks.findIndex((value) => value.id == id);
    this.tasks.splice(index, 1);
  }
}
