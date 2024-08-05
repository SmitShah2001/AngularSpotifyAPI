import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from '../search/search.component';
import { TaskComponent } from "../task/task.component";
import { TaskListComponent } from '../task-list/task-list.component';
import { Task } from '../../task.model';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [ HeaderComponent, SearchComponent, TaskComponent, TaskListComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  title = 'Task List';
  taskList: Task[] = [
    { title: 'Humber', tasks: ['Task 1', 'Task 2', 'Task 3'], id: 1 },
    { title: 'MERN', tasks: ['Lab', 'Project', 'Quiz'], id: 2 },
    { title: 'Java', tasks: ['Group Discussion', 'Exam', 'Assignment'], id: 3 }
  ];
  filteredTasks: Task[] = [...this.taskList];

  onSearch(searchTerm: string) {
    this.filteredTasks = this.taskList.filter(task =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  onDeleteTask(taskId: number) {
    this.taskList = this.taskList.filter(task => task.id !== taskId);
    this.filteredTasks = [...this.taskList];
  }
}
