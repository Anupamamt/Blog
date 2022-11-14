import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 imgurl=""
  constructor() { }

  ngOnInit(): void {
    this.imgurl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fillustration%2Fgoogle-icon.html&psig=AOvVaw39IEdgZcjWXyRYfGdB-aDa&ust=1668007109035000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJicluzwnvsCFQAAAAAdAAAAABAF"
  }

}
