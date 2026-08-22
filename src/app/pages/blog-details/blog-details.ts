import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BLOGS } from '../../data/blogs';

@Component({
  selector: 'app-blog-details',
  imports: [],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.css',
})
export class BlogDetails {
    blogs = BLOGS;
    blog: any;

  constructor(
    private route: ActivatedRoute
  ) {

    const id =
      this.route.snapshot.paramMap.get('id');

    this.blog = this.blogs.find(
      x => x.id === id
    );
  }

}
