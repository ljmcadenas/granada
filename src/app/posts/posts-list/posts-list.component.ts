import { Component, OnInit } from '@angular/core';

import { Post } from '../shared/post.model';
import { PostsService } from '../shared/posts.service';

@Component({
  templateUrl: './posts-list.component.html',
  styles: []
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];
  limit: number = 5;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe( posts => this.posts = posts );
  }

  // TODO paginación
  viewMore(): void {
    this.limit += 5;
  }

  delete(post: Post): void {
    const confirm = window.confirm(`Desea elimnar el Post ${post.id}?`);

    if (confirm) {
      this.postsService.deletePost(post).subscribe( () => this.posts = this.posts.filter( t => t !== post))
    }
  }

}
