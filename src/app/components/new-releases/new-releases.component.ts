import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-new-releases',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-releases.component.html',
  styleUrl: './new-releases.component.css'
})
export class NewReleasesComponent implements OnInit{
  
  newReleases: any[] = [];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.spotifyService.getNewReleases().subscribe(
      (data : any) => {
        this.newReleases = data.albums.items;
        console.log(data);
      },
      (error : any) => {
        console.error('Error fetching new releases', error);
      }
    );
  }


}
