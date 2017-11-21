import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-allcars',
  templateUrl: './allcars.component.html',
  styleUrls: ['./allcars.component.css']
})
export class AllcarsComponent implements OnInit {
  allcars: Observable<any[]>; 
  constructor(private db: AngularFireDatabase) { 
   }

  ngOnInit() {
    this.allcars = this.getCars("/cars");
  }

  getCars(listPath) : Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

}
