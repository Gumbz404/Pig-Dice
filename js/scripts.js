// business logic//
function rolldice() {
  var die1= document.getElementById('die1');
  var die2= document.getElementById('die2');
  var showcase= document.getElementById('showcase');
  var d1= Math.floor(Math.random()*6) + 1;
  var d2= Math.floor(Math.random()*6) + 1;
  var diceTotal= d1 + d2;
  die1.innerHTML=d1;
  die2.innerHTML=d2;
  showcase.innerHTML=" Player 1 rolled" + diceTotal + ".";
    if (d1 == d2 ) {
      showcase.innerHTML+=" Yezzur!!! Play again";
    }

 };

function rolldices() {
  var die3= document.getElementById('die3');
  var die4= document.getElementById('die4');
  var showcase= document.getElementById('show');
  var d3= Math.floor(Math.random()*6) + 1;
  var d4= Math.floor(Math.random()*6) + 1;
  var diceTotal= d3 + d4;
  die3.innerHTML=d3;
  die4.innerHTML=d4;
  show.innerHTML=" Player 2 rolled " + diceTotal + ".";
    if (d3 == d4 ) {
      show.innerHTML+=" Yezzur!!! Play again";
    }
}

function rolldie() {
  var die5= document.getElementById('die5');
  var die6= document.getElementById('die6');
  var status= document.getElementById('status');
  var d5= Math.floor(Math.random()*6) + 1;
  var d6= Math.floor(Math.random()*6) + 1;
  var diceTotal= d5 + d6;
  die5.innerHTML=d5;
  die6.innerHTML=d6
  status.innerHTML=" Player rolled " + diceTotal + ".";
    if (d5 == d6 ) {
      status.innerHTML+=" Yezzur!!! Play again"
    }

      var die7= document.getElementById('die7');
      var die8= document.getElementById('die8');
      var status= document.getElementById('cpuvalue');
      var d7= Math.floor(Math.random()*6) + 1;
      var d8= Math.floor(Math.random()*6) + 1;
      var diceTotal= d7 + d8;
      die7.innerHTML=d7;
      die8.innerHTML=d8
      cpuvalue.innerHTML=" Computer rolled " + diceTotal + ".";
        if (d7 == d8 ) {
          cpuvalue.innerHTML+=" Yezzur!!! Play again"
  }
        else if (d5+d6>d7+d8) {
          cpuvalue.innerHTML+=" Player wins!!!"
  }
  else if (d5+d6 < d7+d8 ) {
    cpuvalue.innerHTML+="Computer wins!!!"
  }
  else if (d5+d6 == d7+d8 ) {
    cpuvalue.innerHTML+="No winner. Play again"
  }
 }
