import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { PaginationComponent } from './pagination/pagination.component';
import { BlogPostTileComponent } from 'src/app/blog-post-tile/blog-post-tile.component';
import { TruncatePipe } from './truncate.pipe';
import { HighlightDirective } from './highlight.directive';
import { CardComponent } from './card/card.component';
import { ShellComponent } from './shell/shell.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogHomeComponent,
    PaginationComponent,
    BlogPostTileComponent,
    TruncatePipe,
    HighlightDirective,
    CardComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TruncatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
