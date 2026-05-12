import { Component } from '@angular/core';

@Component({
  selector: 'blog-page',
  standalone: true,
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

        <!-- Featured Blog -->
        <div
          class="bg-slate-900 border border-slate-800 rounded-[40px] overflow-hidden mb-16 hover:border-cyan-500 transition duration-300"
        >
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <!-- Image -->
            <div class="overflow-hidden">
              <img
                src="images/angular-s3-aws-dep.png"
                alt="Angular Blog"
                class="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>

            <!-- Content -->
            <div class="p-10 flex flex-col justify-center">
              <span
                class="bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm inline-block w-fit mb-5"
              >
                Featured Blog
              </span>

              <h3 class="text-3xl font-bold mb-5">Deploy Angular App to AWS S3 + CloudFront</h3>

              <p class="text-slate-400 leading-8 mb-8">
                Step-by-step guide to deploying an Angular application using AWS S3, CloudFront CDN,
                and Route53 with best practices for hosting and performance.
              </p>

              <button
                class="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-2xl font-semibold w-fit transition duration-300"
              >
                Read More
              </button>
            </div>
          </div>
        </div>

        <!-- Blog Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <!-- Blog 1 -->
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
                Angular
              </span>

              <h3 class="text-2xl font-semibold mt-5 mb-4">Angular Interview Questions</h3>

              <p class="text-slate-400 leading-7 mb-6">
                Common Angular interview questions with practical explanations for beginners and
                developers.
              </p>

              <button class="text-cyan-400 font-semibold">Read More →</button>
            </div>
          </div>

          <!-- Blog 2 -->
          <div
            class="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500 hover:-translate-y-2 transition duration-300 shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
              alt="AWS"
              class="w-full h-56 object-cover"
            />

            <div class="p-6">
              <span class="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-sm"> AWS </span>

              <h3 class="text-2xl font-semibold mt-5 mb-4">AWS S3 & CloudFront Setup</h3>

              <p class="text-slate-400 leading-7 mb-6">
                Learn how to host and deploy applications efficiently using AWS S3 and CloudFront.
              </p>

              <button class="text-cyan-400 font-semibold">Read More →</button>
            </div>
          </div>

          <!-- Blog 3 -->
          <div
            class="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500 hover:-translate-y-2 transition duration-300 shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
              alt="Terraform"
              class="w-full h-56 object-cover"
            />

            <div class="p-6">
              <span class="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-sm">
                Terraform
              </span>

              <h3 class="text-2xl font-semibold mt-5 mb-4">Terraform Basics for Beginners</h3>

              <p class="text-slate-400 leading-7 mb-6">
                Understanding Terraform basics, providers, resources, and AWS infrastructure
                automation.
              </p>

              <button class="text-cyan-400 font-semibold">Read More →</button>
            </div>
          </div>

          <!-- Blog 4 -->
          <div
            class="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500 hover:-translate-y-2 transition duration-300 shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2"
              alt="CSS"
              class="w-full h-56 object-cover"
            />

            <div class="p-6">
              <span class="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-sm"> CSS </span>

              <h3 class="text-2xl font-semibold mt-5 mb-4">CSS Position Explained</h3>

              <p class="text-slate-400 leading-7 mb-6">
                Learn relative, absolute, fixed, and sticky positioning with practical examples.
              </p>

              <button class="text-cyan-400 font-semibold">Read More →</button>
            </div>
          </div>

          <!-- Blog 5 -->
          <div
            class="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500 hover:-translate-y-2 transition duration-300 shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
              alt="CI/CD"
              class="w-full h-56 object-cover"
            />

            <div class="p-6">
              <span class="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-sm">
                DevOps
              </span>

              <h3 class="text-2xl font-semibold mt-5 mb-4">CI/CD Pipeline Basics</h3>

              <p class="text-slate-400 leading-7 mb-6">
                Understand the basics of CI/CD and how automation improves deployment workflows.
              </p>

              <button class="text-cyan-400 font-semibold">Read More →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class BlogComponent {}
