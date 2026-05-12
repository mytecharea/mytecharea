import { Component, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contact-page',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  template: `
    <section class="bg-slate-950 text-white min-h-screen py-24 px-6">

  <div class="max-w-7xl mx-auto">

    <!-- Heading -->
    <div class="text-center mb-20">

      <h2 class="text-4xl md:text-5xl font-bold mb-5">
        Contact Me
      </h2>

      <p class="text-slate-400 text-lg max-w-3xl mx-auto leading-8">
        Interested in working together, discussing a project,
        or just saying hello? Feel free to reach out.
      </p>

    </div>

    <div
      class="grid grid-cols-1 lg:grid-cols-[0.9fr_1.2fr] gap-12"
    >

      <!-- LEFT INFO -->
      <div class="space-y-6">

        <!-- Card 1 -->
        <div
          class="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500 transition duration-300"
        >

          <div
            class="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-3xl mb-5"
          >
            📧
          </div>

          <h3 class="text-2xl font-semibold mb-3">
            Email
          </h3>

          <p class="text-slate-400">
            yourmail@example.com
          </p>

        </div>

        <!-- Card 2 -->
        <div
          class="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500 transition duration-300"
        >

          <div
            class="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-3xl mb-5"
          >
            📍
          </div>

          <h3 class="text-2xl font-semibold mb-3">
            Location
          </h3>

          <p class="text-slate-400">
            Kolkata, India
          </p>

        </div>

        <!-- Card 3 -->
        <div
          class="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500 transition duration-300"
        >

          <div
            class="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-3xl mb-5"
          >
            💼
          </div>

          <h3 class="text-2xl font-semibold mb-3">
            Availability
          </h3>

          <p class="text-slate-400">
            Available for freelance opportunities
            and software engineering roles.
          </p>

        </div>

      </div>

      <!-- CONTACT FORM -->
      <div
        class="bg-slate-900 border border-slate-800 rounded-[40px] p-10"
      >

        <h3 class="text-3xl font-bold mb-8">
          Send a Message
        </h3>

        <form class="space-y-6">

          <!-- Name -->
          <div>
            <label class="block mb-3 text-slate-300">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              class="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500 transition"
            />
          </div>

          <!-- Email -->
          <div>
            <label class="block mb-3 text-slate-300">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              class="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500 transition"
            />
          </div>

          <!-- Subject -->
          <div>
            <label class="block mb-3 text-slate-300">
              Subject
            </label>

            <input
              type="text"
              placeholder="Enter subject"
              class="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500 transition"
            />
          </div>

          <!-- Message -->
          <div>
            <label class="block mb-3 text-slate-300">
              Message
            </label>

            <textarea
              rows="6"
              placeholder="Write your message..."
              class="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500 transition resize-none"
            ></textarea>
          </div>

          <!-- Button -->
          <button
            type="submit"
            class="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-2xl font-semibold transition duration-300 hover:scale-105"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>

  </div>

</section>
  `
})
export class ContactComponent {
  protected contactForm: FormGroup;
  protected isSubmitting = signal(false);
  protected submitSuccess = signal(false);
  protected submitError = signal('');

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  protected onWhatsAppClick(event: MouseEvent): void {
    event.preventDefault();
    window.open(
      'https://wa.me/9606472035?text=Hi%20Niraj,%20I%20would%20like%20to%20discuss%20about%20project%20delopment.',
      '_blank'
    );
  }

  protected onSubmitForm(): void {
    this.submitSuccess.set(false);
    this.submitError.set('');

    if (this.contactForm.invalid) {
      this.submitError.set('Please fill all fields correctly.');
      return;
    }

    this.isSubmitting.set(true);

    const formData = this.contactForm.value;

    // Format message for WhatsApp
    const whatsappMessage = `*New Contact Form Submission*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Subject:* ${formData.subject}\n\n` +
      `*Message:*\n${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Simulate processing, then send to WhatsApp
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.submitSuccess.set(true);

      // Reset form
      this.contactForm.reset();

      // Open WhatsApp with the message
      window.open(
        `https://wa.me/919606472035?text=${encodedMessage}`,
        '_blank'
      );

      // Hide success message after 5 seconds
      setTimeout(() => {
        this.submitSuccess.set(false);
      }, 5000);
    }, 800);
  }
}
