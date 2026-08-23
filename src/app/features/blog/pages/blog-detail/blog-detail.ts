import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../model/blog.model';
import { marked } from 'marked';

@Component({
  selector: 'app-blog-detail',
  imports: [DatePipe,RouterLink],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.css',
})
export class BlogDetail implements OnInit {

 private route = inject(ActivatedRoute);
 private blogService = inject(BlogService);
  blog: Blog | null = null;
  renderedContent = '';

  loading = false;
  errorMessage = '';

   ngOnInit(): void {

    const slug = this.route.snapshot.paramMap.get('slug');

    if (slug) {
      this.loadBlog(slug);
    }

  }
loadBlog(slug: string): void {
  this.loading = true;

  this.blogService.getBlogBySlug(slug).subscribe({
    next: (response) => {
      this.blog = response.data;

      this.renderedContent = marked.parse(
        this.blog.content
      ) as string;

      this.loading = false;
    },

    error: (error) => {
      console.error('Failed to load blog:', error);

      this.errorMessage = 'Unable to load this article.';
      this.loading = false;
    }
  });
}

}
