import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { marked } from 'marked';

import { BlogService } from '../../../blog/services/blog.service';

@Component({
  selector: 'app-blog-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './blog-edit.html',
  styleUrl: './blog-edit.css'
})
export class BlogEditComponent implements OnInit {

  private fb = inject(FormBuilder);
  private blogService = inject(BlogService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  blogId = '';

  loading = false;
  saving = false;

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
      Validators.required
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


  ngOnInit(): void {

    this.blogId =
      this.route.snapshot.paramMap.get('id') || '';

    if (!this.blogId) {

      this.errorMessage =
        'Blog ID was not provided.';

      return;
    }

    this.loadBlog();

  }


  /* =========================
     LOAD BLOG
  ========================= */

  loadBlog(): void {

    this.loading = true;

    this.blogService
      .getBlogById(this.blogId)
      .subscribe({

        next: (response) => {

          const blog = response.data;

          this.blogForm.patchValue({

            title: blog.title || '',

            slug: blog.slug || '',

            excerpt: blog.excerpt || '',

            category: blog.category || 'Angular',

            author: blog.author || 'Niraj Kumar',

            featuredImage:
              blog.featuredImage || '',

            content: blog.content || '',

            status: blog.status || 'draft'

          });

          this.updatePreview();

          this.loading = false;

        },

        error: (error) => {

          console.error(
            'Load blog error:',
            error
          );

          this.errorMessage =
            'Unable to load the blog.';

          this.loading = false;

        }

      });

  }


  /* =========================
     UPDATE BLOG
  ========================= */

  updateBlog(): void {

    if (this.blogForm.invalid) {

      this.blogForm.markAllAsTouched();

      return;
    }

    this.saving = true;

    this.errorMessage = '';

    const blogData =
      this.blogForm.getRawValue();

    this.blogService
      .updateBlog(
        this.blogId,
        blogData
      )
      .subscribe({

        next: () => {

          this.saving = false;

          this.router.navigate([
            '/admin/blogs'
          ]);

        },

        error: (error) => {

          console.error(
            'Update blog error:',
            error
          );

          this.saving = false;

          this.errorMessage =
            error.error?.message ||
            'Unable to update blog.';

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

    this.blogForm.controls.slug
      .setValue(slug);

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