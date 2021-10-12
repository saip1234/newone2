import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  pageTitle:string = "data binding in angular";
  imageurl:string= "asset/images/header.png";
  userfname:string= " "
  users:any[]=[
    {id:101,name:'john',city:'newark'},
    {id:102,name:'james',city:'chicago'},
    {id:103,name:'alex',city:'exton'},

  ];
  constructor() { }

  ngOnInit(): void {
  }

  changetitle(){
    this.pageTitle="event binding";
  }

}
