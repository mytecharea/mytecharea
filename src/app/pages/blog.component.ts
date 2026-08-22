import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BLOGS } from '../data/blogs';

@Component({
  selector: 'blog-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="bg-slate-950 text-white min-h-screen py-24 px-6">
      <div class="max-w-7xl mx-auto">
        <!-- Heading -->
        <div class="text-center mb-20">
          <h2 class="text-4xl md:text-5xl font-bold mb-5">My Blog</h2>

          <p class="text-slate-400 text-lg max-w-3xl mx-auto leading-8">
            Sharing knowledge, learning experiences, and practical insights about Angular, AWS,
            Terraform, frontend development, and cloud technologies.
          </p>
        </div>
        
        <!-- Blog Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <!-- Blog 1 -->
            @for (blog of blogs; track blog.id) {
          <div
            class="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500 hover:-translate-y-2 transition duration-300 shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
              alt="Angular"
              class="w-full h-56 object-cover"
            />

            <div class="p-6">
              <span class="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-sm">
                 {{ blog.category }}
              </span>

              <h3 class="text-2xl font-semibold mt-5 mb-4">   {{ blog.title }}</h3>

              <p class="text-slate-400 leading-7 mb-6">
             {{ blog.description }}
              </p>

              <a  [routerLink]="['/blog', blog.id]" class="text-cyan-400 font-semibold">Read More →</a>
            </div>
          </div>
            }
        </div>
      </div>
    </section>
  `,
})
export class BlogComponent {
  blogs=BLOGS
}
