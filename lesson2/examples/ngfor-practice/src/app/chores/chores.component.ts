import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries', 'Clean bathroom'];
   todoTitles = ["Yesterday's Chores", "Today's Chores", "Tomorrow's Chores",];

   myChores = [
      {title: "Yesterday's Chores", tasks:['Empty dishwasher', 'Start LaunchCode review', 'Buy groceries']},
      {title: "Today's Chores", tasks:['Load dishwasher', 'Finish Angular review', 'Buy forgotten groceries']},
      {title: "Tomorrow's Chores", tasks:['Empty dishwasher again', 'Play with CSS and HTML', 'Rest']}
   ];

   constructor() { }

   ngOnInit() {
   }

}
