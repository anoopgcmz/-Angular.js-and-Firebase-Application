import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AllcarsComponent } from './allcars/allcars.component';
import { CardetailsComponent } from './cardetails/cardetails.component';
import { AddcarComponent } from './addcar/addcar.component';
import { EditcarComponent } from './editcar/editcar.component';
import { DeletecarComponent } from './deletecar/deletecar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

//material Design
import { MatButtonModule } from '@angular/material';

//firebase
import { AngularFirestore } from 'angularfire2/firestore';

//Routes
import { RouterModule,Routes } from '@angular/router';
import { Component } from '@angular/core/src/metadata/directives'; 
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import  { AngularFireDatabaseModule } from 'angularfire2/database';

const appRoutes:Routes = [
  {path:'', component: HomeComponent},
  {path:'cars', component:AllcarsComponent},
  {path:'cardetails/:id', component:CardetailsComponent},
  {path:'addcar', component:AddcarComponent},
  {path:'editcar/:id', component:EditcarComponent},
  {path:'deletecar/:id', component:DeletecarComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllcarsComponent,
    CardetailsComponent,
    AddcarComponent,
    EditcarComponent,
    DeletecarComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
