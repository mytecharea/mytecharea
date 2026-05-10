import { Component, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contact-page',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  template: `
    <div class="page-container">
      <section class="section contact-section">
        <div class="section-header">
          <p class="section-label">Contact</p>
          <h2>Let's build something exceptional together.</h2>
        </div>
        <p>Reach out to discuss your next project, collaboration, or full website refresh.</p>
        
        <div class="contact-content">
          <!-- Quick Actions -->
          <div class="quick-actions">
            <h3>Quick Contact</h3>
            <div class="contact-buttons">
              <a href="mailto:mytecharea.dev@gmail.com" class="btn btn-primary">
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Email Me
              </a>
              <a href="https://wa.me/9606472035?text=Hi%20Niraj,%20I%20would%20like%20to%20discuss%20about%20project%20delopment." class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer" (click)="onWhatsAppClick($event)">
                <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp Me
              </a>
              <a href="tel:+919606472035" class="btn btn-call">
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2A19.86 19.86 0 012 5.18 2 2 0 014 3h3a2 2 0 012 1.72 12.05 12.05 0 00.7 3.19 2 2 0 01-.45 2.11L8.09 10.91a16 16 0 007 7l1.92-1.92a2 2 0 012.11-.45 12.05 12.05 0 003.19.7A2 2 0 0122 16.92z"/>
                </svg>
                Call Me
              </a>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="form-container">
            <h3>Or send me a message</h3>
            <form [formGroup]="contactForm" (ngSubmit)="onSubmitForm()">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" formControlName="name" placeholder="Your name" />
              </div>

              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" formControlName="email" placeholder="your@email.com" />
              </div>

              <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" id="subject" formControlName="subject" placeholder="Project inquiry, collaboration, etc." />
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" formControlName="message" placeholder="Tell me about your project or idea..." rows="5"></textarea>
              </div>

              <button type="submit" class="btn btn-submit" [disabled]="contactForm.invalid || isSubmitting()">
                <span *ngIf="!isSubmitting()">Send Message</span>
                <span *ngIf="isSubmitting()">Sending...</span>
              </button>
            </form>

            <div class="form-message success" *ngIf="submitSuccess()">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
              <p>Thank you! Your message has been sent successfully.</p>
            </div>

            <div class="form-message error" *ngIf="submitError()">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
              </svg>
              <p>{{ submitError() }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      .page-container {
        background: #f8fafc;
        color: #0f172a;
        min-height: calc(100vh - 84px);
        font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      }

      .section {
        padding: 4rem 2rem;
      }

      .contact-section {
        border-radius: 1.5rem;
        background: #ffffff;
        border: 1px solid #e2e8f0;
      }

      .section-header {
        max-width: 48rem;
        margin: 0 auto 2rem;
      }

      .section-label {
        margin: 0 0 0.75rem;
        color: #2563eb;
        font-size: 0.85rem;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        font-weight: 700;
      }

      .section-header h2 {
        margin: 0;
        font-size: clamp(2rem, 3vw, 2.75rem);
        line-height: 1.1;
      }

      .contact-section p {
        max-width: 36rem;
        margin: 0 auto 3rem;
        color: #475569;
      }

      .contact-content {
        max-width: 48rem;
        margin: 0 auto;
      }

      .quick-actions {
        margin-bottom: 3rem;
      }

      .quick-actions h3 {
        margin: 0 0 1.5rem;
        font-size: 1.25rem;
        color: #0f172a;
      }

      .contact-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
      }

      .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 0.95rem 1.75rem;
        border-radius: 999px;
        font-weight: 600;
        text-decoration: none;
        transition: all 0.3s ease;
        border: none;
        cursor: pointer;
        font-size: 0.95rem;
      }

      .btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
      }

      .btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
      }

      .btn-primary {
        background: #1d4ed8;
        color: #ffffff;
      }

      .btn-whatsapp {
        background: #25d366;
        color: #ffffff;
      }

      .btn-whatsapp:hover {
        background: #128c7e;
      }

      .btn-call {
        background: #0f766e;
        color: #ffffff;
      }

      .btn-call:hover {
        background: #064e3b;
      }

      .btn-submit {
        background: #1d4ed8;
        color: #ffffff;
        width: 100%;
        margin-top: 1.5rem;
      }

      .btn-submit:hover:not(:disabled) {
        background: #1e40af;
      }

      .btn-icon {
        width: 1.25rem;
        height: 1.25rem;
        flex-shrink: 0;
      }

      .form-container {
        background: #f8fafc;
        border-radius: 1rem;
        padding: 2rem;
        border: 1px solid #e2e8f0;
      }

      .form-container h3 {
        margin: 0 0 1.5rem;
        font-size: 1.25rem;
        color: #0f172a;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
      }

      .form-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .form-group label {
        font-weight: 600;
        color: #0f172a;
        font-size: 0.95rem;
      }

      .form-group input,
      .form-group textarea {
        padding: 0.75rem 1rem;
        border: 1px solid #cbd5e1;
        border-radius: 0.5rem;
        font-family: inherit;
        font-size: 0.95rem;
        color: #0f172a;
        background: #ffffff;
        transition: all 0.3s ease;
      }

      .form-group input:focus,
      .form-group textarea:focus {
        outline: none;
        border-color: #2563eb;
        box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
      }

      .form-group textarea {
        resize: vertical;
        min-height: 120px;
      }

      .form-message {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem 1.25rem;
        border-radius: 0.75rem;
        margin-top: 1.5rem;
      }

      .form-message svg {
        width: 1.5rem;
        height: 1.5rem;
        flex-shrink: 0;
      }

      .form-message p {
        margin: 0;
        font-weight: 500;
      }

      .form-message.success {
        background: #ecfdf5;
        border: 1px solid #a7f3d0;
        color: #0f766e;
      }

      .form-message.error {
        background: #fef2f2;
        border: 1px solid #fecaca;
        color: #7f1d1d;
      }

      @media (max-width: 768px) {
        .section {
          padding: 2rem 1rem;
        }

        .contact-buttons {
          flex-direction: column;
          align-items: center;
        }

        .btn {
          width: 100%;
          max-width: 280px;
        }

        .form-container {
          padding: 1.5rem;
        }
      }
    `
  ]
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

    // Simulate sending email (in real app, call backend API)
    setTimeout(() => {
      // Simulate success
      this.isSubmitting.set(false);
      this.submitSuccess.set(true);

      // Reset form
      this.contactForm.reset();

      // Hide success message after 5 seconds
      setTimeout(() => {
        this.submitSuccess.set(false);
      }, 5000);

      // TODO: In production, replace this with actual email service call:
      // this.emailService.sendContactForm(formData).subscribe(
      //   () => {
      //     this.isSubmitting.set(false);
      //     this.submitSuccess.set(true);
      //     this.contactForm.reset();
      //   },
      //   (error) => {
      //     this.isSubmitting.set(false);
      //     this.submitError.set('Failed to send message. Please try again.');
      //   }
      // );
    }, 1500);
  }
}
