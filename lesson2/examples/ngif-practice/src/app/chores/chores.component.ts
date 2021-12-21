import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['smack it up'];
   finishedChores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries', 'burn garbage'];

   targetImage = 'https://www.bing.com/th/id/OGC.5b29a8f91d149d935ac441e2aa5a7695?pid=1.7&rurl=https%3a%2f%2fmedia.tenor.com%2fimages%2f5b29a8f91d149d935ac441e2aa5a7695%2ftenor.gif&ehk=1VlBFac7JbO819QkjMKTWAdx2%2bL5TltnMVSKywc1ciI%3d';

   constructor() { }

   ngOnInit() {
   }

}
