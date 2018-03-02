function calculateGO(){
	/* stage 1 calculate */
	var stageChecked = [false, false, false, false];
	var leftFuWen = [0, 0, 0, 0];
	if($('#check1')[0].checked){
		stageChecked[0] = true;
		leftFuWen[0] = checkLeft(1, $("[name=fuwen1_LEVEL]")[0].value, $("[name=fuwen1_GROWTH]")[0].value);
	}
	if($('#check2')[0].checked){
		stageChecked[1] = true;
		leftFuWen[1] = checkLeft(2, $("[name=fuwen2_LEVEL]")[0].value, $("[name=fuwen2_GROWTH]")[0].value);
	}
	
}
function checkLeft(row, level, growth){
	var levelnum = [12,15,20,27,36,47,60,75,92,111,132,155,180,207,236,267,300,335,372,0];
	if(level < 1 || level > 20)
		alert("第"+row+"列 符文等級填寫範圍錯誤!");
	else if(levelnum[level-1] < growth && level !== "20")
		alert("第"+row+"列 符文成長值填寫錯誤!");
	var ans = 0;
	for(var i = 20; i > 0; i--){
		if(i == level){
			ans += levelnum[i-1] - growth;
			break;
		}
		else
			ans += levelnum[i-1];
	}
	return ans;
}