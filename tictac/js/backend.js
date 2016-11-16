	$(document).ready(function() {
		//console.log("hello");
		//$("#start game").click(function() {
			console.log("hello");
			var player1 = $("#player1").hasClass("active");
			var player2 = $("#player2").hasClass("active");
			console.log(player1);
			console.log(player2);
			if(player1) {
				console.log(player1);
				console.log("hello");
				$("#btn").click(function() {
						console.log("hi");
						$(".dispaly").append("X");
					});
					$("#btn1").click(function() {
						$(".dispaly1").append("X");
					});
					$("#btn2").click(function() {
						$(".dispaly2").append("X");
					});
					$("#btn3").click(function() {
						$(".dispaly3").append("X");
						$(".dispaly3").off("click");
					});
				$("#player1").removeClass("active");
				$("#player2").addClass("active");
					
			}
	
			else {
				console.log(player2);
				$("#player2").removeClass("active");
				$("#player1").addClass("active");
			
					$("#btn").click(function() {
					console.log("hi");
						$(".dispaly").append("O");
					});
					$("#btn1").click(function() {
						$(".dispaly1").append("O");
					});
					$("#btn2").click(function() {
						$(".dispaly2").append("O");
					});
					$("#btn3").click(function() {
						$(".dispaly3").append("O");
					});
			}

	//});
    });