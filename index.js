var arr = [
    {text:"",change_state: "a"},
    {text:"",change_state: "b"},
    {text:"",change_state: "c"},
    {text:"",change_state: "d"},
    {text:"",change_state: "e"},
    {text:"",change_state: "f"},
    {text:"",change_state: "g"},
    {text:"",change_state: "h"},
    {text:"",change_state: "i"},
    
]

function show(){
    
clutter1 = "";
for(var i = 0;i<3;i++){
    clutter1 += `<div id = ${i} class="squares"><h1 id = ${i}>${arr[i].text}</h1></div>`;
}
clutter2 = "";
for(var i = 3;i<6;i++){
    clutter2 += `<div id = ${i} class="squares"><h1 id = ${i}>${arr[i].text}</h1></div>`;

}
clutter3 = "";
for(var i = 6;i<9;i++){
    clutter3 += `<div id = ${i} class="squares"><h1 id = ${i}>${arr[i].text}</h1></div>`;

}
document.querySelector("#a").innerHTML = clutter1;
document.querySelector("#b").innerHTML = clutter2;
document.querySelector("#c").innerHTML = clutter3;
 

}
show();
  var is = 1;

var flag = 0;
document.querySelector("#cover").addEventListener("click",function(dets){

    if(flag === 0){
        arr[dets.target.id].text="O";
        arr[dets.target.id].change_state = "O";

        
        flag =1;
        show();
    }

    else{
        arr[dets.target.id].text="X";
        arr[dets.target.id].change_state = "X";
        flag = 0;
        show();
    }
      if(arr[0].change_state === arr[1].change_state && arr[0].change_state === arr[2].change_state || arr[2].change_state === arr[1].change_state && arr[2].change_state === arr[0].change_state  ){
        document.querySelector("#square1").style.zIndex = "9";
            document.querySelector("#square2").style.zIndex = "9";
            document.querySelector("#square3").style.zIndex = "9";
        
        if(arr[0].change_state === "O"){
            document.querySelector("#head1").textContent = "Player O Wins ";
            
            
        }
        else {
            document.querySelector("#head2").textContent = "Player X Wins ";
        }
        setTimeout(() => {
            location.reload();
        }, 1000);
        

          
      }
      else if(arr[0].change_state === arr[3].change_state && arr[0].change_state === arr[6].change_state || arr[6].change_state === arr[3].change_state && arr[6].change_state === arr[0].change_state ){
       
        document.querySelector("#square1").style.zIndex = "9";
        document.querySelector("#square6").style.zIndex = "9";
        document.querySelector("#square7").style.zIndex = "9";
        if(arr[0].change_state === "O"){
            document.querySelector("#head1").textContent = "Player O Wins";
        }
        else{
            document.querySelector("#head2").textContent = "Player X Wins";
        }
        setTimeout(() => {
            location.reload();
        }, 1000);
    }
    else if(arr[0].change_state === arr[4].change_state && arr[0].change_state === arr[8].change_state || arr[8].change_state === arr[4].change_state && arr[8].change_state === arr[0].change_state){
       
        document.querySelector("#square1").style.zIndex = "9";
        document.querySelector("#square5").style.zIndex = "9";
        document.querySelector("#square9").style.zIndex = "9";
        if(arr[0].change_state === "O"){
            document.querySelector("#head1").textContent = "Player O Wins ";
        }
        else{
            document.querySelector("#head2").textContent = "Player X Wins";
        }
        setTimeout(() => {
            location.reload();
        }, 1000);
    }
    else if(arr[2].change_state === arr[5].change_state && arr[2].change_state === arr[8].change_state || arr[8].change_state === arr[5].change_state && arr[8].change_state === arr[2].change_state){
        
        document.querySelector("#square3").style.zIndex = "9";
        document.querySelector("#square4").style.zIndex = "9";
        document.querySelector("#square9").style.zIndex = "9";
        if(arr[2].change_state === "O"){
            document.querySelector("#head1").textContent = "Player O Wins";
        }
        else{
            document.querySelector("#head2").textContent = "Player X Wins";
        }
        setTimeout(() => {
            location.reload();
        }, 1000);
    }
    else if(arr[2].change_state === arr[4].change_state && arr[2].change_state === arr[6].change_state || arr[6].change_state === arr[4].change_state && arr[6].change_state === arr[2].change_state){
        document.querySelector("#square3").style.zIndex = "9";
        document.querySelector("#square5").style.zIndex = "9";
        document.querySelector("#square7").style.zIndex = "9";
        if(arr[2].change_state === "O"){
            document.querySelector("#head1").textContent = "Player O Wins";
        }
        else{
            document.querySelector("#head2").textContent = "Player X Wins";
        }
        setTimeout(() => {
            location.reload();
        }, 1000);
    }
    else if(arr[6].change_state === arr[7].change_state && arr[6].change_state === arr[8].change_state || arr[8].change_state === arr[7].change_state && arr[8].change_state === arr[6].change_state){
        document.querySelector("#square7").style.zIndex = "9";
        document.querySelector("#square8").style.zIndex = "9";
        document.querySelector("#square9").style.zIndex = "9";
        if(arr[6].change_state === "O"){
            document.querySelector("#head1").textContent = "Player O Wins";
        }
        else{
            document.querySelector("#head2").textContent = "Player X Wins";
        }
        setTimeout(() => {
            location.reload();
        }, 1000);
    }
    else if(arr[1].change_state === arr[4].change_state && arr[1].change_state === arr[7].change_state || arr[7].change_state === arr[4].change_state && arr[7].change_state === arr[1].change_state){
       
        document.querySelector("#square2").style.zIndex = "9";
        document.querySelector("#square5").style.zIndex = "9";
        document.querySelector("#square7").style.zIndex = "9"; if(arr[1].change_state === "O"){
            document.querySelector("#head1").textContent = "Player O Wins";
        }
        else{
            document.querySelector("#head2").textContent = "Player X Wins";
        }
        setTimeout(() => {
            location.reload();
        }, 1000);
    }
    else if(arr[3].change_state === arr[4].change_state && arr[3].change_state === arr[5].change_state || arr[5].change_state === arr[4].change_state && arr[5].change_state === arr[3].change_state){
       
        document.querySelector("#square6").style.zIndex = "9";
        document.querySelector("#square5").style.zIndex = "9";
        document.querySelector("#square4").style.zIndex = "9";
         if(arr[3].change_state === "O"){
            document.querySelector("#head1").textContent = "Player O Wins";
        }
        else{
            document.querySelector("#head2").textContent = "Player X Wins";
        }
        setTimeout(() => {
            location.reload();
        }, 1000);
    }
    else{
        is++;
    }
    
   

    if(is===10){
        document.querySelector("#h2").style.display = "Initial";
        document.querySelector("#head1").style.display = "None";
        document.querySelector("#head2").style.display = "None";
        setTimeout(() => {
            location.reload();
        }, 2000);
    }
    

})






