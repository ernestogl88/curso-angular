import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() propiedad_uno: string;
  @Input() propiedad_dos: string;

  constructor() { }

  ngOnInit() {
  }

}
