import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { MyBooksComponent } from './pages/my-books/my-books.component';
import { ManageBookComponent } from './pages/manage-book/manage-book.component';
import { BorrowBookListComponent } from './pages/borrow-book-list/borrow-book-list.component';
import { ReturnBooksComponent } from './pages/return-books/return-books.component';
import { authGuard } from 'src/app/services/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: BookListComponent,
        canActivate: [authGuard],
      },
      {
        path: 'my-books',
        component: MyBooksComponent,
        canActivate: [authGuard],
      },
      {
        path: 'my-borrowed-books',
        component: BorrowBookListComponent,
        canActivate: [authGuard],
      },
      {
        path: 'manage',
        component: ManageBookComponent,
        canActivate: [authGuard],
      },
      {
        path: 'manage/:bookId',
        component: ManageBookComponent,
        canActivate: [authGuard],
      },
      {
        path: 'return-books',
        component: ReturnBooksComponent,
        canActivate: [authGuard],
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
