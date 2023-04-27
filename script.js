// 유저는 숫자를 입력할 수 있다  => user_input
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 작으면 up! 크면 down! => result_area
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자와 일치하면 성공 -> 종료  => result_area
// 유저의 게임기회는 총 5번  => count
// 게임이 종료되면 버튼은 비활성화  => play_button
// 리셋버튼을 누르면 게임은 초기화  => reset_button
// 유저가 1~100 범위 밖의 숫자를 입력하면 경고메세지  =>  result_area
// 유저가 이미 입력한 값을 또 입력하면 경고메세지  =>  result_area

let computer_num = 0;
let user_input = document.getElementById("user_input");
let result_area = document.getElementById("result_area");
let play_button = document.getElementById("play_button");
let reset_button = document.getElementById("reset_button");
let count_area = document.getElementById("count");
let chance = 5;  
let game_over = false;
let history=[];

play_button.addEventListener("click",play);
// play() 라고 하면 함수가 실행되어 버림 / 우리가 하고 싶은건 매개변수로 함수를 넘기는 것이고 click 이벤트가 발생되었을 때만 play함수를 매개변수로 넘기는 것 뿐.
// 함수도 매개변수처럼 넘길 수 있다.
// Event 종류 : click, mouseover, mouseout, focus, keypress, load, change 등

reset_button.addEventListener("click", reset);
user_input.addEventListener("focus", function(){
    user_input.value = "";
});  // 함수에 들어갈 내용이 별로 없으면 매개변수 자리에서 바로 함수 만들어서 사용 가능

function random_product(){
    computer_num = Math.floor(Math.random()*100)+1;
}


function play(){
    let user_input_f = user_input.value;
    // user_input은 그냥 태그일 뿐임 / user_input 태그 안에 들어있는 값을 새로운 변수에 넣어주어야 함
   
    if(user_input_f > 100 || user_input_f < 1){
        result_area.textContent = "1 이상 100 이하의 숫자만 입력하세요";
        return;   // return 안할 경우 실행 이 조건문 실행 안됨
    }

    if (history.includes(user_input_f)){
        result_area.textContent = "이미 입력한 숫자입니다"
        return;
    }
    
    chance--;
    count_area.textContent = `남은 기회 : ${chance}번`;
    // count_area.innerHTML=`남은 기회 : ${chance}번`;
    
    if(user_input_f < computer_num){
        result_area.textContent = "Up!!";
    }
    else if(user_input_f > computer_num){
        result_area.textContent = "Down!!";
    }
    else{
        result_area.textContent = "성공";
        game_over = true;
    }


    history.push(user_input_f);


    if(chance == 0){
        game_over = true;
    }

    if(game_over == true){
        play_button.disabled = true;
    }
    
}


function reset(){
    result_area.textContent = "";
    user_input.value = "";  // user input 창 깨끗하게 정리됨
    random_product(); //새로운 번호 생성
    game_over = false;
    play_button.disabled = false;
    chance=5;
    count_area.textContent = `남은 기회 : ${chance}번`;
 

}



random_product();


































/*let computer_num=0;
let play_button=document.getElementById("play_button");
let user_input=document.getElementById("user_input");
let result_area=document.getElementById("result_area");
let reset_button=document.getElementById("reset_button");
let count_area=document.getElementById("count");

let count=5;
let game_over=false;
let user_input_list=[];

count_area.innerHTML=`남은 기회 : ${count}번`;
play_button.addEventListener("click",play);
reset_button.addEventListener("click",reset);
user_input.addEventListener("focus",function(){
    user_input.value="";
});

function pick_random_num( ){
    computer_num=Math.floor(Math.random()*100)+1;
    
}

function play(){
    let user_value=user_input.value;

    if(user_value<1 || user_value>100){
        result_area.textContent="1부터 100까지의 숫자만 입력하세요";
        return;
    }

    if(user_input_list.includes(user_input)){
        result_area.textContent="이미 입력한 숫자입니다";
        return;
    }
  

    count--;
    count_area.textContent=`남은기회 : ${count}번`;
    user_input_list.push(user_input);

    if(user_value<computer_num){
       result_area.textContent="Up !!!";
          
    }
    else if(user_value>computer_num){
        result_area.textContent="Down !!!";
       
    }  
    else{
        result_area.textContent="성공";
        game_over=true;
    }

   

   if(count == 0){
        game_over=true;
    }

    if(game_over == true){
        play_button.disabled=true;
    } 
} 



function reset(){
    user_input.value="";
    pick_random_num();
    result_area.textContent=" ";
    play_button.disabled=false;
    count=5;
    count_area.innerHTML=`남은 기회 : ${count}번`;
    play()
   
}


pick_random_num();*/