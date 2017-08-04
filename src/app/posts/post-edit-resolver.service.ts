import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Post } from './shared/post.model';
import { PostsService } from './shared/posts.service';

@Injectable()
export class PostEditResolver implements Resolve<Post> {

    constructor(private postsService: PostsService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> {
        const post: Post = new Post();
        post.id = parseInt(route.paramMap.get('id'));

        return this.postsService.getPost(post).map( t => {
            if (t) { return t; }
            
            return null;
        })
    }
}