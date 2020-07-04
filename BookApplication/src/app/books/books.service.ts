import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  apiURL = "http://localhost:5000/api/books";

  getBooks() {
    return this.http.get<any>(this.apiURL);
  }

  getBook(id: string) {
    return this.http.get<Book>(this.apiURL + "/" + id);
  }

  postBook(title: string, author: string, price: string) {
    const book = { title, author, price };
    return this.http.post<Book>(this.apiURL, book);
  }

  updateBook(_id: string, title: string, author: string, price: string) {
    const book = { _id, title, author, price };
    return this.http.put<Book>(this.apiURL + "/" + _id, book);
  }

  deleteBook(id: string) {
    return this.http.delete<Book>(this.apiURL + "/" + id);
  }
}
