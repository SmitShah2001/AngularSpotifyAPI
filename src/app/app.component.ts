import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './task.model';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { SpotifyComponent } from './components/spotify/spotify.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavBarComponent ,  HomeComponent, RegisterComponent , LoginComponent , SpotifyComponent],
  // HeaderComponent, SearchComponent, TaskListComponent ,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task List';
  // taskList: Task[] = [
  //   { title: 'Humber', tasks: ['Task 1', 'Task 2', 'Task 3'], id: 1 },
  //   { title: 'MERN', tasks: ['Lab', 'Project', 'Quiz'], id: 2 },
  //   { title: 'Java', tasks: ['Group Discussion', 'Exam', 'Assignment'], id: 3 }
  // ];
  // filteredTasks: Task[] = [...this.taskList];

  // onSearch(searchTerm: string) {
  //   this.filteredTasks = this.taskList.filter(task =>
  //     task.title.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  // }

  // onDeleteTask(taskId: number) {
  //   this.taskList = this.taskList.filter(task => task.id !== taskId);
  //   this.filteredTasks = [...this.taskList];
  // }
}
