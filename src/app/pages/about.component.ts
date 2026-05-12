import { Component } from '@angular/core';

@Component({
  selector: 'about-page',
  standalone: true,
  template: `
  <section class="bg-slate-950 text-white min-h-screen py-24 px-6">

  <div class="max-w-7xl mx-auto">

    <!-- Heading -->
    <div class="text-center mb-20">

      <h2 class="text-4xl md:text-5xl font-bold mb-5">
        About Me
      </h2>

      <p class="text-slate-400 text-lg max-w-3xl mx-auto leading-8">
        Passionate about building modern web experiences,
        responsive applications, and continuously learning
        cloud and frontend technologies.
      </p>

    </div>

    <!-- About Section -->
    <div
      class="grid grid-cols-1 lg:grid-cols-[0.9fr_1.3fr] gap-16 items-start"
    >

      <!-- Left Image -->
      <div class="flex justify-center">

        <div
          class="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px]"
        >

          <!-- Glow -->
          <div
            class="absolute inset-0 bg-cyan-500/20 rounded-full blur-[90px]"
          ></div>

          <!-- Image Card -->
          <div
            class="relative bg-slate-900 border border-slate-800 rounded-[30px] overflow-hidden p-4 shadow-2xl"
          >

            <img
              src="/profile/profile.jpg"
              alt="Profile"
              class="rounded-[24px] w-full h-full object-cover"
            />

          </div>

        </div>
      </div>

      <!-- Right Content -->
      <div>

        <span
          class="bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-5 py-2 rounded-full text-sm"
        >
          Software Engineer • Angular • AWS • Terraform
        </span>

        <h3
          class="text-3xl md:text-4xl font-bold mt-8 mb-6"
        >
          Hi, I'm
          <span class="text-cyan-400">
            Niraj Kumar
          </span>
        </h3>

        <p
          class="text-slate-400 text-lg leading-8 mb-6"
        >
          I am a passionate Software Engineer focused on
          frontend development and cloud technologies.
          I enjoy building modern, responsive, and scalable
          web applications using Angular, TypeScript,
          HTML, CSS, and Tailwind CSS.
        </p>

        <p
          class="text-slate-400 text-lg leading-8 mb-10"
        >
          Currently exploring AWS and Terraform to improve
          cloud deployment and infrastructure automation
          skills. I believe in continuous learning and
          building practical real-world projects to grow
          technically and professionally.
        </p>

        <!-- Technologies -->
        <div class="mb-10">

          <h4 class="text-xl font-semibold mb-5">
            Technologies I Work With
          </h4>

          <div class="flex flex-wrap gap-4">

            <span
              class="bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-slate-300"
            >
              Angular
            </span>

            <span
              class="bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-slate-300"
            >
              TypeScript
            </span>

            <span
              class="bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-slate-300"
            >
              JavaScript
            </span>

            <span
              class="bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-slate-300"
            >
              HTML
            </span>

            <span
              class="bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-slate-300"
            >
              CSS
            </span>

            <span
              class="bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-slate-300"
            >
              Tailwind
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
              GitHub
            </span>

          </div>

        </div>

      </div>

    </div>

    <!-- Journey Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">

      <!-- Card 1 -->
      <div
        class="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500 transition duration-300"
      >

        <h3 class="text-2xl font-semibold mb-4">
          Frontend Development
        </h3>

        <p class="text-slate-400 leading-8">
          Building modern responsive web applications
          using Angular and TypeScript with focus
          on clean UI and scalability.
        </p>

      </div>

      <!-- Card 2 -->
      <div
        class="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500 transition duration-300"
      >

        <h3 class="text-2xl font-semibold mb-4">
          Cloud Learning
        </h3>

        <p class="text-slate-400 leading-8">
          Learning AWS services including S3,
          CloudFront, Route53, EC2 and cloud
          deployment strategies.
        </p>

      </div>

      <!-- Card 3 -->
      <div
        class="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500 transition duration-300"
      >

        <h3 class="text-2xl font-semibold mb-4">
          DevOps Basics
        </h3>

        <p class="text-slate-400 leading-8">
          Exploring Terraform, infrastructure
          automation, and CI/CD concepts
          through practical learning.
        </p>

      </div>

    </div>

  </div>

</section>
  `,

})
export class AboutComponent {}
