(function() {
  'use strict';

  const app = angular.module('class-creator');

  app.controller('createClassController', function() {

    this.school = {
      class_count: 0,
      student_count: 0,
      classes: []
    };

    this.createClass = function() {
      this.school.classes.push({
        class_name: this.class_name,
        teacher_name: this.teacher_name,
        student_in_class_count: 0,
        students: []
      })
      this.school.class_count++;
      this.class_name = '';
      this.teacher_name = '';
    }

    this.createStudent = function() {
      this.school.classes[this.class_index].students.push({
        student_name: this.student_name,
        student_grade: 'A'
      })
      this.school.classes[this.class_index].student_in_class_count = this.school.classes[this.class_index].students.length;

      this.student_name = '';
      this.student_grade = '';
    }
  });
}());
