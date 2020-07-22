import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from 'src/app/Service/student.service';
import { CustomValidators } from 'src/app/custom-validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private studentService: StudentService) { }

  get Name(){
    return this.registrationForm.get('name');
  }

  get LastName(){
    return this.registrationForm.get('lastName');
  }

  get StudentClass(){
    return this.registrationForm.get('studentClass');
  }

  get YOP(){
    return this.registrationForm.get('yearOfPassing');
  }

  get Percentage(){
    return this.registrationForm.get('percentage');
  }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required,  Validators.maxLength(20), Validators.pattern(/[aA-zZ'-]$/)]],
      lastName: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/[aA-zZ'-]$/)]],
      studentClass: ['', [Validators.required, Validators.pattern(/[aA-zZ0-9'-]$/)]],
      yearOfPassing: ['', [Validators.required, Validators.pattern(/[0-9'-]$/), CustomValidators.year]],
      percentage: ['', [Validators.required, Validators.pattern(/^[1-9][0-9]?$|^100$/)]]
    });
  }

  onSubmit(){
    // console.log(this.registrationForm.value);
    this.studentService.postData(this.registrationForm.value).subscribe();
  }

}
