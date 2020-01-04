import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


const apiUrl = 'http://localhost:3001/api';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }

  getAll(baseUrl: string): Observable<any> {
    return this.http.get<any>(apiUrl + '/' + baseUrl)
      .pipe(
        tap(_ => this.log('fetched Questions')),
        catchError(this.handleError('getQuestions', []))
      );
  }

  getId(baseUrl: string, id: any): Observable<any> {
    const url = `${apiUrl}/${baseUrl}/${id}`;
    return this.http.get<any>(url).pipe(
      tap(_ => console.log(`fetched  by id=${id}`)),
      catchError(this.handleError<any>(`getPost id=${id}`))
    );
  }

  addResponse(post: any): Observable<any> {
    return this.http.post<any>(apiUrl + '/response', post).pipe(
      tap((prod: any) => console.log(`added response w/ id=${post.id}`)),
      catchError(this.handleError<any>('addResponse'))
    );
  }

  updatePost(id: any, post: any): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, post).pipe(
      tap(_ => console.log(`updated post id=${id}`)),
      catchError(this.handleError<any>('updatePost'))
    );
  }

  deletePost(id: any): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<any>(url).pipe(
      tap(_ => console.log(`deleted post id=${id}`)),
      catchError(this.handleError<any>('deletePost'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}

