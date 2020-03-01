import { Component, OnInit, Input } from '@angular/core';
import { BlogPostData } from 'src/app/blog-post-data';
import { TruncatePipe } from 'src/app/truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss']
})
export class BlogPostTileComponent implements OnInit {

  @Input() post: BlogPostData;
  fullSummary: string;

  constructor(private truncatePipe: TruncatePipe) { }

  ngOnInit() {
    //console.log('Post',this.post);
    this.fullSummary= this.post.summary;
    this.post.summary = this.truncatePipe.transform(this.post.summary, 10);
  }

  expandSummary(){
    this.post.summary = this.fullSummary;
  }

  markAsFav(){
    this.post.isFav= !this.post.isFav;
  }
}
