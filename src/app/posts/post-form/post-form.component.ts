import { Component, Input, OnInit, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Post } from "../shared/post.model";
import { PostsService } from '../shared/posts.service';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostFormComponent implements OnInit, OnChanges {
  @Input() post: Post;
  isUpdate: boolean;
  postForm: FormGroup;

  constructor(private fb: FormBuilder, private postsService: PostsService, private router: Router, private route: ActivatedRoute) {
    this.initForm();
  }

  ngOnInit(): void {
    if (this.post) {
      this.isUpdate = true;
    } 
    else {
      this.isUpdate = false;
      this.post = new Post();
    }
  }
  
  ngOnChanges() {
    this.postForm.reset(this.post);
  } 

  initForm(): void {
    this.postForm = this.fb.group({
      title: [ '', Validators.required ],
      body: ''
    });
  }

  get title() { return this.postForm.get('title'); }
  get body() { return this.postForm.get('body'); }

  onSubmit(): void {
    this.isUpdate ? this.update() : this.create();
  }

  private preparePostSave(): Post {
    const formModel = this.postForm.value;
    
    const savePost: Post = {
      userId: this.post.userId,
      id: this.post.id,
      title: formModel.title as string,
      body: formModel.body as string
    }
    return savePost;
  }

  private create(): void {
    const post: Post = this.preparePostSave();

    this.postsService.cretatePost(post).subscribe( () => this.router.navigate(['../'], { relativeTo: this.route }) );
  }

  private update(): void {
    const post: Post = this.preparePostSave();

    this.postsService.updatePost(post).subscribe();
  }

  delete(): void {
    this.postsService.deletePost(this.post).subscribe( () => this.router.navigate(['../'], { relativeTo: this.route }));
  }
}
