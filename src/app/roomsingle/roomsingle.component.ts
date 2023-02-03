import { Component, OnInit } from '@angular/core';
// import { FormBuilder ,Validator} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-roomsingle',
  templateUrl: './roomsingle.component.html',
  styleUrls: ['./roomsingle.component.css']
})
export class RoomsingleComponent implements OnInit {


  roomno: any;
  room:any=[]
  // single:any=[]


  
  constructor(private ar: ActivatedRoute, private ds:DataService,private route:Router) {


   
      
     
   

    this.ar.params.subscribe((data: any) => {

      this.roomno = data.rid;
          
    })
  }



  ngOnInit(): void {

 
   this.ds.getsingleroom(this.roomno).subscribe((data:any)=>{
    this.room=data
  
   })

  }

  Book(roomid:any,checkin:any,checkout:any,location:any,price:any,name:any){

    var user=JSON.parse(localStorage.getItem('user')||'')

    this.ds.Book(user,roomid,checkin,checkout,location,price,name).subscribe((item:any)=>{
    

    
    })

    this.route.navigateByUrl('room')

// window.location.reload()

  }




}
