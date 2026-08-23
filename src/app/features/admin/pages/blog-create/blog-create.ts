import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { marked } from 'marked';

import { BlogService } from '../../../blog/services/blog.service';

@Component({
  selector: 'app-blog-create',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './blog-create.html',
  styleUrl: './blog-create.css'
})
export class BlogCreateComponent {

  private fb = inject(FormBuilder);
  private blogService = inject(BlogService);
  private router = inject(Router);

  loading = false;
  errorMessage = '';

  previewHtml = '';

  blogForm = this.fb.nonNullable.group({

    title: [
      '',
      [
        Validators.required,
        Validators.minLength(5)
      ]
    ],

    slug: [
      '',
      [
        Validators.required
      ]
    ],

    excerpt: [
      '',
      [
        Validators.required,
        Validators.maxLength(300)
      ]
    ],

    category: [
      'Angular',
      Validators.required
    ],

    author: [
      'Niraj Kumar',
      Validators.required
    ],

    featuredImage: [
      ''
    ],

    content: [
      '',
      [
        Validators.required,
        Validators.minLength(20)
      ]
    ],

    status: [
      'draft',
      Validators.required
    ]

  });


  /* =========================
     CREATE BLOG
  ========================= */

  createBlog(): void {

    if (this.blogForm.invalid) {

      this.blogForm.markAllAsTouched();

      return;
    }

    this.loading = true;
    this.errorMessage = '';

    const blogData = this.blogForm.getRawValue();

    this.blogService
      .createBlog(blogData)
      .subscribe({

        next: (response) => {

          console.log(
            'Blog created successfully:',
            response
          );

          this.loading = false;

          this.router.navigate([
            '/admin/blogs'
          ]);

        },

        error: (error) => {

          console.error(
            'Create blog error:',
            error
          );

          this.loading = false;

          this.errorMessage =
            error.error?.message ||
            'Unable to create blog. Please try again.';

        }

      });

  }


  /* =========================
     MARKDOWN PREVIEW
  ========================= */

  updatePreview(): void {

    const markdown =
      this.blogForm.controls.content.value;

    if (!markdown.trim()) {

      this.previewHtml = '';

      return;
    }

    this.previewHtml =
      marked.parse(markdown) as string;
  }


  /* =========================
     GENERATE SLUG
  ========================= */

  generateSlug(): void {

    const title =
      this.blogForm.controls.title.value;

    const slug = title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');

    this.blogForm.controls.slug.setValue(slug);
  }


  /* =========================
     IMAGE PREVIEW
  ========================= */

  get featuredImageUrl(): string {

    return this.blogForm.controls
      .featuredImage.value
      .trim();
  }

}