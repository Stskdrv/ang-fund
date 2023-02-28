import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BASE_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private baseUrl = BASE_URL;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/coueses/all`);
  }

  createCourse(
    title: string,
    description: string,
    duration: number,
    authors: string[]): Observable<any> {
    const options = {
      title,
      description,
      duration,
      authors
    };
    return this.http.post<any>(`${this.baseUrl}/courses/add`, options);
  }

  editCourse(
    courseId: string,
    title: string,
    description: string,
    duration: number,
    authors: string[]): Observable<any> {
      const options = {
        title,
        description,
        duration,
        authors
      };
    return this.http.put<any>(`${this.baseUrl}courses/${courseId}`, options);
  }

  getCourse(courseId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}courses/${courseId}`);
  }

  deleteCourse(courseId: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}courses//${courseId}`);
  }
}
