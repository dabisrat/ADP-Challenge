import { Post } from './../interfaces/post-model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';


const baseUrl  = `https://jsonplaceholder.typicode.com/posts/`;
const headers = new Headers({ 'Content-Type': 'application/json' });
const options = new RequestOptions({ headers: headers });

@Injectable()
export class PostService {
  private emitChangeSource = new Subject();
  changeEmitted = this.emitChangeSource.asObservable();

  storage: Post[];
  constructor(private http: Http) {
    this.processData = this.processData.bind(this);
  }

  getInitalData() {
    return this.http.get(baseUrl)
                    .toPromise()
                    .then( this.processData )
                    .catch( this.handelError );
  }

  getAllPosts(): Post[] {
    return this.storage;
  };


  getPostById(postId: number): Post {
  return this.storage.find( post => postId === post.id );
  }

  deletePost(postId: number): Post[] {
    this.storage = this.storage.filter( post => postId !== post.id );
    return this.storage;
  }

  updatePost(post: Post): Post[] {
    const index = this.storage.reduce( (memo, item, i) => post.id === item.id ? i : memo, -1);
    this.storage[index] = post;
    return this.storage;
}

  addPost(post: Post): Post[] {
     this.storage = [post].concat(this.storage);
     return this.storage;
  }

  processData(res: Response) {
    this.storage = res.json().slice(0, 20);
    return res.json();
  }

  emitChange(change: any) {
    this.emitChangeSource.next(change);
  }

  handelError(err: Response): void {
    console.error(err);
  }

}
