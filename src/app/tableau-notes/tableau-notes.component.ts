import { Component, ElementRef } from '@angular/core';
import { ApiconnectService } from '../apiconnect.service';


@Component({
  selector: 'app-tableau-notes',
  templateUrl: './tableau-notes.component.html',
  styleUrls: ['./tableau-notes.component.css']
})
export class TableauNotesComponent {


  constructor(
    private el: ElementRef,
    private ApiconnectService: ApiconnectService
    ) { }

    datas:any
    

  ngOnInit() {

    this.ApiconnectService.getAll().subscribe(data => {
      console.log(data);
    });

    this.ApiconnectService.getAll().subscribe(data => {
      this.datas = data;
    });
  }

  changeColor(){
    this.el.nativeElement.style.backgroundColor = "red";
  }


}
