import { Component, OnInit } from '@angular/core';
// import {ThemePalette} from '@angular/material/core';
// import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
public load: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
