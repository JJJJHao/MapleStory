$(document).ready(function() {
	
	$("#sonchu3").on('click',function(){

		alert("分數已送出!");
        $.post( 
	         "modifypoint.php",
	         {bumen: bumen.value,
	          voteto: voteto.value,
	          score1: myscore1.value,
	          score2: myscore2.value},
	         function() {
	         	window.location.reload("");
	         }
	    );
	    
      });


	$("#sonchu2").on('click',function(){

		
        $.post( 
	         "showpoint.php",
	         {teamname: "score1_1_t1"},
	         function(data) {
	         	$('#score1_1_t1').html(parseFloat(data).toFixed(3)+"*e");
	         	
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score1_2_t1"},
	         function(data) {
	            $('#score1_2_t1').html(parseFloat(data).toFixed(3)+"*e");
	            
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score1_1_t2"},
	         function(data) {
	            $('#score1_1_t2').html(parseFloat(data).toFixed(3)+"*e");
	           
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score1_2_t2"},
	         function(data) {
	            $('#score1_2_t2').html(parseFloat(data).toFixed(3)+"*e");
	           
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score1_1_t3"},
	         function(data) {
	            $('#score1_1_t3').html(parseFloat(data).toFixed(3)+"*e");
	            
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score1_2_t3"},
	         function(data) {
	            $('#score1_2_t3').html(parseFloat(data).toFixed(3)+"*e");
	            
	         }
	    );
      	setTimeout(go2,0);
      });

	function go2()
	{
		$.post( 
	         "showpoint.php",
	         {teamname: "score2_1_t1"},
	         function(data) {
	         	$('#score2_1_t1').html(parseFloat(data).toFixed(3)+"*e");
	         	
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score2_2_t1"},
	         function(data) {
	            $('#score2_2_t1').html(parseFloat(data).toFixed(3)+"*e");
	            
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score2_1_t2"},
	         function(data) {
	            $('#score2_1_t2').html(parseFloat(data).toFixed(3)+"*e");
	           
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score2_2_t2"},
	         function(data) {
	            $('#score2_2_t2').html(parseFloat(data).toFixed(3)+"*e");
	            
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score2_1_t3"},
	         function(data) {
	            $('#score2_1_t3').html(parseFloat(data).toFixed(3)+"*e");
	            
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score2_2_t3"},
	         function(data) {
	            $('#score2_2_t3').html(parseFloat(data).toFixed(3)+"*e");
	           
	         }
	    );
	    
	    setTimeout(go3,0);
	}
	function go3()
	{
		$.post( 
	         "showpoint.php",
	         {teamname: "score3_1_t1"},
	         function(data) {
	         	$('#score3_1_t1').html(parseFloat(data).toFixed(3)+"*e");
	         	
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score3_2_t1"},
	         function(data) {
	            $('#score3_2_t1').html(parseFloat(data).toFixed(3)+"*e");
	            
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score3_1_t2"},
	         function(data) {
	            $('#score3_1_t2').html(parseFloat(data).toFixed(3)+"*e");
	           
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score3_2_t2"},
	         function(data) {
	            $('#score3_2_t2').html(parseFloat(data).toFixed(3)+"*e");
	            
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score3_1_t3"},
	         function(data) {
	            $('#score3_1_t3').html(parseFloat(data).toFixed(3)+"*e");
	            
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score3_2_t3"},
	         function(data) {
	            $('#score3_2_t3').html(parseFloat(data).toFixed(3)+"*e");
	            
	         }
	    );
	    setTimeout(go4,0);
	}
	function go4()
	{
		$.post( 
	         "showpoint.php",
	         {teamname: "score4_1_t1"},
	         function(data) {
	         	$('#score4_1_t1').html(parseFloat(data).toFixed(3)+"*e");
	         	
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score4_2_t1"},
	         function(data) {
	            $('#score4_2_t1').html(parseFloat(data).toFixed(3)+"*e");
	            
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score4_1_t2"},
	         function(data) {
	            $('#score4_1_t2').html(parseFloat(data).toFixed(3)+"*e");
	            
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score4_2_t2"},
	         function(data) {
	            $('#score4_2_t2').html(parseFloat(data).toFixed(3)+"*e");
	           
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score4_1_t3"},
	         function(data) {
	            $('#score4_1_t3').html(parseFloat(data).toFixed(3)+"*e");
	            
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score4_2_t3"},
	         function(data) {
	            $('#score4_2_t3').html(parseFloat(data).toFixed(3)+"*e");
	            
	         }
	    );
	    setTimeout(go5,0);
	}
	function go5()
	{
		$.post( 
	         "showpoint.php",
	         {teamname: "score5_1_t1"},
	         function(data) {
	         	$('#score5_1_t1').html(parseFloat(data).toFixed(3)+"*e");
	         	
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score5_2_t1"},
	         function(data) {
	            $('#score5_2_t1').html(parseFloat(data).toFixed(3)+"*e");
	           
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score5_1_t2"},
	         function(data) {
	            $('#score5_1_t2').html(parseFloat(data).toFixed(3)+"*e");
	            
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score5_2_t2"},
	         function(data) {
	            $('#score5_2_t2').html(parseFloat(data).toFixed(3)+"*e");
	            
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score5_1_t3"},
	         function(data) {
	            $('#score5_1_t3').html(parseFloat(data).toFixed(3)+"*e");
	           
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score5_2_t3"},
	         function(data) {
	            $('#score5_2_t3').html(parseFloat(data).toFixed(3)+"*e");
	            
	         }
	    );

	    setTimeout(go6,0);
	}
	function go6()
	{
		$.post( 
	         "showpoint.php",
	         {teamname: "score6_1_t1"},
	         function(data) {
	         	$('#score6_1_t1').html(parseFloat(data).toFixed(3)+"*e");
	         	
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score6_2_t1"},
	         function(data) {
	            $('#score6_2_t1').html(parseFloat(data).toFixed(3)+"*e");
	            
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score6_1_t2"},
	         function(data) {
	            $('#score6_1_t2').html(parseFloat(data).toFixed(3)+"*e");
	            
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score6_2_t2"},
	         function(data) {
	            $('#score6_2_t2').html(parseFloat(data).toFixed(3)+"*e");
	            
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score6_1_t3"},
	         function(data) {
	            $('#score6_1_t3').html(parseFloat(data).toFixed(3)+"*e");
	            
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score6_2_t3"},
	         function(data) {
	            $('#score6_2_t3').html(parseFloat(data).toFixed(3)+"*e");
	            
	         }
	    );
	}
	
});