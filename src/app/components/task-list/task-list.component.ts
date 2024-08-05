import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from '../task/task.component';
import { Task } from '../../task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks!: Task[];
  @Output() deleteTask = new EventEmitter<number>();

  onDeleteTask(taskId: number) {
    this.deleteTask.emit(taskId);
  }
}
