$( document ).ready(function() {
	/* calculate next Wednesday */
	var day_offset = [3, 2, 1, 0, 6, 5, 4];
	var day = new Date().getDay();
	var myDate = new Date();
	myDate.setDate(myDate.getDate() + day_offset[day]);
	var str = "(" + (myDate.getMonth() + 1) + "/" + myDate.getDate() + ")";
	$('#wed').html(str);
	
	/* calculate the weekend */
	day_offset = [-1, -2, -3, -4, 2, 1, 0];
	day = new Date().getDay();
	myDate = new Date();
	myDate.setDate(myDate.getDate() + day_offset[day]);
	var str = "(" + (myDate.getMonth() + 1) + "/" + myDate.getDate() + ", ";
	myDate.setDate(myDate.getDate() + 1);
	var str = str + (myDate.getMonth() + 1) + "/" + myDate.getDate() + ")";
	$('#weekend').html(str);
});
function myFunction1() {
    var checkBox = $('#check1')[0];
	var coll = $('.row1');
    if (checkBox.checked == false){
		for(var i=0, len=coll.length; i<len; i++){
			coll[i].style["background-color"] = 'rgba(200, 200, 200, 0.5)';
			coll[i].disabled = true;
		}
    } else {
		for(var i=0, len=coll.length; i<len; i++){
			coll[i].style["background-color"] = 'white';
			coll[i].disabled = false;
		}
    }
}
function myFunction2() {
    var checkBox = $('#check2')[0];
	var coll = $('.row2');
	if (checkBox.checked == false){
		for(var i=0, len=coll.length; i<len; i++){
			coll[i].style["background-color"] = 'rgba(200, 200, 200, 0.5)';
			coll[i].disabled = true;
		}
	} else {
		for(var i=0, len=coll.length; i<len; i++){
			coll[i].style["background-color"] = 'white';
			coll[i].disabled = false;
		}
	}
}
function myFunction3() {
    var checkBox = $('#check3')[0];
	var coll = $('.row3');
	if (checkBox.checked == false){
		for(var i=0, len=coll.length; i<len; i++){
			coll[i].style["background-color"] = 'rgba(200, 200, 200, 0.5)';
			coll[i].disabled = true;
		}
	} else {
		for(var i=0, len=coll.length; i<len; i++){
			coll[i].style["background-color"] = 'white';
			coll[i].disabled = false;
		}
	}
}
function myFunction4() {
    var checkBox = $('#check4')[0];
	var coll = $('.row4');
	if (checkBox.checked == false){
		for(var i=0, len=coll.length; i<len; i++){
			coll[i].style["background-color"] = 'rgba(200, 200, 200, 0.5)';
			coll[i].disabled = true;
		}
	} else {
		for(var i=0, len=coll.length; i<len; i++){
			coll[i].style["background-color"] = 'white';
			coll[i].disabled = false;
		}
	}
}