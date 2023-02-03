import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
user:any
constructor(private route:Router){
 
  
}


ngOnInit(): void {
  this.user=JSON.parse(localStorage.getItem('user')||'')
}

  logout(){

    localStorage.removeItem('user')
    localStorage.removeItem('username')

    this.route.navigateByUrl('')
    
    

  }

  booked(){
    this.route.navigateByUrl('booked')
  }
}
