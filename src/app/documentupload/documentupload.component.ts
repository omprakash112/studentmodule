import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-documentupload',
  templateUrl: './documentupload.component.html',
  styleUrls: ['./documentupload.component.css']
})
export class DocumentuploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  @Input() name: string;

}
