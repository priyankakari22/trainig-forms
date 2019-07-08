import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormtService } from './formt.service';
import { HttpClientModule } from '@angular/common/http';
import { FormRService } from './form-r.service';
import { DetailsComponent } from './details/details.component';
import { DetailstComponent } from './detailst/detailst.component';
import { RouterModule, Routes } from '@angular/router';





@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DetailsComponent,
    DetailstComponent,
    
    
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    ReactiveFormsModule,
    FormsModule ,
    HttpClientModule,
    
  ],
  providers: [FormtService,FormRService],
  bootstrap: [AppComponent]
})
export class AppModule { }
