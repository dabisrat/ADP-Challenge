import { Post } from './../interfaces/post-model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

const baseUrl  = `https://jsonplaceholder.typicode.com/posts/`;
const headers = new Headers({ 'Content-Type': 'application/json' });
const options = new RequestOptions({ headers: headers });

@Injectable()
export class PostService {
  storage: Post[];
  constructor(private http: Http) {
    console.log('when this runs');
    this.processData = this.processData.bind(this);
    this.getInitalData();
  }

  getInitalData() {
    return this.http.get(baseUrl)
                    .toPromise()
                    .then( this.processData )
                    .then( () => console.log(this.storage))
                    .catch( this.handelError );
  }

  getAllPosts(): Post[] {
    return this.storage;
  };


  getPostById(postId: number): Post {
  return this.storage.find( post => postId === post.id );
  }

  deletePost(postId: number): Post[] {
   return this.storage.filter( post => postId !== post.id );
  }

  updatePost(post: Post): Post[] {
    return this.storage.splice(post.id, 0, post);
}

  addPost(post: Post): Post[] {
    this.storage.unshift(post);
    return this.storage;
  }

  processData(res: Response): Post[] {
    this.storage = res.json();
    return res.json();
  }

  handelError(err: Response): void {
    console.error(err);
  }

}
