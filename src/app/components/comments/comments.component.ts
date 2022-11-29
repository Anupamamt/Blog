import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
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
