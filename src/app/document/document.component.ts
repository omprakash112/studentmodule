import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  productForm: FormGroup;
  selectedFile: File;
  submitted = false;

  imgFront;
  imgBack;
  // registerForm: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.productForm = this.fb.group({
      Name: ['', [Validators.required]],
      AdharcardImage: ['', [Validators.required]],
      PancardImage: ['', [Validators.required]],
      EducationalImage: ['', [Validators.required]]
    });
  }

  private onUpload(imageFor) {
    const fd = new FormData();
    fd.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.http.post('https://localhost:4200/products/upload', fd)
      .subscribe(res => imageFor === 'FRONT' ? this.imgFront = res : this.imgBack = res);
  }

  onFormSubmit() {
    const formData = {
      ...this.productForm.value,
      imgFront: this.imgFront,
      imgBack: this.imgBack
    };
    console.log('Form Data', formData);
  }

  onFileSelected(event, imageFor) {
    this.selectedFile = <File>event.target.files[0];
    this.onUpload(imageFor);
  }
  onupload() {
    this.productForm.reset();
    this.submitted = true;

    // stop the process here if form is invalid
    if (this.productForm.valid) {
      return;
    }

    alert('SUCCESS!!');
  }


}
