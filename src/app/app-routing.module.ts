import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsRoutingModule } from './posts/posts-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
