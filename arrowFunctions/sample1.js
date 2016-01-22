'use strict'
var empList = [{name: 'a', sal: 1000}, {name: 'b', sal: 2000}]; 
var salList = empList.map(function(e) { return e.sal;})
var salList = empList.map(e => e.sal);