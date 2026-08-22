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

       
        
       

        <!-- Main Heading -->
        <h1
          class="text-3xl md:text-5xl font-bold leading-tight mb-6"
        >
          Hi, I'm
          <span class="text-cyan-400">
            Niraj Kumar
          </span>

          <br />

          Senior Frontend Engineer
          <span class="text-cyan-400">
           
          </span>

         
        </h1>

        <!-- Description -->
        <p
          class="text-slate-400 text-lg leading-8 mb-8 max-w-2xl"
        >
        I’m a Senior Frontend Engineer with 12+ years of experience building enterprise-grade web applications and modern user experiences. I specialize in Angular, TypeScript, RxJS, and responsive UI development, with hands-on experience in AWS, Terraform, and CI/CD.

I focus on building scalable, maintainable, high-performance applications and delivering modern frontend solutions that are ready for the cloud.
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



</section>
  `,
})
export class HomeComponent {}
