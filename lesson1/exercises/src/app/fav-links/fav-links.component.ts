import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

    links=['http://www.google.com', 'http://www.heroforge.com', 'http://www.launchcode.com'];
    
  constructor() { }

  ngOnInit() {
  }

}
