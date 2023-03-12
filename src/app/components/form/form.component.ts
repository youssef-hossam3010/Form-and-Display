import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() myevent = new EventEmitter();
  name:string="";
  age:any;
 

  get ageTrue (){
    return +this.age>=20 && +this.age<=40 ;
  }

 add(){
  if(this.name.length<3){
return console.log("error ocurred")
  }
  if(this.age<20 || this.age>40){
    return console.log("error ocurred")
      }
  this.myevent.emit({name:this.name,age:this.age})
 }

}



