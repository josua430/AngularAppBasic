import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MundosComponent } from './mundos/mundos.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';

import { DataService } from './data.service';

const routes: Route[] = [
{path: '', component: MundosComponent},
{path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MundosComponent,
    UserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
