import { Injectable } from '@angular/core';
import { BlogPostData } from 'src/app/blog-post-data';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceDataService {

  constructor() { }


  getBlogPosts(): BlogPostData[][]{
    return [
            [ 
              new BlogPostData("blog title1", "blog summary1"),
              new BlogPostData("blog title2", "blog summary2"),
              new BlogPostData("blog title3", "blog summary3")
            ],
            [
              new BlogPostData("post 4", "blog summary4"),
              new BlogPostData("post 5", "blog summary5"),
              new BlogPostData("post 6", "blog summary6")
            ],
            [
              new BlogPostData("blog title7", "blog summary7"),
              new BlogPostData("blog title8", "blog summary8"),
              new BlogPostData("blog title9", "blog summary9")
            ]
          ]

  }
}
