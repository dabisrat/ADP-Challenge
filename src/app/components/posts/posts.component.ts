import { Router, ActivatedRoute } from '@angular/router';
import { Post } from './../../interfaces/post-model';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  newPostTitle: string;
  newPostBody: string;
  visable = true;
  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) {
    postService.changeEmitted.subscribe( (newCollection) =>
      this.posts = this.posts.map((value, index) => newCollection[index]) );
  }

  ngOnInit() {
    console.log('do i run this more than once per application');
    this.postService.getInitalData()
                    .then(() => this.posts = this.postService.storage)
                    .catch(error => console.error(error));
  }

    getPosts(): void {
     this.posts = this.postService.getAllPosts();
  }

  deletePost( post: Post): void {
     this.posts = this.postService.deletePost(post.id);
  }

 selectPost(post: Post): void {
    console.log(post);
    this.router.navigate( ['details', post.id], {relativeTo: this.route} );
  }

  addPost(post: Post) {
    this.posts = this.postService.addPost(post);
  }
  updatePost(post) {
    console.log(post);
  }

}
