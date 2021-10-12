import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    div{
      background:gray;

    }
  `]
      
})
export class AppComponent {
  username:string="john"
  userlname:string="doe"

  
  ngOnInit(){
    
  }




}

