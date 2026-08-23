import { Component, inject, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../model/blog.model';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  imports: [DatePipe,RouterLink],
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.css',
})
export class BlogList implements OnInit {
private blogService = inject(BlogService);
 blogs: Blog[] = [];
  loading = false;
  errorMessage = '';

  ngOnInit(): void {
    this.loadBlogs();
  }

  loadBlogs(): void {
    this.loading = true;

    this.blogService.getBlogs().subscribe({
      next: (response) => {
        this.blogs = response.data;
        this.loading = false;
      },

      error: (error) => {
        console.error('Failed to load blogs', error);
        this.errorMessage = 'Unable to load blogs.';
        this.loading = false;
      }
    });
  }
}
