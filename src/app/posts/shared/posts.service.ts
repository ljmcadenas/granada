import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'environments/environment';
import { Observable } from 'rxjs/Observable';

import { Post } from './post.model';

@Injectable()
export class PostsService {
  private readonly resource: string = '/posts';
  private readonly apiUrl: string = `${env.apiBaseUrl}${this.resource}`;

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(`${this.apiUrl}`);
  }

  getPost(post: Post): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${post.id}`);
  }

  cretatePost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.apiUrl}`, post);
  }

  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/${post.id}`, post);
  }

  deletePost(post: Post): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${post.id}`);
  }
}
