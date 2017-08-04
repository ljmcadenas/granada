import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsService } from './shared/posts.service';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsListItemComponent } from './posts-list-item/posts-list-item.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostEditResolver } from './post-edit-resolver.service';
import { PostCreateComponent } from './post-create/post-create.component';

@NgModule({
  imports: [
    SharedModule,
    PostsRoutingModule
  ],
  declarations: [
    PostsListComponent,
    PostsListItemComponent,
    PostFormComponent,
    PostEditComponent,
    PostCreateComponent
  ],
  providers: [
    PostsService,
    PostEditResolver
  ]
})
export class PostsModule { }
