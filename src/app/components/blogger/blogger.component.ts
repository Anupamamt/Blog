import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogger',
  templateUrl: './blogger.component.html',
  styleUrls: ['./blogger.component.css']
})
export class BloggerComponent implements OnInit {
  noOfFollowers=100;
  isFollowing="Follow";
  btnColor="primary"
  constructor() { }

  ngOnInit(): void {
  }
  follow(event:any){
    this.noOfFollowers+=1;
    this.isFollowing="Following"
    this.btnColor="success"
    event.target.disabled=true;
 }
}
