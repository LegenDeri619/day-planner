var taskObj = {
        task9am: ("task1", "task2", "task3"),
        task10am: ("task1", "task2", "task3"),
        task11am: (""),
        task12pm: (""),
        task1pm: (""),
        task2pm: (""),
        task3pm: (""),
        task4pm: (""),
        task5pm: ("")
}
var field9amDiv = $("#field9am");
var field10mDiv = $("#field10am");
var field11amDiv = $("#field11am");
var field12pmDiv = $("#field12pm");
var field1pmDiv = $("#field1pm");
var field2pmDiv = $("#field2pm");
var field3pmDiv = $("#field3pm");
var field4pmDiv = $("#field4pm");
var field5pmDiv = $("#field5pm");


$(document).ready(function() {

    var currentDate = $(".date");
    currentDate.append.moment().format('LL');
    console.log(moment().format('LL'));

    function initializePlanner() {
        $("#field9am, #field10am, #field11am, #field12pm, #field1pm, #field2pm, #field3pm, #field4pm, #field5pm").empty();
     
        $.each(taskObj.task9am, function(i, task) {
            field9amDiv.append("<div>" + task + "</div>");
          });
        
        $.each(taskObj.task10am, function(i, task) {
            field10amDiv.append("<div>" + task + "</div>");
          });
    
        $.each(taskObj.task11am, function(i, task) {
            field12pmDiv.append("<div>" + task + "</div>");
          });
    
        $.each(taskObj.task12pm, function(i, task) {
            field1pmDiv.append("<div>" + task + "</div>");
          });
    
        $.each(taskObj.task1pm, function(i, task) {
            field2pmDiv.append("<div>" + task + "</div>");
          });
    
        $.each(taskObj.task2pm, function(i, task) {
            field3pmDiv.append("<div>" + task + "</div>");
          });
    
        $.each(taskObj.task3pm, function(i, task) {
            field4pmDiv.append("<div>" + task + "</div>");
          });
        
        $.each(taskObj.task4pm, function(i, task) {
            field2pmDiv.append("<div>" + task + "</div>");
          });
        
        $.each(taskObj.task5pm, function(i, task) {
            field2pmDiv.append("<div>" + task + "</div>");
          });
    };
    initializePlanner();


})