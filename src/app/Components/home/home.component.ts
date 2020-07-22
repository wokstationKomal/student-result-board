import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/Service/student.service';
import { Student } from 'src/app/Class/student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  studentList: Student[];

  totalMarksList: number[] = [];
  maxValue: number;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getData().subscribe((data: Student[]) => {
      this.studentList = this.sortByName(data); //store sorted data
      // console.log(this.studentList);
      
      //adition of marks
      for(let i=0; i<this.studentList.length; i++){
        this.studentList[i].marksList = this.sum(this.studentList[i].marks);
        this.totalMarksList.push(this.studentList[i].marksList);
      }  

      //max mark of student
      this.maxValue = Math.max(...this.totalMarksList); 
    })
  }

  sum(obj) {
    return Object.keys(obj).reduce((sum,key)=>sum+parseFloat(obj[key]||0),0);
  }

  //sort by student name
  sortByName(studentData: Student[]){
    return studentData.sort((a: Student,b: Student) => {
      return a.name.localeCompare(b.name);
    })
  }

}
