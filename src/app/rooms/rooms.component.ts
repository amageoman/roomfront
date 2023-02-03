import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit{

booked:any=[]
  user:any;
  roomsdata:any

  constructor(private route:Router,private ds:DataService){
    
  
  }



  ngOnInit(): void {
    this.user=JSON.parse(localStorage.getItem('username')||'');
    
     
      this.filter('','')

      this.ds.roomsbooked().subscribe((data:any)=>{

        this.booked=data
       
      })
  
  }


  filter(dist:any,guest:any){

    this.ds.getrooms().subscribe((data:any)=>{

      this.roomsdata=data.filter((item:any)=>{
       return (item.distid==dist||dist=='')&&(item.beds==guest||guest=='')
      })})
  }

  
}
