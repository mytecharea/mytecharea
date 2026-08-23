import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../model/blog.model';


interface BlogResponse {
  success: boolean;
  count: number;
  data: Blog[];
}

interface BlogDetailResponse {
  success: boolean;
  data: Blog;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000/api/blogs';

 getBlogs(): Observable<BlogResponse> {
    return this.http.get<BlogResponse>(this.apiUrl);
  }
 getBlogBySlug(slug: string): Observable<BlogDetailResponse> {
  return this.http.get<BlogDetailResponse>(
    `${this.apiUrl}/${slug}`
  );

}
}