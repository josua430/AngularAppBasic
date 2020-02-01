import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IPublicacion } from '../publicacion';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  listado: IPublicacion [];

  constructor(private data: DataService) { 
    this.data.getdata().subscribe( data=>{
      this.listado = data;
    })
  }

  ngOnInit() {
  }

}
