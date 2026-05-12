import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'hero-home',
  standalone: true,
  imports: [RouterLink],
  template: `
<section class="bg-slate-950 text-white">

  <!-- HERO SECTION -->
  <section class="min-h-screen flex items-center px-6 py-20">
    <div
     class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] gap-12 items-start"
    >

      <!-- LEFT CONTENT -->
      <div>

        <!-- Top Banner -->
        <div
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-base font-medium mb-8 shadow-lg"
        >
          <span
            class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"
          ></span>

          Frontend Developer • Angular • AWS • Terraform
        </div>

        <!-- Main Heading -->
        <h1
          class="text-3xl md:text-5xl font-bold leading-tight mb-6"
        >
          Hi, I'm
          <span class="text-cyan-400">
            Niraj Kumar
          </span>

          <br />

          Building Modern &
          <span class="text-cyan-400">
            Responsive
          </span>

          Web Experiences
        </h1>

        <!-- Description -->
        <p
          class="text-slate-400 text-lg leading-8 mb-8 max-w-2xl"
        >
          Passionate Angular developer focused on building
          responsive web applications, modern UI experiences,
          and cloud-ready solutions using Angular, AWS,
          TypeScript, and Terraform. Continuously learning and
          building real-world projects to improve frontend and
          cloud development skills.
        </p>

        <!-- BUTTONS -->
        <div class="flex flex-wrap gap-5 mb-10">

          <a
            routerLink="/projects"
            class="bg-cyan-500 hover:bg-cyan-600 text-white px-7 py-4 rounded-2xl font-semibold transition duration-300 shadow-lg hover:scale-105"
          >
            View Projects
          </a>

          <a
            routerLink="/contact"
            class="border border-slate-700 hover:border-cyan-500 px-7 py-4 rounded-2xl font-semibold transition duration-300 hover:bg-slate-900"
          >
            Contact Me
          </a>

        </div>

        <!-- TECH STACK -->
        <div class="flex flex-wrap gap-3">

          <span
            class="bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-slate-300"
          >
            Angular
          </span>

          <span
            class="bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-slate-300"
          >
            AWS
          </span>

          <span
            class="bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-slate-300"
          >
            Terraform
          </span>

          <span
            class="bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-slate-300"
          >
            TypeScript
          </span>

          <span
            class="bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-slate-300"
          >
            Tailwind CSS
          </span>

          <span
            class="bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-slate-300"
          >
            GitHub
          </span>

        </div>
      </div>

      <!-- RIGHT IMAGE -->
      <div class="flex justify-center">

        <div
          class="relative w-[260px] h-[260px] md:w-[340px] md:h-[340px]"
        >

          <!-- Glow -->
          <div
            class="absolute inset-0 bg-cyan-500/20 rounded-full blur-[100px]"
          ></div>

          <!-- Profile Card -->
          <div
            class="relative bg-slate-900 border border-slate-800 rounded-[40px] overflow-hidden shadow-2xl p-4"
          >
            <img
              src="profile/profile.jpg"
              alt="Profile"
              class="rounded-[30px] w-full h-full object-cover"
            />
          </div>

        </div>
      </div>

    </div>
  </section>

  <!-- STATS SECTION -->
  <section class="border-y border-slate-800 bg-slate-900 py-10">
    <div class="max-w-7xl mx-auto px-6">

      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >

        <div>
          <h3 class="text-4xl font-bold text-cyan-400">
            5+
          </h3>

          <p class="text-slate-400 mt-2">
            Projects Built
          </p>
        </div>

        <div>
          <h3 class="text-4xl font-bold text-cyan-400">
            Angular
          </h3>

          <p class="text-slate-400 mt-2">
            Frontend Development
          </p>
        </div>

        <div>
          <h3 class="text-4xl font-bold text-cyan-400">
            AWS
          </h3>

          <p class="text-slate-400 mt-2">
            Cloud Learning
          </p>
        </div>

        <div>
          <h3 class="text-4xl font-bold text-cyan-400">
            Terraform
          </h3>

          <p class="text-slate-400 mt-2">
            Infrastructure as Code
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- WHAT I DO -->
  <section class="py-24 px-6">
    <div class="max-w-7xl mx-auto">

      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">
          What I Do
        </h2>

        <p class="text-slate-400 text-lg">
          Technologies and services I focus on.
        </p>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-8"
      >

        <!-- Card 1 -->
        <div
          class="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500 transition duration-300"
        >
          <h3 class="text-2xl font-semibold mb-4">
            Angular Development
          </h3>

          <p class="text-slate-400 leading-7">
            Building responsive, modern and scalable web
            applications using Angular and TypeScript.
          </p>
        </div>

        <!-- Card 2 -->
        <div
          class="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500 transition duration-300"
        >
          <h3 class="text-2xl font-semibold mb-4">
            Cloud Deployment
          </h3>

          <p class="text-slate-400 leading-7">
            Deploying applications using AWS services like
            S3, CloudFront and Route53.
          </p>
        </div>

        <!-- Card 3 -->
        <div
          class="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500 transition duration-300"
        >
          <h3 class="text-2xl font-semibold mb-4">
            Terraform Basics
          </h3>

          <p class="text-slate-400 leading-7">
            Learning infrastructure automation and AWS
            provisioning using Terraform.
          </p>
        </div>

      </div>
    </div>
  </section>

</section>
  `,
})
export class HomeComponent {}
