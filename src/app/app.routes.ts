import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { SpotifyComponent } from './components/spotify/spotify.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'task',
    component: TasksComponent,
  },
  {
    path: 'spotify',
    component: SpotifyComponent,
  },
  {
    path: 'contact',
    component: ContactFormComponent,
  },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
