import { PostService } from './../../services/post.service';
import { Post } from './../../interfaces/post-model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[];
  isCreating = false;
  newPostTitle: string;
  newPostBody: string;
  constructor( private router: Router, private route: ActivatedRoute, private postService: PostService) { 
    console.log('where is the constructor call')
  }

  ngOnInit() {
    console.log('is component before service')
     this.postService.getInitalData().then( (data) => console.log(data) );
  }
  getPosts(): void {
     this.posts = this.postService.getAllPosts();
  }

  deletePost(event: Event, post: Post): void {
    event.stopPropagation();
     this.posts = this.postService.deletePost(post.id);
  }

  selectPost(post: Post): void {
    this.router.navigate( ['posts', post.id] );
  }

  addPost() {
    const id = this.posts.length + 1;
    const newPost = Object.assign({}, {id: id}, {title: this.newPostTitle, body: this.newPostBody});
    this.posts = this.postService.addPost(newPost);
    this.newPostBody = this.newPostTitle = '';
  }

}
