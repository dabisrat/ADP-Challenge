import { PostService } from './../../../services/post.service';
import { Post } from './../../../interfaces/post-model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Input() visable: boolean;
  @Input() posts: Post[];
  @Input() newPostData = {title: '', body: ''};
  @Output() deleted = new EventEmitter;
  @Output() added = new EventEmitter;
  @Output() selected = new EventEmitter;
  constructor() {
  }
  set setPosts (posts) {
    if (!this.posts) {
      this.posts = posts;
    }
  }

  ngOnInit() {
  }


  deletePost(event: Event, post: Post): void {
    event.stopPropagation();
     this.deleted.emit(post);
  }

  addPost(event: Event) {
    const id = this.posts.length + 1;
    const newPost = Object.assign({}, {id: id}, this.newPostData);
    this.added.emit(newPost);
    this.newPostData =  {title: '', body: ''};
  }

  selectedPost(post: Post) {
    this.selected.emit(post);
  }


}
