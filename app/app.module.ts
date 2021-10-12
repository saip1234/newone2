import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildCmpComponent } from './child-cmp/child-cmp.component';
import { BindingComponent } from './binding/binding.component';


@NgModule({
  imports:[BrowserModule,
    AppRoutingModule,
    FormsModule],
  exports: [AppComponent] ,
  declarations: [
    AppComponent,
    ChildCmpComponent,
    BindingComponent
  

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
