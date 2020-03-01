import { Component, OnInit, ɵConsole, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { BlogPostData } from 'src/app/blog-post-data';
import { BlogPostTileComponent } from 'src/app/blog-post-tile/blog-post-tile.component';
import { BlogServiceDataService } from 'src/app/blog-service-data.service';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.scss']
})
export class BlogHomeComponent implements OnInit {

 // blogPostData: BlogPostData;
  
  blogPostArray: BlogPostData[][];
  currentPage:number;

  @ViewChildren("tile") blogPostComponents: QueryList<BlogPostTileComponent>;

  constructor(private blogServiceData:BlogServiceDataService) { }

  ngOnInit() {
  
   //this.blogPostData= new BlogPostData("blog title", "blog summary");
    this.currentPage =0;
   this.blogPostArray= this.blogServiceData.getBlogPosts();
  }

  updatePage(page){
    this.currentPage =page;
  }

  expandAllBlogPostSummary(){
    this.blogPostComponents.forEach(e=>e.expandSummary());
  }

  markAllBlogPostFavorite(){
    this.blogPostArray[this.currentPage].forEach(post=>post.isFav=true);
  }
}
