/**
 * Created by maoyanhui on 2018/4/25.
 */

function display() {
    var count = 0;
    count = blank(count);
    count = singleSelect(count);
    count = multiplySelect(count);
    count = judge(count);
    count = shortQuestions(count);
    alert("这次考试您获得"+count+"分");
}
function blank(count) {
    var firstBlankAnswer = document.getElementById("firstBlankTest").value;
    var secondBlankAnswer = document.getElementById("secondBlankTest").value;
    var thirdBlankAnswer = document.getElementById("thirdBlankTest").value;
    var fourthBlankAnswer = document.getElementById("fourthBlankTest").value;
    if(firstBlankAnswer == "统一建模语言"){
        count += 5;
    }
    if(secondBlankAnswer == "封装性"){
        count += 5;
    }
    if(thirdBlankAnswer == "继承性"){
        count += 5;
    }
    if(fourthBlankAnswer == "多态性"){
        count += 5;
    }
    return count;
}
function singleSelect(count) {
    var singleSelectOne = document.getElementById("singleSelectOne").one;
    for(let i = 0;i<singleSelectOne.length;i++){
        if(singleSelectOne[i].checked){
            var answerOne = singleSelectOne[i].id;
        }
    }
    if(answerOne == 'firstSelectTestTwo'){
        count += 10;
    }
    var singleSelectTwo = document.getElementById("singleSelectTwo").two;
    for (let i = 0;i<singleSelectTwo.length;i++){
        if(singleSelectTwo[i].checked){
            var answerTwo = singleSelectTwo[i].id;
        }
    }
    if(answerTwo == 'secondSelectTestOne'){
        count += 10;
    }
    return count;
}
function multiplySelect(count) {
    var multiplySelcetOne = document.getElementById("multiplySelectOne").one;
    var answerOne = [];
    for(let i = 0;i<multiplySelcetOne.length;i++){
        if(multiplySelcetOne[i].checked){
            answerOne.push(multiplySelcetOne[i].id);
        }
    }
    if(answerOne.length == 3){
        if(answerOne[0] == 'thirdSelectTestOne'&&answerOne[1] == 'thirdSelectTestTwo'&&
        answerOne[2] == 'thirdSelectTestFour'){
            count += 10;
        }
    }
    var multiplySelcetTwo = document.getElementById("multiplySelectTwo").two;
    var answerTwo = [];
    for(let i = 0;i<multiplySelcetTwo.length;i++){
        if(multiplySelcetTwo[i].checked){
            answerTwo.push(multiplySelcetTwo[i].id);
        }
    }
    if(answerTwo.length == 3){
        if(answerTwo[0] == 'fourthSelectTestOne'&&answerTwo[1] == 'fourthSelectTestTwo'&&
            answerTwo[2] == 'fourthSelectTestThree'){
            count += 10;
        }
    }
    return count;
}
function judge(count) {
    var judgeOne = document.getElementById("judgeOne").checkOne;
    for(let i = 0;i<judgeOne.length;i++){
        if(judgeOne[i].checked){
            var answerOne = judgeOne[i].id;
        }
    }
    if(answerOne == 'firstJudgeTestTwo'){
        count += 10;
    }
    var judgeTwo = document.getElementById("judgeTwo").checkTwo;
    for (let i = 0;i<judgeTwo.length;i++){
        if(judgeTwo[i].checked){
            var answerTwo = judgeTwo[i].id;
        }
    }
    if(answerTwo == 'secondJudgeTestOne'){
        count += 10;
    }
    return count;
}
function shortQuestions(count) {
    var shortQuestion = document.getElementById("shortQuestions").value;
    if(shortQuestion == "模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的" +
        "一种表达形式，可以是物理实体；可以是某种图形；或者是一种数学表达式"){
        count += 20;
    }
    return count;
}

    




