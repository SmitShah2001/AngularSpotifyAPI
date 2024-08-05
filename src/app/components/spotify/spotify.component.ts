import { Component} from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { NewReleasesComponent } from '../new-releases/new-releases.component';


@Component({
  selector: 'app-spotify',
  standalone: true,
  imports: [ CommonModule , NewReleasesComponent, RouterLink, RouterLinkActive], 
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css']
})
export class SpotifyComponent  {

  // showNewReleases = false;
}
