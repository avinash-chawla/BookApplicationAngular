import { Component, OnInit } from '@angular/core';
import { BookService } from './../books.service';
import { Book } from './../book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: any[];

  constructor(private booksService: BookService) { }

  ngOnInit(): void {
    this.refreshBooks();
  }

  refreshBooks() {
    this.booksService.getBooks()
      .subscribe((res) => {
        this.books = res;
      }, (err) => console.log(err));
  };

  onDelete(book: Book) {
    if (confirm("Are you sure you want to delete this data") === true) {
      this.booksService.deleteBook(book._id)
        .subscribe(res => {
          this.refreshBooks();
        }, (err) => console.log(err));
    }
  }
}
