import { Component , OnInit} from '@angular/core';
import { ServeService } from './serve.service';
import { Router } from '@angular/router';
// import {  ViewChild ,ElementRef , AfterViewInit} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers: [ServeService]
})
export class AppComponent implements OnInit{
  title = 'app';
   constructor(private data:ServeService,private router:Router){}
  ngOnInit() {
    // document.getElementById("body").style.backgroundImage="url('../../assets/background.jpg')";
    // document.getElementById("body").style.backgroundSize="contain";
    // document.getElementById("body").style.backgroundRepeat="no-repeat";
    // document.getElementById("body").style.paddingTop="0px";
    // document.body.style.webkitBackgroundSize = "cover ";
    // document.getElementById("body").style.backgroundPosition="center";
  }
  username;password;
  post={
    "user_name":"",
    "user_pass":""
  }
  ChangeColor(par){
   
  switch(par.target.id) { 
   case '1': { 
       document.getElementById("1").style.color="#32CD32";
       document.getElementById("2").style.color="#000";
       document.getElementById("3").style.color="#000";
       document.getElementById("4").style.color="#000";
       document.getElementById("5").style.color="#000";
       document.getElementById("6").style.color="#000";
      break; 
   } 
   case '2': { 
       document.getElementById("1").style.color="#000";
       document.getElementById("2").style.color="#32CD32";
       document.getElementById("3").style.color="#000";
       document.getElementById("4").style.color="#000";
       document.getElementById("5").style.color="#000";
       document.getElementById("6").style.color="#000";
             break; 
   } 
   case '3':{
       document.getElementById("1").style.color="#000"; 
       document.getElementById("2").style.color="#000";
       document.getElementById("3").style.color="#32CD32";
       document.getElementById("4").style.color="#000";
       document.getElementById("5").style.color="#000";
       document.getElementById("6").style.color="#000";
             break; 
   }
   case '4':{
       document.getElementById("1").style.color="#000"; 
       document.getElementById("2").style.color="#000";
       document.getElementById("3").style.color="#000";
       document.getElementById("4").style.color="#32CD32";
       document.getElementById("5").style.color="#000";
       document.getElementById("6").style.color="#000";
             break; 

   }
     case '5':{
       document.getElementById("1").style.color="#000"; 
       document.getElementById("2").style.color="#000";
       document.getElementById("3").style.color="#000";
       document.getElementById("4").style.color="#000";
       document.getElementById("5").style.color="#32CD32";
       document.getElementById("6").style.color="#000";
             break; 

   }
    case '6':{
       document.getElementById("1").style.color="#000"; 
       document.getElementById("2").style.color="#000";
       document.getElementById("3").style.color="#000";
       document.getElementById("4").style.color="#000";
       document.getElementById("5").style.color="#000";
       document.getElementById("6").style.color="#32CD32";
             break; 

   }
   default: { 
       document.getElementById("1").style.color="#000"; 
       document.getElementById("2").style.color="#000";
       document.getElementById("3").style.color="#000";
       document.getElementById("4").style.color="#000";
       document.getElementById("5").style.color="#000";
       document.getElementById("6").style.color="#000";
      break; 
   } 
}






  }
 check(){
  document.getElementById('id01').style.display='block'
} 
check2(){
  document.getElementById('id02').style.display='block'
} abc;
postdata( )
{
    this.post.user_name=this.username;
    this.post.user_pass=this.password;
     this.data.postup(this.post).subscribe(
       (data)=>this.abc=data
     )


}




}
