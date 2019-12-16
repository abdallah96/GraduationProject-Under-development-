import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/shared/teacher.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private service: TeacherService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form !=null)
    form.resetForm();
    this.service.formData = {

      id:null,
      username:'',
      name:'',
      surname: '',
      email:'',
      password:'',
      confirmPassword:''
    }
  }
  onSubmit(form : NgForm){

    this.insertRecord(form);
  }
  insertRecord(form:NgForm){

    this.service.CreateTeacher(form.value).subscribe(res=>{
      this.resetForm(form);
      this.toastr.success('Teacher was created sucessfully'),
      err =>{
        console.log(err);
      }
      
    });
  }
} 