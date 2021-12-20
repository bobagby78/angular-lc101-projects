import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Bitchin\' Images!!!';
  image1 = 'https://static.wikia.nocookie.net/star-wars-outcasts/images/c/cd/Old_Jedi_Order.png';
  image2 = 'https://animeandthings.com/wp-content/uploads/2018/07/hufflepuff.png';
  image3 = 'https://insidepulse.com/wp-content/uploads/2019/10/Guardians-of-the-Galaxy-logo-symbol.png';

  constructor() { }

  ngOnInit() {
  }

}