import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {

  roomsdata:any

  constructor(private http:HttpClient) {
    
   
  }

  ngOnInit(): void {}
   
   
    

    
    
  



  login(email:any,password:any){

    const body={
      email,password
    }
   return this.http.post("http://localhost:3000/login",body)
  }



  register(email:any,username:any,password:any){
const body={

  email,username,password
}


    return this.http.post("http://localhost:3000/register",body)
  }






getrooms(){

    return this.http.get("http://localhost:3000/getrooms")


}

getsingleroom(roomno:any){
  return this.http.get('http://localhost:3000/getsingleroom/'+roomno)
}




Book(user:any,roomid:any,checkin:any,checkout:any,location:any,price:any,name:any){

  const body={
    user,roomid,checkin,checkout,location,price,name
  }

 return this.http.post("http://localhost:3000/book",body)
}


roomsbooked(){

  return this.http.get("http://localhost:3000/roomsbooked")
}



roomdetails(){
  var email=JSON.parse(localStorage.getItem('user' )||"")
  const body={
    email
  }

  return this.http.post("http://localhost:3000/roomdetails",body)
}




delete(index:any){

  var email=JSON.parse(localStorage.getItem('user')||'')
const body={
  email,
  index
}

  return this.http.patch('http://localhost:3000/deleteroom',body)
}



}
