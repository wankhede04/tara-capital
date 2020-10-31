import { Injectable } from '@angular/core';
import { IStory } from '../models/stories';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {
  public storyDetailsInput: IStory;

  constructor(private http: HttpClient) { }

  public storeStory(payload: IStory): Observable<any> {
    return this.http.post(
      `http://localhost:4201/story`,
      payload
    );
  }

  public getStory(): Observable<any> {
    return this.http.get('../../assets/story.json');
  }
}
