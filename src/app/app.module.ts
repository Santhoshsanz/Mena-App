import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BookService} from './book.service';
import { AppComponent } from './app.component';
import { Routes,RouterModule } from '@angular/router';
import {ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BookComponent} from './book/book.component';
import { HashLocationStrategy,PathLocationStrategy, LocationStrategy } from '@angular/common';
import { IndexComponent } from './index/index.component';
const appRoutes:Routes = [
  {path:'',redirectTo:'index' ,pathMatch:"full"},
  { path: 'index', component: IndexComponent },
  { path: 'books', component: BookComponent },
  {path:'**',redirectTo:'' ,pathMatch:"full"}
];
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BookService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
