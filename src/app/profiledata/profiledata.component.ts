import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-profiledata',
  templateUrl: './profiledata.component.html',
  styleUrls: ['./profiledata.component.css']
})
export class ProfiledataComponent implements OnInit {
  StudentForm: FormGroup;

  listcourse: boolean = true;
  updatecourse: boolean = false;
  addcourse: boolean = false;
  ViewStudent: boolean = false;
  popup: boolean = false;

  indexarr: string;
  name: string;
  myJSON: any;

  fees: string[];
  durations: string[];
  submitted: Number = 3;
  edit: boolean = false;
  url: string | ArrayBuffer = '';

  obj: any;
  constructor(private formBuilder: FormBuilder) { }

  studentdata = [{
    // image: 'assets\img\images.jpg',
    Name: 'Amol',
    Subject: 'Angular2',
    Batch: '3',
    StudentID: '11',
    syllabus: 'Angular Service'
  }, {
    // image: 'assets\img\images.jpg',
    Name: 'Mahesh',
    Subject: 'Angular4',
    Batch: '6 ',
    StudentID: '12',
    syllabus: 'Angular Service'
  }, {
    // image: 'assets\img\images.jpg',
    Name: 'Aman',
    Subject: 'Angular5',
    Batch: '5',
    StudentID: '13',
    syllabus: 'Angular Service'
  },
  {
    // image: 'assets\img\images.jpg',
    Name: 'Ankur',
    Subject: 'Angular6',
    Batch: '9',
    StudentID: '14',
    syllabus: 'Angular Service'
  },
  {
    // image: 'assets\img\images.jpg',
    Name: 'Rahul',
    Subject: 'Angular7',
    Batch: '10',
    StudentID: '15',
    syllabus: 'Angular Service'
  },
  {
    // image: 'assets\img\images.jpg',
    Name: 'Ram',
    Subject: 'Angular8',
    Batch: '1',
    StudentID: '16',
    syllabus: 'Angular Service'
  }
  ];

  ngOnInit() {
    //  this.model = new Hero(18, 'Dr IQ', 'Really Smart', 'Chuck Overstreet', 'iq@superhero.com');

    // this.fees = ['5000 Rs', '10,000 Rs',
    //   '20,000 Rs'];
    // this.durations = ['3 Months', '6 Months',
    //   '9 Months'];


    this.StudentForm = this.formBuilder.group({
      // image: ['', [Validators.required]],
      Name: ['', [Validators.required]],
      Subject: ['', [Validators.required]],
      Batch: ['', Validators.required],
      StudentID: ['', Validators.required],
      syllabus: ['', Validators.required]
    });
  }

  // addNewCourse() {
  //   this.listcourse = false;
  //   this.updatecourse = false;
  //   this.addcourse = true;
  //   this.StudentForm.reset();
  //this.courses.push(this.courseForm.value);

  // }

  pushdata() {
    this.studentdata.push(this.StudentForm.value);
  }
  submitCourse() {
    this.pushdata();
    this.listcourse = true;
    this.updatecourse = false;
    this.addcourse = false;
    console.log(this.studentdata);
  }

  cancel() {
    this.listcourse = true;
    this.updatecourse = false;
    this.addcourse = false;
  }

  updateCourse() {
    this.listcourse = true;
    this.updatecourse = false;
    this.addcourse = false;
    this.indexarr = localStorage.getItem("indexVal");
    console.log(this.indexarr);

    this.studentdata.splice(Number(this.indexarr), 1, this.StudentForm.value);
    console.log(this.studentdata);
    localStorage.removeItem("indexVal")
  }

  editCourse(form, i) {
    console.log(form);
    console.log("am in edit");
    this.listcourse = false;
    this.updatecourse = true;
    this.addcourse = false;
    // form.image = 'https://www.w3schools.com/howto/img_avatar.png';
    // this.StudentForm.controls['image'].setValue(form.image);
    this.StudentForm.controls['Name'].setValue(form.Name);
    this.StudentForm.controls['Subject'].setValue(form.Subject);
    console.log(form.Subject);

    this.StudentForm.controls['Batch'].setValue(form.Batch);
    this.StudentForm.controls['StudentID'].setValue(form.StudentID);
    this.StudentForm.controls['syllabus'].setValue(form.syllabus);
    // this.pushdata();
    //this.courses.splice(i,1,this.courseForm.value);
    localStorage.setItem("indexVal", i);
    console.log(this.studentdata);

    //this.courses=this.courseForm.value;
    // this.pushdata();

  }

  viewprofile(student) {
    this.listcourse = true;
    this.addcourse = false;
    this.ViewStudent = true;

    // alert("Name:" + student.Name + "Student ID: " + student.StudentID + 
    // " Subject: " + student.Subject + " Batch:" + student.Batch)

  }
  viewObj: any;

  viewprofile1(stud) {

    this.viewObj = stud;
  }


}
