import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

export interface Syllabus {
  id: number;
  name: string;
}


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  AngularSyllabus: boolean;
  MongoDBSyllabus: boolean;
  JavascriptSyllabus: boolean;
  showingbuttons: boolean = true;
  TrackSyllabus: boolean;
  // selectedTrack = []
  TrackSyllabus1: boolean;


  Applycourse() {

  }
  showcourse() {
    this.AngularSyllabus = true;
    this.showingbuttons = false;
    this.JavascriptSyllabus = false;
  }
  MongoDBcourse() {
    this.AngularSyllabus = false;
    this.showingbuttons = false;
    this.JavascriptSyllabus = false;
    this.MongoDBSyllabus = true;
  }
  Javascriptcourse(){
    this.AngularSyllabus = false;
    this.showingbuttons = false;
    this.JavascriptSyllabus = true;
    this.MongoDBSyllabus = false;
  }

  Applycourse3() {
    // this.MongoDBSyllabus = true;
    this.AngularSyllabus = false;
    this.showingbuttons = false;
    this.TrackSyllabus = false;
    this.JavascriptSyllabus = true;
    //confirm("are you ");
  }
  Trackcourse() {
    this.AngularSyllabus = false;
    this.TrackSyllabus = true;
    this.showingbuttons = false;
    this.MongoDBSyllabus = false;
    this.TrackSyllabus1 = true;

  }
  form: FormGroup;
  SyllabussData: Syllabus[] = [
    { id: 0, name: 'Chapter 1 :- Node and NPM' },
    { id: 1, name: 'Chapter 2 :- Running first app & Angulr CLI' },
    { id: 2, name: 'Chapter 3 :- VS Code editor' },
    { id: 4, name: 'Chapter 4 :- Angular File naming Convention' },
    { id: 5, name: 'Chapter 5 :- Chapter 5 :- CLI project folder structure' },
    { id: 6, name: 'Chapter 6 :- The config JSON files ' },
    { id: 7, name: 'Chapter 7 :- ng serve vs ng build' },
    { id: 8, name: 'Chapter 8 :- Angular the binding framework' },
    { id: 9, name: 'Chapter 9 :- Component and Modules' },
    { id: 10, name: 'Chapter 10 :- Expression , Decorators and TemplateURL' },
    { id: 11, name: 'Chapter 11 :- Declaration and BootStrap in Modules' },
    { id: 12, name: 'Chapter 12 :- The main.ts file for module startup' },
    { id: 13, name: 'Chapter 13 :- Index.html and the selector tag' },
    { id: 14, name: 'Chapter 15 :- Webpack :- Packaging and deploying' },
    { id: 15, name: 'Chapter 16 :- Vendor.js and Runtime.jse' },
    { id: 16, name: 'Chapter 17 :- Creating Customer UI' },
    { id: 17, name: 'Chapter 18 :- Creating Customer Model' },

  ];

  MongoData: Syllabus[] = [
    { id: 0, name: 'Chapter 1 :-  Understanding the basic concepts of a Database' },
    { id: 1, name: 'Chapter 2 :- Database categories: What is NoSQL? Why NoSQL? Benefit over RDBMS ' },
    { id: 2, name: 'Chapter 3 :- Types of NoSQL Database, and NoSQL vs. SQL Comparison, ACID & Base Property' },
    { id: 4, name: 'Chapter 4 :- CAP Theorem, implementing NoSQL and what is MongoDB? ' },
    { id: 5, name: 'Chapter 5 :-  Overview of MongoDB, Design Goals for MongoDB Server and Database, MongoDB tools' },
    { id: 6, name: 'Chapter 6 :- Understanding the following: Collection, Documents and Key/ Values, etc.,' },
    { id: 7, name: 'Chapter 7 :- Introduction to JSON and BSON documents' },
    { id: 8, name: 'Chapter 8 :-  Environment setup (live Hands-on) and using various MongoDB tools available in the MongoDB Package' },
    { id: 9, name: 'Chapter 9 :- Case study discussion' },
  ];

  Javascript: Syllabus[] = [
    { id: 0, name: 'Chapter 1 :-  Introduction to JavaScript' },
    { id: 1, name: 'Chapter 2 :- What is JavaScript? Complete Introduction with Hello World! Example ' },
    { id: 2, name: 'Chapter 3 :- Javascript Variable: Declare, Assign a Value with Example' },
    { id: 4, name: 'Chapter 4 :- JavaScript Array Methods: Create with Example ' },
    { id: 5, name: 'Chapter 5 :-  For, While and Do While LOOP in JavaScript (with Example)' },
    { id: 6, name: 'Chapter 6 :- JavaScript Conditional Statements: IF, Else, Else IF (Example),' },
    { id: 7, name: 'Chapter 7 :- Javascript Define & Call Functions with Example' },
    { id: 8, name: 'Chapter 8 :-  Cookies in JavaScript: Set, Get & Delete Example' },
    { id: 9, name: 'Chapter 9 :-JavaScript DOM Tutorial with Example' },
    { id: 10, name: 'Chapter 10 :-Object Oriented JavaScript (OOJS) Tutorial with Example' },
    { id: 11, name: 'Chapter 11 :-Internal & External JavaScript: Learn with Example' },
    { id: 12, name: 'Chapter 12 :-TypeScript Tutorial: Types, Arrays, Enum, Classes, Interfaces' },
    { id: 13, name: 'Chapter 13 :-Typescript vs JavaScript: What is the Difference' },
    { id: 14, name: 'Chapter 15 :-Practical Code Examples using JavaScript' },

  ]

  constructor(private fb: FormBuilder) {

  }

  // for check box logic
  onChange(name: string, isChecked: boolean) {
    const Syllabuss = (this.form.controls.name as FormArray);



    if (isChecked) {
      Syllabuss.push(new FormControl(name));
    }

    else {
      const index = Syllabuss.controls.findIndex(x => x.value === name);

      Syllabuss.removeAt(index);

    }
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: this.fb.array([])
    });
  }

  submit() {
    console.log(this.form.value.name);
    this.JavascriptSyllabus = false;
    // this.selectedTrack = this.form.value.name;
    // console.log('selected track', this.selectedTrack);



    this.AngularSyllabus = false;
    this.showingbuttons = true;
    this.TrackSyllabus = false;
    this.MongoDBSyllabus = false;


  }

}
