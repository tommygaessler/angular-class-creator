(function() {
  'use strict';

  const app = angular.module('class-creator');

  app.filter('grades', function() {
    return function(grade) {
      if (grade < 0 || grade <= 1) {
        return 'F';
      } else if (grade > 1 && grade <= 2) {
        return 'D';
      } else if (grade > 2 && grade <= 3) {
        return 'C';
      } else if (grade > 3 && grade <= 4) {
        return 'B';
      } else if (grade > 4) {
        return 'A';
      }
    }
  });

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
        class_average: 0,
        student_in_class_count: 0,
        students: []
      })
      this.school.class_count++;
      this.class_name = '';
      this.teacher_name = '';
    }

    this.createStudent = function() {
      var total = 0;
      var average = 0;

      this.school.classes[this.class_index].students.push({
        student_name: this.student_name,
        student_grade: 5
      })

      this.school.classes[this.class_index].students.forEach(function(grade) {
        average += grade.student_grade;
      });

      average /= this.school.classes[this.class_index].students.length;

      this.school.classes[this.class_index].class_average = average;

      this.school.classes[this.class_index].student_in_class_count = this.school.classes[this.class_index].students.length;

      this.school.classes.forEach(function(student) {
        total += student.student_in_class_count;
      })

      this.school.student_count = total;

      this.student_name = '';
      this.student_grade = '';
    }

    this.calculate_average_grade = function() {
      this.class_average = this.school.classes[this.average_grade_index].class_average;
    }

    this.lowerGrade = function($index_class, $index_student) {
      var average = 0;
      this.school.classes[$index_class].students[$index_student].student_grade--;
      this.school.classes[this.class_index].students.forEach(function(grade) {
        average += grade.student_grade;
      });

      average /= this.school.classes[this.class_index].students.length;

      this.school.classes[this.class_index].class_average = average;
    }

    this.raiseGrade = function($index_class, $index_student) {
      var average = 0;
      console.log($index_class, $index_student);
      this.school.classes[$index_class].students[$index_student].student_grade++;
      this.school.classes[this.class_index].students.forEach(function(grade) {
        average += grade.student_grade;
      });

      average /= this.school.classes[this.class_index].students.length;

      this.school.classes[this.class_index].class_average = average;
    }
  });
}());
