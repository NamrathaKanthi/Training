$(document).ready(function() {
			var arr = [1,2,3];
			for(var ictr=0;ictr<arr.length;ictr++) {
				$("#dispaly").append("<p>"+arr[ictr]+"</p>");
			}
			$("#btn").click(function() {
				var array = $("#demo").val();
				var newarray = array.split(","); 
				for(var ictr=0;ictr<newarray.length;ictr++) {
					var flag = true;
					for(j = 0;j<arr.length;j++) {
						if(arr[j] == newarray[ictr]) {
							flag = false;	
						}
					}
					if(flag) {
						$("#dispaly").append("<p>"+newarray[ictr]+"</p>");
					}
				}
			});
		});