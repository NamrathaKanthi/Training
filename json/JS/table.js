$(document).ready(function() {
		console.log("hello");
		$("#btn").click(function(){
		console.log("hi");
			
			var	EmployeeList = {
				employeedetails :[
				{
				  "ENO" :"1",
				  "EName" : "Namratha",
				  "Experience" : "1yrs",
				  "designation" : "Employee",
				  "Dateofjoining" : "07-11-2016"
				},
				{
				  
				  "ENO" :"2",
				  "EName" : "Raghavendra",
				  "Experience" : "2yrs",
				  "designation" : "Employee",
				  "Dateofjoining" : "07-11-2016"
				},
				{
				  "ENO" :"3",
				  "EName" : "Nagalatha",
				  "Experience" : "1yrs",
				  "designation" : "Employee",
				  "Dateofjoining" : "07-11-2016"
				},
				{
				   "ENO" :"4",
				  "EName" : "Gnaneshwari",
				  "Experience" : "2yrs",
				  "designation" : "Employee",
				  "Dateofjoining" : "07-11-2016"
				}
				]}
				console.log(EmployeeList);
				
				for(var ictr=0;ictr<EmployeeList.employeedetails.length;ictr++){
				$("#no1").append("<p>"+EmployeeList.employeedetails[ictr].ENO+"</p>");
				$("#no2").append("<p>"+EmployeeList.employeedetails[ictr].EName+"</p>");
				$("#no3").append("<p>"+EmployeeList.employeedetails[ictr].Experience+"</p>");
				$("#no4").append("<p>"+EmployeeList.employeedetails[ictr].designation+"</p>");
				$("#no5").append("<p>"+EmployeeList.employeedetails[ictr].Dateofjoining+"</p>");
				}
    });
    });