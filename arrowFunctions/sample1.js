'use strict'
var empList = [{name: 'a', sal: 1000}, {name: 'b', sal: 2000}]; 
// old way
//var salList = empList.map(function(e) { return e.sal;})

// new way
var salList = empList.map(e => e.sal);