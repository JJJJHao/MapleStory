function calculateGO(){
	
	/* calculate the # of plays on weekend & others*/	
	var count1 = [4, 3, 2, 1, 7, 6, 5];
	var count2 = [3, 2, 1, 0, 6, 5, 4];
	var VIP_count1 = [1, 0, 0, 0, 2, 2, 2];
	var VIP_count2 = [0, 0, 0, 0, 2, 2, 1];
	var day = new Date().getDay();
	var countPlay;
	var countVIPPlay = 0;
	if($('#checkVIP')[0].checked){ // VIP
		if($('#checkToday')[0].checked){ // without today
			countPlay = count2[day] - VIP_count2[day];
			countVIPPlay = VIP_count2[day];
		}
		else{
			countPlay = count1[day] - VIP_count1[day];
			countVIPPlay = VIP_count1[day];
		}
	}
	else{
		if($('#checkToday')[0].checked) // without today
			countPlay = count2[day];
		else
			countPlay = count1[day];
	}
	/* calculate the # of fuwens to lv.20 into leftFuWen*/
	var stageChecked = [false, false, false, false];
	var leftFuWen = [-1, -1, -1, -1];
	if($('#check1')[0].checked){
		stageChecked[0] = true;
		leftFuWen[0] = checkLeft(1, $("[name=fuwen1_LEVEL]")[0].value, $("[name=fuwen1_GROWTH]")[0].value);
	}
	if($('#check2')[0].checked){
		stageChecked[1] = true;
		leftFuWen[1] = checkLeft(2, $("[name=fuwen2_LEVEL]")[0].value, $("[name=fuwen2_GROWTH]")[0].value);
	}
	if($('#check3')[0].checked){
		stageChecked[2] = true;
		leftFuWen[2] = checkLeft(3, $("[name=fuwen3_LEVEL]")[0].value, $("[name=fuwen3_GROWTH]")[0].value);
	}
	if($('#check4')[0].checked){
		stageChecked[3] = true;
		leftFuWen[3] = checkLeft(4, $("[name=fuwen4_LEVEL]")[0].value, $("[name=fuwen4_GROWTH]")[0].value);
	}
	/* check ERROR */
	for(var i = 0; i < 4; i++)
		if(leftFuWen[i] < -1){
			showMsg("錯誤!");
			return;
		}
	/* minus the # of fuWens we will get this week*/
	var minusNum = [0, 0, 0, 0];
	if(stageChecked[0]){
		minusNum[0] = minusLeft(1, $("[name=fuwen1_NUM]")[0].value, countPlay, countVIPPlay,  8, -1);
		leftFuWen[0] = leftFuWen[0] - minusNum[0];
	}
	if(stageChecked[1]){
		minusNum[1] = minusLeft(2, $("[name=fuwen2_NUM]")[0].value, countPlay, countVIPPlay, 15, -1);		
		leftFuWen[1] = leftFuWen[1] - minusNum[1];
	}
	if(stageChecked[2]){
		minusNum[2] = minusLeft(3, $("[name=fuwen3_NUM]")[0].value, countPlay, countVIPPlay, 999, $("[name=fuwen3_COIN]")[0].value);			
		leftFuWen[2] = leftFuWen[2] - minusNum[2];
	}
	if(stageChecked[3]){
		minusNum[3] = minusLeftStage4($("[name=fuwen4_NUM]")[0].value, $("[name=fuwen4_VIP]")[0].value, countPlay, countVIPPlay, $("[name=fuwen4_COIN]")[0].value);					
		leftFuWen[3] = leftFuWen[3] - minusNum[3];
	}
	/* check ERROR */
	for(var i = 0; i < 4; i++)
		if(minusNum[i] < 0){
			showMsg("錯誤!");
			return;
		}
	/* print leftFuWen*/
	/*for(var i = 0; i < 4; i++)
		if(stageChecked[i])
			alert("第"+(i+1)+"列 - 尚需符文："+leftFuWen[i]);*/
	
	/* calculating that which fuWen is the best choice*/
	var budget = Math.floor($("[name=budget]")[0].value/50);
	var answer = [0, 0, 0, 0];
	while(budget > 0){
		var target = argMax(leftFuWen);
		if(Math.max.apply(Math, leftFuWen) <= 0)
			break;
		else if(answer[target] == 20){
			leftFuWen[target] = -1;
			continue;
		}
		leftFuWen[target] = leftFuWen[target] - 1;
		answer[target] = answer[target] + 1;
		budget = budget - 1;
	}
	
	/* Answer string catting ... */
	if(stageChecked[0]){
		$('#AnsBlock1').html(answer[0]);
		$('#Ans1')[0].style.display = 'initial';
	}
	else
		$('#Ans1')[0].style.display = 'none';
	if(stageChecked[1]){
		$('#AnsBlock2').html(answer[1]);
		$('#Ans2')[0].style["display"] = 'initial';
	}
	else
		$('#Ans2')[0].style.display = 'none';
	if(stageChecked[2]){
		$('#AnsBlock3').html(answer[2]);
		$('#Ans3')[0].style["display"] = 'initial';
	}
	else
		$('#Ans3')[0].style.display = 'none';
	if(stageChecked[3]){
		$('#AnsBlock4').html(answer[3]);
		$('#Ans4')[0].style["display"] = 'initial';
	}
	else
		$('#Ans4')[0].style.display = 'none';

}
function checkLeft(row, level, growth){
	var levelnum = [12,15,20,27,36,47,60,75,92,111,132,155,180,207,236,267,300,335,372,0];
	if(level < 1 || level > 20){
		alert("第"+row+"列 符文等級填寫範圍錯誤!");
		return -2;
	}
	else if(levelnum[level-1] < growth && level !== "20"){
		alert("第"+row+"列 符文成長值填寫錯誤!");
		return -2;
	}
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
function minusLeft(rowID, num, playCount, VipPlayCount, upBound, coin){
	if(num > upBound){
		if(rowID > 4) rowID = 4;
		alert("第"+rowID+"列 取得數量填寫錯誤!");
		return -1;
	}
	num = parseInt(num);
	playCount = parseInt(playCount);
	VipPlayCount = parseInt(VipPlayCount);
	coin = parseInt(coin);
	
	/* Stage 1 & Stage 2 : only FuWen*/
	if(rowID <= 2)
		return (playCount+VipPlayCount)*num;
	/* Stage 3 : coins 30 to 1 FuWen with 1 bonus everyday*/
	/* Stage 3 weekend : instead of 3 plays, there are 5 plays when VIP weekend */ 
	else{
		var coinsNow = coin + num*3*playCount + num*5*VipPlayCount + playCount*30 + VipPlayCount*30;
		return Math.floor(coinsNow/30);
	}

}
function minusLeftStage4(num, numWeekend, playCount, VipPlayCount, coin){
	if(num > 30){
		alert("第4列平日取得硬幣數量 填寫錯誤!");
		return -1;
	}
	else if(numWeekend > 40){
		alert("第4列週末取得硬幣數量 填寫錯誤!");
		return -1;
	}
	num = parseInt(num);
	numWeekend = parseInt(numWeekend);	
	playCount = parseInt(playCount);
	VipPlayCount = parseInt(VipPlayCount);
	coin = parseInt(coin);
	var coinsNow = coin + num*playCount + numWeekend*VipPlayCount;
	return Math.floor(coinsNow/3);
}
function argMax(array) {
	return array.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1];
  }
function showMsg(msg){
	$('#ans').html(msg);
}