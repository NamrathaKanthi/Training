//defining angular module
var app = angular.module("myApp",[]);
//defining directive	
	app.directive('fileReader', function() {
	  return {
		scope: {
		  fileReader:"="
		},
		link: function(scope, element) {
		   element.bind('change', function(changeEvent) {
			var files = changeEvent.target.files;
			if (files.length) {
			  var r = new FileReader();
			  r.onload = function(e) {
				  var contents = e.target.result;
				  scope.$apply(function () {
					scope.fileReader = contents;
				  });
			  };
			  r.readAsText(files[0]);
			}
		  });
		}
	  };
	});
	//defining controller for converting files and adding employees
	app.controller('mainCtrl',function($scope,converttojson,$rootScope) {
		//converting csv to json
		$scope.convertingtoJSON = function(){
			
			var importjson = converttojson.convertCsvToJson($scope.fileContent);
			console.log($scope.fileContent);
			$rootScope.EmployeeList = importjson;
			console.log($rootScope.EmployeeList);
				
			}
			
			//adding employees to table
		$scope.addemployee = function() {
			$scope.showdetails = true;
			$scope.number="";
			$scope.name = "";
			$scope.experience="";
			$scope.designation="";
			$scope.dob="";
			//$rootScope.EmployeeList=[];
				
		}
		//saving employee details
		$scope.save = function() {
			//checking the conditionality
			if(($scope.number!= "" )&&($scope.name != "")&&($scope.experience != "")&&($scope.designation !="")&&($scope.dob != "")) {
				//if condition true enters into datalist
			$rootScope.EmployeeList.push({'ENO':$scope.number,'EName':$scope.name,'Experience':$scope.experience,'designation':$scope.designation,'Dob':$scope.dob});
			alert("contact added successfully");
			$scope.number="";
			$scope.name = "";
			$scope.experience="";
			$scope.designation="";
			$scope.dob="";
			console.log($rootScope.EmployeeList);
			}
			//if condition is false displays alert
			else {
				alert("fields are missing");
			}
		}
		//for modified data functionality
		$scope.modify = function(tableData){

			$scope.modifyField = true;
			$scope.viewField = true;
		};
			
			//for updating the data
			
		$scope.update = function(tableData){
			$scope.modifyField = false;
			$scope.viewField = false;
		};
		
		//for deleting the data
		
		$scope.deletedata = function() {
			for(var i=0;i<$rootScopescope.EmployeeList.length;i++){
				if($rootScopescope.EmployeeList[i].ENO == ENO){
					$rootScopescope.EmployeeList.splice(i,1)
				}
			}
		}
		//converting the file to csv
		$scope.ConvertToCSV = function(objArray) {
            var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
            var str = '';
            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ','
                    line = line +array[i][index];
                }
                str = str + line + '\r\n';
            }
            return str;	
			console.log($scope.EmployeeList);
        }	
		//it exports the file to csv
		$scope.opencsv = function(){
			console.log($scope.EmployeeList);
            var jsonObject = JSON.stringify($scope.EmployeeList);
            $scope.myJson = jsonObject;
            $scope.myCsv = $scope.ConvertToCSV(jsonObject);
			var csv = $scope.myCsv;
			console.log(csv);
			var saving = document.createElement('a');
			f = document.createEvent('MouseEvents'),
			saving.href = 'data:attachment/csv;charset=utf-8,' + encodeURIComponent(csv);
			saving.download = 'Converted.csv';
			f.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
			saving.dispatchEvent(f);
			console.log($scope.EmployeeList);
		}
	});
	//defining service for converting csv to json
	app.service("converttojson",function() {
		this.convertCsvToJson = function(csv) {
			//splits each new line into a line array
			var lines=csv.split("\n");

			var result = [];

			var headers=['ENO','EName','Experience','designation','Dob']

			for(var i=0;i<lines.length-1;i++){
				var obj = {};
				var string=lines[i].split(",");
				for(var j=0;j<headers.length;j++){
					obj[headers[j]] = string[j];
				}
				result.push(obj);
			}
		return result;
		}
		
	});
	
	
	
	
					
				
	
	