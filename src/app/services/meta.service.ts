import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  private titleService = inject(Title);
  private metaService = inject(Meta);

  setPageMeta(title: string, description: string, url: string) {
    this.titleService.setTitle(title);
    
    // Update description meta tag
    this.metaService.updateTag({
      name: 'description',
      content: description
    });

    // Update Open Graph tags
    this.metaService.updateTag({
      property: 'og:title',
      content: title
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: description
    });

    this.metaService.updateTag({
      property: 'og:url',
      content: url
    });

    // Update Twitter tags
    this.metaService.updateTag({
      name: 'twitter:title',
      content: title
    });

    this.metaService.updateTag({
      name: 'twitter:description',
      content: description
    });

    // Update canonical URL
    this.metaService.updateTag({
      rel: 'canonical',
      href: url
    });
  }

  setHomePageMeta() {
    this.setPageMeta(
      'MyTechArea - Professional Web Design & Development',
      'Modern, responsive web experiences and digital solutions. Professional UI design, front-end development, and brand landing pages.',
      'https://www.mytecharea.com/'
    );
  }

  setPortfolioPageMeta() {
    this.setPageMeta(
      'Portfolio - MyTechArea',
      'Explore our selected work showcasing design, development, and creative problem-solving.',
      'https://www.mytecharea.com/portfolio'
    );
  }

  setAboutPageMeta() {
    this.setPageMeta(
      'About Me - MyTechArea',
      'Learn more about my experience, skills, and approach to building professional digital experiences.',
      'https://www.mytecharea.com/about'
    );
  }

  setBlogPageMeta() {
    this.setPageMeta(
      'Blog - MyTechArea',
      'Read latest articles and insights about web design, development, and digital products.',
      'https://www.mytecharea.com/blog'
    );
  }

  setContactPageMeta() {
    this.setPageMeta(
      'Contact - MyTechArea',
      'Get in touch to discuss your next project or collaboration opportunity.',
      'https://www.mytecharea.com/contact'
    );
  }
}
