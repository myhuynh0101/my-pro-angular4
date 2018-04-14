import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { FormModules } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { environment } from './../environments/environment';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { HomepageComponent } from './listPages/homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    UsersComponent,
    UserComponent,
    UserListComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    // FormModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
