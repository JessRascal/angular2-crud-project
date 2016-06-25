import { Component, Input } from '@angular/core';

import { Post } from './post';

@Component({
    selector: 'post-details',
    templateUrl: 'app/posts/post-details.component.html'
})

export class PostDetailsComponent {
    @Input() post: Post;
}