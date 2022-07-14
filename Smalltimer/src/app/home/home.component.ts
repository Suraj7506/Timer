import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  timeLeft: number = 60;
  interval:any;
  emet : any
  
  startTimer(){}
  ngOnInit(): void {
      this.interval = setInterval(() => {
        if(this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.timeLeft = 60;
        }
      },1000)
    
  
  setTimeout(()=>{
    this.emet = !this.emet
  },10000)



  }

 


}
