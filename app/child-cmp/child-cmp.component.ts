import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-child-cmp',
  template: `
      <div>
        <h1> this is child component - {{ uname }} </h1>
        <h2> this is child lastname - {{ ulname }}  </h2>
      </div>  
  
  
  `
  ,
  styles: [`
     div{
       background: powderblue;
     }
  `  ]   
})
export class ChildCmpComponent implements OnInit {

  @Input()
  uname!: string; 
  @Input()
  ulname!:string;


  constructor() { }

  
  
  ngOnInit(){
    
  }

}
