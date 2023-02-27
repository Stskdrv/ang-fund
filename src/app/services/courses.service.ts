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
    return this.http.get<any>(`${this.baseUrl}`);
  }

  createCourse(course: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, course);
  }

  editCourse(course: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${course.id}`, course);
  }

  getCourse(courseId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${courseId}`);
  }

  deleteCourse(courseId: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${courseId}`);
  }
}
