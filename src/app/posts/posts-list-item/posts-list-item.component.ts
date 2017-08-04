import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Post } from '../shared/post.model';

@Component({
  selector: 'posts-list-item',
  templateUrl: './posts-list-item.component.html',
  styles: [`
    article {
      margin-bottom: 5px;
    }
  `]
})
export class PostsListItemComponent {
  @Input() post: Post;
  @Output() onDelete = new EventEmitter();

  delete(post: Post): void {
    return this.onDelete.emit(this.post);
  }
}
