package com.Chinoms.studentsistem.service;

import com.Chinoms.studentsistem.model.Student;
import com.Chinoms.studentsistem.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements  StudentService{

    @Autowired
    StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student) {

        return studentRepository.save(student);

    }

    @Override
    public List<Student> getAllStudent() {

        return studentRepository.findAll();

    }
}
