import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { HeaderComponent } from './admin/layout/header/header.component';
import { MenuComponent } from './admin/layout/menu/menu.component';
import { AuthorsComponent } from './admin/authors/authors.component';
import { BooksComponent } from './admin/books/books.component';
import { BorrowersComponent } from './admin/borrowers/borrowers.component';
import { BranchesComponent } from './admin/branches/branches.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { DueDateComponent } from './admin/due-date/due-date.component';
import { PublishersComponent } from './admin/publishers/publishers.component';
import { BorrowerComponent } from './borrower/borrower.component';
import { CheckoutComponent } from './borrower/checkout/checkout.component';
import { ReturnComponent } from './borrower/return/return.component';
import { LibrarianComponent } from './librarian/librarian.component';
import { CopiesComponent } from './librarian/copies/copies.component';
import { LoginComponent } from './admin/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AdminComponent,
    LayoutComponent,
    HeaderComponent,
    MenuComponent,
    AuthorsComponent,
    BooksComponent,
    BorrowersComponent,
    BranchesComponent,
    DashboardComponent,
    DueDateComponent,
    PublishersComponent,
    BorrowerComponent,
    CheckoutComponent,
    ReturnComponent,
    LibrarianComponent,
    CopiesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }