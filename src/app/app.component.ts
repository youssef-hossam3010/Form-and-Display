import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project3';


  students:{name:string, age:any}[] = [];
  
  AddData(data:{name:string, age:any}){
this.students.push(data)
  
  }
 
}
