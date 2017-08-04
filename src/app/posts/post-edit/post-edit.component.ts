import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from "../shared/post.model";

@Component({
  template: `
    <section>
      <post-form [post]="post"></post-form>
    </section>
  `
})
export class PostEditComponent implements OnInit {
  post: Post;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe( (data: { post: Post }) => {
      this.post = data.post;
    });
  }
}
