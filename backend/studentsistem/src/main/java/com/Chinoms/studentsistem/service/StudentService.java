package com.Chinoms.studentsistem.service;

import com.Chinoms.studentsistem.model.Student;

import java.util.List;


public interface StudentService {

    public Student saveStudent (Student student);

    public List<Student> getAllStudent();
}


