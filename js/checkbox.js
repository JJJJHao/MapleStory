function myFunction1() {
    var checkBox = document.getElementById('check1');
		var coll = document.getElementsByClassName('row1');
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
	var checkBox = document.getElementById('check2');
	var coll = document.getElementsByClassName('row2');
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
	var checkBox = document.getElementById('check3');
	var coll = document.getElementsByClassName('row3');
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
	var checkBox = document.getElementById('check4');
	var coll = document.getElementsByClassName('row4');
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