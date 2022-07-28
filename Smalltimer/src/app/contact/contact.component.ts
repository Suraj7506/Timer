import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  timeLeft: number = 60;
  interval: any;


  pauseTimer() {
    clearInterval(this.interval);
  }

  ngOnInit(): void {
  }

}
