import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';
import { error } from 'util';
import { NgForm } from '@angular/forms';

@Component( {
  selector: 'image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
} )
export class ImageListComponent implements OnInit {

  images: any;
  searchQuery: string;
  imagefound: boolean = false;
  searching: boolean = false;
  constructor( private iservice: ImageService ) { }

  handlesuccess( data ) {
    this.imagefound = true;
    this.images = data.hits;
    console.log( this.images = data.hits );
  }

  handleError( error: any ) {
    console.log( error );
  }

  searchimage( query: string ) {
    this.searching = true;
    return this.iservice.getImage( query ).subscribe(
      data => this.handlesuccess( data ),
      error => this.handleError( error ),
      () => this.searching = false,

    )
  }

  ngOnInit() {
  }

}
