$(document).ready(function() {
	var t1, t2, t3;
	$("#sonchu").on('click',function(){

		t1 = parseFloat(team1_score1.value)*Math.PI + parseFloat(team1_score2.value)*Math.PI;
		t2 = parseFloat(team2_score1.value)*Math.PI + parseFloat(team2_score2.value)*Math.PI;
		t3 = parseFloat(team3_score1.value)*Math.PI + parseFloat(team3_score2.value)*Math.PI;
        $.post( 
	         "showpoint.php",
	         {teamname: "score1_1_t1"},
	         function(data) {
	         	$('#score1_1_t1').html(parseFloat(data).toFixed(3)+"*e");
	         	t1 = t1 + data*Math.E;
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score1_2_t1"},
	         function(data) {
	            $('#score1_2_t1').html(parseFloat(data).toFixed(3)+"*e");
	            t1 = t1 + data*Math.E;
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score1_1_t2"},
	         function(data) {
	            $('#score1_1_t2').html(parseFloat(data).toFixed(3)+"*e");
	            t2 = t2 + data*Math.E;
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score1_2_t2"},
	         function(data) {
	            $('#score1_2_t2').html(parseFloat(data).toFixed(3)+"*e");
	            t2 = t2 + data*Math.E;
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score1_1_t3"},
	         function(data) {
	            $('#score1_1_t3').html(parseFloat(data).toFixed(3)+"*e");
	            t3 = t3 + data*Math.E;
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score1_2_t3"},
	         function(data) {
	            $('#score1_2_t3').html(parseFloat(data).toFixed(3)+"*e");
	            t3 = t3 + data*Math.E;
	         }
	    );
      	setTimeout(go2,1500);
      });

	function go2()
	{
		$.post( 
	         "showpoint.php",
	         {teamname: "score2_1_t1"},
	         function(data) {
	         	$('#score2_1_t1').html(parseFloat(data).toFixed(3)+"*e");
	         	t1 = t1 + data*Math.E;
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score2_2_t1"},
	         function(data) {
	            $('#score2_2_t1').html(parseFloat(data).toFixed(3)+"*e");
	            t1 = t1 + data*Math.E;
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score2_1_t2"},
	         function(data) {
	            $('#score2_1_t2').html(parseFloat(data).toFixed(3)+"*e");
	            t2 = t2 + data*Math.E;
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score2_2_t2"},
	         function(data) {
	            $('#score2_2_t2').html(parseFloat(data).toFixed(3)+"*e");
	            t2 = t2 + data*Math.E;
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score2_1_t3"},
	         function(data) {
	            $('#score2_1_t3').html(parseFloat(data).toFixed(3)+"*e");
	            t3 = t3 + data*Math.E;
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score2_2_t3"},
	         function(data) {
	            $('#score2_2_t3').html(parseFloat(data).toFixed(3)+"*e");
	            t3 = t3 + data*Math.E;
	         }
	    );
	    
	    setTimeout(go3,1500);
	}
	function go3()
	{
		$.post( 
	         "showpoint.php",
	         {teamname: "score3_1_t1"},
	         function(data) {
	         	$('#score3_1_t1').html(parseFloat(data).toFixed(3)+"*e");
	         	t1 = t1 + data*Math.E;
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score3_2_t1"},
	         function(data) {
	            $('#score3_2_t1').html(parseFloat(data).toFixed(3)+"*e");
	            t1 = t1 + data*Math.E;
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score3_1_t2"},
	         function(data) {
	            $('#score3_1_t2').html(parseFloat(data).toFixed(3)+"*e");
	            t2 = t2 + data*Math.E;
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score3_2_t2"},
	         function(data) {
	            $('#score3_2_t2').html(parseFloat(data).toFixed(3)+"*e");
	            t2 = t2 + data*Math.E;
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score3_1_t3"},
	         function(data) {
	            $('#score3_1_t3').html(parseFloat(data).toFixed(3)+"*e");
	            t3 = t3 + data*Math.E;
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score3_2_t3"},
	         function(data) {
	            $('#score3_2_t3').html(parseFloat(data).toFixed(3)+"*e");
	            t3 = t3 + data*Math.E;
	         }
	    );
	    setTimeout(go4,1500);
	}
	function go4()
	{
		$.post( 
	         "showpoint.php",
	         {teamname: "score4_1_t1"},
	         function(data) {
	         	$('#score4_1_t1').html(parseFloat(data).toFixed(3)+"*e");
	         	t1 = t1 + data*Math.E;
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score4_2_t1"},
	         function(data) {
	            $('#score4_2_t1').html(parseFloat(data).toFixed(3)+"*e");
	            t1 = t1 + data*Math.E;
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score4_1_t2"},
	         function(data) {
	            $('#score4_1_t2').html(parseFloat(data).toFixed(3)+"*e");
	            t2 = t2 + data*Math.E;
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score4_2_t2"},
	         function(data) {
	            $('#score4_2_t2').html(parseFloat(data).toFixed(3)+"*e");
	            t2 = t2 + data*Math.E;
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score4_1_t3"},
	         function(data) {
	            $('#score4_1_t3').html(parseFloat(data).toFixed(3)+"*e");
	            t3 = t3 + data*Math.E;
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score4_2_t3"},
	         function(data) {
	            $('#score4_2_t3').html(parseFloat(data).toFixed(3)+"*e");
	            t3 = t3 + data*Math.E;
	         }
	    );
	    setTimeout(go5,1500);
	}
	function go5()
	{
		$.post( 
	         "showpoint.php",
	         {teamname: "score5_1_t1"},
	         function(data) {
	         	$('#score5_1_t1').html(parseFloat(data).toFixed(3)+"*e");
	         	t1 = t1 + data*Math.E;
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score5_2_t1"},
	         function(data) {
	            $('#score5_2_t1').html(parseFloat(data).toFixed(3)+"*e");
	            t1 = t1 + data*Math.E;
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score5_1_t2"},
	         function(data) {
	            $('#score5_1_t2').html(parseFloat(data).toFixed(3)+"*e");
	            t2 = t2 + data*Math.E;
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score5_2_t2"},
	         function(data) {
	            $('#score5_2_t2').html(parseFloat(data).toFixed(3)+"*e");
	            t2 = t2 + data*Math.E;
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score5_1_t3"},
	         function(data) {
	            $('#score5_1_t3').html(parseFloat(data).toFixed(3)+"*e");
	            t3 = t3 + data*Math.E;
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score5_2_t3"},
	         function(data) {
	            $('#score5_2_t3').html(parseFloat(data).toFixed(3)+"*e");
	            t3 = t3 + data*Math.E;
	         }
	    );

	    setTimeout(go6,1500);
	}
	function go6()
	{
		$.post( 
	         "showpoint.php",
	         {teamname: "score6_1_t1"},
	         function(data) {
	         	$('#score6_1_t1').html(parseFloat(data).toFixed(3)+"*e");
	         	t1 = t1 + data*Math.E;
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score6_2_t1"},
	         function(data) {
	            $('#score6_2_t1').html(parseFloat(data).toFixed(3)+"*e");
	            t1 = t1 + data*Math.E;
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score6_1_t2"},
	         function(data) {
	            $('#score6_1_t2').html(parseFloat(data).toFixed(3)+"*e");
	            t2 = t2 + data*Math.E;
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score6_2_t2"},
	         function(data) {
	            $('#score6_2_t2').html(parseFloat(data).toFixed(3)+"*e");
	            t2 = t2 + data*Math.E;
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score6_1_t3"},
	         function(data) {
	            $('#score6_1_t3').html(parseFloat(data).toFixed(3)+"*e");
	            t3 = t3 + data*Math.E;
	         }
	    );
	    $.post( 
	         "showpoint.php",
	         {teamname: "score6_2_t3"},
	         function(data) {
	            $('#score6_2_t3').html(parseFloat(data).toFixed(3)+"*e");
	            t3 = t3 + data*Math.E;
	         }
	    );
	    setTimeout(go7,1500);
	}
	function go7()
	{
		var lala1 = Math.random()*4;
		var lala2 = Math.random()*4; 
		var lala3 = Math.random()*4;
	    document.getElementById("rand1").innerHTML= lala1.toFixed(3)+"分";
	    document.getElementById("rand2").innerHTML= lala2.toFixed(3)+"分";
	    document.getElementById("rand3").innerHTML= lala3.toFixed(3)+"分";

	    t1 = lala1 + t1;
	    t2 = lala2 + t2;
	    t3 = lala3 + t3;
	    setTimeout(go8,5000);
	}
	function go8()
	{
		
		document.getElementById("total1").innerHTML= t1.toFixed(5)+"分";
	    
	    setTimeout(go9,5000);
	}
	function go9()
	{
		document.getElementById("total2").innerHTML= t2.toFixed(5)+"分";
	    
	    setTimeout(go10,5000);
	}
	function go10()
	{
		document.getElementById("total3").innerHTML= t3.toFixed(5)+"分";
	}
});