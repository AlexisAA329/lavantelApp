import { Component, Input, OnInit } from '@angular/core';
import { equipoModel } from '@core/models/equipo.model';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent implements OnInit {
  @Input() title: string = ''
  @Input() mode: 'small' | 'big' = 'big'
  @Input() data: Array<equipoModel> = []
  constructor() { }

  ngOnInit(): void {
  }

}
