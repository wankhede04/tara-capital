import { Component, OnInit } from '@angular/core';
import { IStory } from './models/stories';
import { StoriesService } from './services/stories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public storyDetails: Array<IStory>;

  constructor(public storiesService: StoriesService) {
    storiesService.storyDetailsInput = {
      title: '',
      description: '',
      username: ''
    }
  }

  ngOnInit() {
    this.storiesService.getStory().subscribe(res => {
      console.table(res)
      this.storyDetails = res;
    })
  }

  public collectStoryDetails() {
    this.storyDetails.unshift(this.storiesService.storyDetailsInput);
  }
}
