import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import {Book} from './book';
import { FormsModule,FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books:Book;
  myBooks:any;
  myModel:FormGroup;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBookList();
    this.myModel=new FormGroup({
      title: new FormControl('Title'),
      author: new FormControl('Author'),
      price: new FormControl('1000'),
      publisher:new FormControl('Publisher')
    });
  }

  getBookList() {
    this.bookService.getAllBooks().then((res) => {
      this.myBooks = res;
    }, (err) => {
      console.log(err);
    });
  }
onSubmit(){
  this.bookService.saveBook(this.myModel.value).then((res)=>{
    console.log("Success");
  },(err)=>{console.log(err)})
}

}