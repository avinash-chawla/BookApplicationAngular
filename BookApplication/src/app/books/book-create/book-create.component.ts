import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from './../books.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Book } from './../book.model';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  private mode = "create";
  private bookId: string;
  book: Book

  constructor(private booksService: BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.mode = "edit";
        this.bookId = paramMap.get('id');
        this.booksService.getBook(this.bookId)
          .subscribe(res => {
            this.book = res;
          });
      } else {
        this.mode = "create";
        this.bookId = null;
      }
    })
  }

  onSave(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if (this.mode === "create") {
      this.booksService.postBook(form.value.title, form.value.author, form.value.price)
        .subscribe((res) => {
          this.router.navigate(['/list']);
        }, err => console.log(err));
    } else {
      this.booksService.updateBook(this.bookId, form.value.title, form.value.author, form.value.price)
        .subscribe(res => {
          this.router.navigate(['/list']);
        }, err => console.log(err));
    }
    form.resetForm();
  }
}
