import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-blogdisplay',
  templateUrl: './blogdisplay.component.html',
  styleUrls: ['./blogdisplay.component.css']
})
export class BlogdisplayComponent implements OnInit {
blogs:any=[]
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.apiService.getBlog().subscribe(res=>{
      this.blogs=res
      console.log(res)
    })
  }

}
