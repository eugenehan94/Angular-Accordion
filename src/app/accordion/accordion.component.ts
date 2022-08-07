import { Component, OnInit } from '@angular/core';
import { QUESTIONS, Questions } from '../../mock-data';
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  questions: Questions[] = QUESTIONS;
  show: boolean = false;
  selectedId!: number;

  constructor() { }

  ngOnInit(): void {
  }

  toggleShow(id:number){
    if (id === this.selectedId){
      this.show = !this.show
    }else if (id !== this.selectedId){
      this.selectedId = id
      this.show = true;
    }
  }

}
