package com.Chinoms.studentsistem.controller;


import com.Chinoms.studentsistem.model.Student;
import com.Chinoms.studentsistem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/student")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @CrossOrigin
    @PostMapping("/add")
    public String add(@RequestBody Student student){

        studentService.saveStudent(student);

        return "Se añadió un nuevo estudiante";
    }

    @CrossOrigin
    @GetMapping("/all")
    public List<Student> getAll (){

        return studentService.getAllStudent();

    }



}