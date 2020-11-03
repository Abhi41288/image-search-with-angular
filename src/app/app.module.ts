import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ImageService } from '../app/shared/image.service';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule( {
  declarations: [
    AppComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
} )
export class AppModule { }
