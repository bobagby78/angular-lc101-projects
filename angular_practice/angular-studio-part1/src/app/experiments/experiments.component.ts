import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments=["Liftoff and Ascent", "Exit atmosphere (but just barely)", "Float, weightless, for 3 minutes", "Descent and touchdown"];

  constructor() { }

  ngOnInit() {
  }

}
