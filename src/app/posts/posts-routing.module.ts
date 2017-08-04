import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsListComponent } from './posts-list/posts-list.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostEditResolver } from './post-edit-resolver.service';
import { PostCreateComponent } from './post-create/post-create.component';

const routes: Routes = [
  {
    path: 'posts',
    children: [
      {
        path: '',
        component: PostsListComponent
      },
      {
        path: 'create',
        component: PostCreateComponent
      },
      {
        path: ':id',
        component: PostEditComponent,
        resolve: {
          post: PostEditResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PostsRoutingModule { }
