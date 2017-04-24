import { Post } from './../../../interfaces/post-model';
import { PostService } from './../../../services/post.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
selectedPost: Post;
@Output() updated= new EventEmitter;
  constructor( private router: Router, private route: ActivatedRoute, private postService: PostService) {
    this.goToPosts = this.goToPosts.bind(this);
    this.setSelectedPost = this.setSelectedPost.bind(this);
  }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
       this.setSelectedPost( this.postService.getPostById( +params.id) );
    });
  }

  setSelectedPost(post: Post): void {
      this.selectedPost = Object.assign({}, post);
  }

  goToPosts() {
    this.router.navigate(['posts']);
  }

  updatePost(post: Post) {
    this.postService.emitChange(this.postService.updatePost(post));
    this.goToPosts();
  }

}
