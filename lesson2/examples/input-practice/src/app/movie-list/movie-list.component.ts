import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }

   addMovie(newMovie){
      if(!this.movies.includes(newMovie)){
         this.movies.push(newMovie);
      }
   }

   removeMovie(title){
      if(this.movies.includes(title)){
         this.movies.splice(this.movies.indexOf(title));
      }
   }

}