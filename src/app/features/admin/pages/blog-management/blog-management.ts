import { Component, OnInit, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { BlogService } from '../../../blog/services/blog.service';
import { Blog } from '../../../blog/model/blog.model';


@Component({
  selector: 'app-blog-management',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './blog-management.html',
  styleUrl: './blog-management.css'
})
export class BlogManagementComponent implements OnInit {

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

        console.error(error);

        this.errorMessage = 'Unable to load blogs.';

        this.loading = false;

      }

    });

  }

  deleteBlog(id: string): void {

    const confirmed = confirm(
      'Are you sure you want to delete this blog?'
    );

    if (!confirmed) {
      return;
    }

    this.blogService.deleteBlog(id).subscribe({

      next: () => {

        this.blogs = this.blogs.filter(
          blog => blog._id !== id
        );

      },

      error: (error) => {

        console.error(error);

        alert('Unable to delete blog.');

      }

    });

  }

}