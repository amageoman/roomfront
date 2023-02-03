import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-booked',
  templateUrl: './booked.component.html',
  styleUrls: ['./booked.component.css']
})
export class BookedComponent implements OnInit {
user:any
  roomdetails:any=[]
  constructor(private ds:DataService){}

  ngOnInit(): void {
    this.ds.roomdetails().subscribe((result:any)=>{
      this.roomdetails=result
    })

    this.user=JSON.parse(localStorage.getItem('user')||'')
  }

  delete(index:any){
    this.ds.delete(index).subscribe((data:any)=>{
      alert(data)
      window.location.reload()
    })
  }
}
