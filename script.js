const button1 = document.getElementById('b1')
const button2 = document.getElementById('b2')
const button3 = document.getElementById('b3')
const button4 = document.getElementById('b4')
function GameMode(hmP){
  if (hmP===1){
    button1.style.backgroundColor = "whitesmoke";
    button2.style.backgroundColor = "";
    button3.style.backgroundColor = "";
    button4.style.backgroundColor = "";
    document.getElementById('link').innerHTML = '<a href="1Player.html"><button id="play">PLAY</button></a>';
  }else if (hmP===2){
    button1.style.backgroundColor = "";
    button2.style.backgroundColor = "whitesmoke";
    button3.style.backgroundColor = "";
    button4.style.backgroundColor = "";
    document.getElementById('link').innerHTML = '<a href="2Player.html"><button id="play">PLAY</button></a>';
  }else if (hmP===3){
    button1.style.backgroundColor = "";
    button2.style.backgroundColor = "";
    button3.style.backgroundColor = "whitesmoke";
    button4.style.backgroundColor = "";
    document.getElementById('link').innerHTML = '<a href="3Player.html"><button id="play">PLAY</button></a>';
  }else if (hmP===4){
    button1.style.backgroundColor = "";
    button2.style.backgroundColor = "";
    button3.style.backgroundColor = "";
    button4.style.backgroundColor = "whitesmoke";
    document.getElementById('link').innerHTML = '<a href="4Player.html"><button id="play">PLAY</button></a>';
 }
}














//This Code Create the table
const table = document.getElementById('table');
let tableCount = 0;
for(let i=0;i<15;i++){
  let tbrow = document.createElement('tr');
  table.appendChild(tbrow);
  for(let j=0;j<15;j++){
    tableCount = tableCount+ 1;
    let tbdata = document.createElement('td');
    tbrow.appendChild(tbdata);
    tbdata.innerHTML = '<button id="B'+tableCount+'" onclick="buttonClick('+tableCount+')"></button>';
  }
}
//This Code Create the table













//This Code Choose if 'S' or 'O' move
let choice = 'S';
function choose(chs){
  if(chs==='S'){
    choice = 'S';
    document.getElementById('button-S').style.backgroundColor = 'yellow';
    document.getElementById('button-O').style.backgroundColor = '';
  }else{
    choice = 'O';
    document.getElementById('button-S').style.backgroundColor = '';
    document.getElementById('button-O').style.backgroundColor = 'yellow';
  }
}
function handleKeyPress(event){
  if (event.key === '1'){
    choice = 'S';
    document.getElementById('button-S').style.backgroundColor = 'yellow';
    document.getElementById('button-O').style.backgroundColor = '';
  }else if (event.key === '2'){
    choice = 'O';
    document.getElementById('button-S').style.backgroundColor = '';
    document.getElementById('button-O').style.backgroundColor = 'yellow';
  }
}
//This Code Choose if 'S' or 'O' move









let Players = document.getElementById('pvp');
let currentPlayer = 'red';

//Starting Player
document.getElementById('red').parentElement.parentElement.style.width = '150px';
document.getElementById('red').parentElement.parentElement.style.height = '50px';
//Starting Player








let prevAiMove = '';
function aiMoved(where){
  if(prevAiMove!==''){
  document.getElementById("B"+prevAiMove).style.backgroundColor = '';
  }
  document.getElementById("B"+where).style.border = '1px solid';
  document.getElementById("B"+where).style.borderColor = currentPlayer;
  document.getElementById("B"+where).style.backgroundColor = 'yellow';
  prevAiMove = where;
}

async function Ai(){
  let founded = false;

  let horcol = 0;
  for(let i=1;i<16;i++){
    for(let j=1;j<14;j++){
      sc = horcol+j;
      if(document.getElementById('B'+sc).innerHTML==='S'
        && document.getElementById('B'+(sc+1)).innerHTML==='O'
        && document.getElementById('B'+(sc+2)).innerHTML===''
        &&(document.getElementById('B'+sc).style.color===''|| document.getElementById('B'+(sc+1)).style.color==='' || document.getElementById('B'+(sc+2)).style.color==='')){
          await new Promise(resolve => setTimeout(resolve, 1000));
          document.getElementById('B'+sc).style.color=currentPlayer;
          document.getElementById('B'+(sc+1)).style.color=currentPlayer;
          document.getElementById('B'+(sc+2)).style.color=currentPlayer;
          document.getElementById('B'+(sc+2)).innerHTML='S';
          let score = parseInt(document.getElementById(currentPlayer).innerHTML);
          document.getElementById(currentPlayer).innerHTML = score + 1;
          aiMoved(sc+2);
          founded = true;
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
        if(document.getElementById('B'+sc).innerHTML==='S'
        && document.getElementById('B'+(sc+1)).innerHTML===''
        && document.getElementById('B'+(sc+2)).innerHTML==='S'
        &&(document.getElementById('B'+sc).style.color===''|| document.getElementById('B'+(sc+1)).style.color==='' || document.getElementById('B'+(sc+2)).style.color==='')){
          await new Promise(resolve => setTimeout(resolve, 1000));
          document.getElementById('B'+sc).style.color=currentPlayer;
          document.getElementById('B'+(sc+1)).style.color=currentPlayer;
          document.getElementById('B'+(sc+2)).style.color=currentPlayer;
          document.getElementById('B'+(sc+1)).innerHTML='O';
          let score = parseInt(document.getElementById(currentPlayer).innerHTML);
          document.getElementById(currentPlayer).innerHTML = score + 1;
          aiMoved(sc+1);
          founded = true;
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
        if(document.getElementById('B'+sc).innerHTML===''
        && document.getElementById('B'+(sc+1)).innerHTML==='O'
        && document.getElementById('B'+(sc+2)).innerHTML==='S'
        &&(document.getElementById('B'+sc).style.color===''|| document.getElementById('B'+(sc+1)).style.color==='' || document.getElementById('B'+(sc+2)).style.color==='')){
          await new Promise(resolve => setTimeout(resolve, 1000));
          document.getElementById('B'+sc).style.color=currentPlayer;
          document.getElementById('B'+(sc+1)).style.color=currentPlayer;
          document.getElementById('B'+(sc+2)).style.color=currentPlayer;
          document.getElementById('B'+sc).innerHTML='S';
          let score = parseInt(document.getElementById(currentPlayer).innerHTML);
          document.getElementById(currentPlayer).innerHTML = score + 1;
          aiMoved(sc);
          founded = true;
          await new Promise(resolve => setTimeout(resolve, 1000));
        }  
    }
    horcol = horcol + 15;
  }
  for(let i=0;i<195;i++){//Vertical
    sc = i+1;
    if(document.getElementById('B'+sc).innerHTML==='S'
    && document.getElementById('B'+(sc+15)).innerHTML==='O'
    && document.getElementById('B'+(sc+30)).innerHTML===''&&(document.getElementById('B'+sc).style.color===''
    || document.getElementById('B'+(sc+15)).style.color===''
    || document.getElementById('B'+(sc+30)).style.color==='')){
      await new Promise(resolve => setTimeout(resolve, 1000));
      document.getElementById('B'+sc).style.color=currentPlayer;
      document.getElementById('B'+(sc+15)).style.color=currentPlayer;
      document.getElementById('B'+(sc+30)).style.color=currentPlayer;
      document.getElementById('B'+(sc+30)).innerHTML='S';
      let score = parseInt(document.getElementById(currentPlayer).innerHTML);
      document.getElementById(currentPlayer).innerHTML = score + 1;
      aiMoved(sc+30);
      founded = true;
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    if(document.getElementById('B'+sc).innerHTML==='S'
    && document.getElementById('B'+(sc+15)).innerHTML===''
    && document.getElementById('B'+(sc+30)).innerHTML==='S'&&(document.getElementById('B'+sc).style.color===''
    || document.getElementById('B'+(sc+15)).style.color===''
    || document.getElementById('B'+(sc+30)).style.color==='')){
      await new Promise(resolve => setTimeout(resolve, 1000));
      document.getElementById('B'+sc).style.color=currentPlayer;
      document.getElementById('B'+(sc+15)).style.color=currentPlayer;
      document.getElementById('B'+(sc+30)).style.color=currentPlayer;
      document.getElementById('B'+(sc+15)).innerHTML='O';
      let score = parseInt(document.getElementById(currentPlayer).innerHTML);
      document.getElementById(currentPlayer).innerHTML = score + 1;
      aiMoved(sc+15);
      founded = true;
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    if(document.getElementById('B'+sc).innerHTML===''
    && document.getElementById('B'+(sc+15)).innerHTML==='O'
    && document.getElementById('B'+(sc+30)).innerHTML==='S'&&(document.getElementById('B'+sc).style.color===''
    || document.getElementById('B'+(sc+15)).style.color===''
    || document.getElementById('B'+(sc+30)).style.color==='')){
      await new Promise(resolve => setTimeout(resolve, 1000));
      document.getElementById('B'+sc).style.color=currentPlayer;
      document.getElementById('B'+(sc+15)).style.color=currentPlayer;
      document.getElementById('B'+(sc+30)).style.color=currentPlayer;
      document.getElementById('B'+sc).innerHTML='S';
      let score = parseInt(document.getElementById(currentPlayer).innerHTML);
      document.getElementById(currentPlayer).innerHTML = score + 1;
      aiMoved(sc);
      founded = true;
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  for(let i=0;i<13;i++){//Diagonal Right
    let y = i*15;
    for(let j=0;j<13;j++){
      let sc = j+1;
      if(document.getElementById('B'+(y+sc)).innerHTML==='S'
      && document.getElementById('B'+(y+sc+16)).innerHTML==='O'
      && document.getElementById('B'+(y+sc+32)).innerHTML===''&&(document.getElementById('B'+(y+sc)).style.color===''||
      document.getElementById('B'+(y+sc+16)).style.color===''||
      document.getElementById('B'+(y+sc+32)).style.color==='')){
        await new Promise(resolve => setTimeout(resolve, 1000));
        document.getElementById('B'+(y+sc)).style.color=currentPlayer;
        document.getElementById('B'+(y+sc+16)).style.color=currentPlayer;
        document.getElementById('B'+(y+sc+32)).style.color=currentPlayer;
        document.getElementById('B'+(y+sc+32)).innerHTML='S';
        let score = parseInt(document.getElementById(currentPlayer).innerHTML);
        document.getElementById(currentPlayer).innerHTML = score + 1;
        aiMoved(y+sc+32);
        founded = true;
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      if(document.getElementById('B'+(y+sc)).innerHTML==='S'
      && document.getElementById('B'+(y+sc+16)).innerHTML===''
      && document.getElementById('B'+(y+sc+32)).innerHTML==='S'&&(document.getElementById('B'+(y+sc)).style.color===''||
      document.getElementById('B'+(y+sc+16)).style.color===''||
      document.getElementById('B'+(y+sc+32)).style.color==='')){
        await new Promise(resolve => setTimeout(resolve, 1000));
        document.getElementById('B'+(y+sc)).style.color=currentPlayer;
        document.getElementById('B'+(y+sc+16)).style.color=currentPlayer;
        document.getElementById('B'+(y+sc+32)).style.color=currentPlayer;
        document.getElementById('B'+(y+sc+16)).innerHTML='O';
        let score = parseInt(document.getElementById(currentPlayer).innerHTML);
        document.getElementById(currentPlayer).innerHTML = score + 1;
        aiMoved(y+sc+16);
        founded = true;
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      if(document.getElementById('B'+(y+sc)).innerHTML===''
      && document.getElementById('B'+(y+sc+16)).innerHTML==='O'
      && document.getElementById('B'+(y+sc+32)).innerHTML==='S'&&(document.getElementById('B'+(y+sc)).style.color===''||
      document.getElementById('B'+(y+sc+16)).style.color===''||
      document.getElementById('B'+(y+sc+32)).style.color==='')){
        await new Promise(resolve => setTimeout(resolve, 1000));
        document.getElementById('B'+(y+sc)).style.color=currentPlayer;
        document.getElementById('B'+(y+sc+16)).style.color=currentPlayer;
        document.getElementById('B'+(y+sc+32)).style.color=currentPlayer;
        document.getElementById('B'+(y+sc)).innerHTML='S';
        let score = parseInt(document.getElementById(currentPlayer).innerHTML);
        document.getElementById(currentPlayer).innerHTML = score + 1;
        aiMoved(y+sc);
        founded = true;
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
  }
  for(let i=0;i<13;i++){//Diagonal Left
    let y=i*15;
    for(let j=3;j<16;j++){
      if(document.getElementById('B'+(y+j)).innerHTML==='S'
      && document.getElementById('B'+(y+j+14)).innerHTML==='O'
      && document.getElementById('B'+(y+j+28)).innerHTML===''&&(document.getElementById('B'+(y+j)).style.color===''||
      document.getElementById('B'+(y+j+14)).style.color===''||
      document.getElementById('B'+(y+j+28)).style.color==='')){
        await new Promise(resolve => setTimeout(resolve, 1000));
        document.getElementById('B'+(y+j)).style.color=currentPlayer;
        document.getElementById('B'+(y+j+14)).style.color=currentPlayer;
        document.getElementById('B'+(y+j+28)).style.color=currentPlayer;
        document.getElementById('B'+(y+j+28)).innerHTML='S';
        let score = parseInt(document.getElementById(currentPlayer).innerHTML);
        document.getElementById(currentPlayer).innerHTML = score + 1;
        aiMoved(y+j+28);
        founded = true;
        await new Promise(resolve => setTimeout(resolve, 1000));
        }
        if(document.getElementById('B'+(y+j)).innerHTML==='S'
        && document.getElementById('B'+(y+j+14)).innerHTML===''
        && document.getElementById('B'+(y+j+28)).innerHTML==='S'&&(document.getElementById('B'+(y+j)).style.color===''||
        document.getElementById('B'+(y+j+14)).style.color===''||
        document.getElementById('B'+(y+j+28)).style.color==='')){
          await new Promise(resolve => setTimeout(resolve, 1000));
          document.getElementById('B'+(y+j)).style.color=currentPlayer;
          document.getElementById('B'+(y+j+14)).style.color=currentPlayer;
          document.getElementById('B'+(y+j+28)).style.color=currentPlayer;
          document.getElementById('B'+(y+j+14)).innerHTML='O';
          let score = parseInt(document.getElementById(currentPlayer).innerHTML);
          document.getElementById(currentPlayer).innerHTML = score + 1;
          aiMoved(y+j+14);
          founded = true;
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
        if(document.getElementById('B'+(y+j)).innerHTML===''
        && document.getElementById('B'+(y+j+14)).innerHTML==='O'
        && document.getElementById('B'+(y+j+28)).innerHTML==='S'&&(document.getElementById('B'+(y+j)).style.color===''||
        document.getElementById('B'+(y+j+14)).style.color===''||
        document.getElementById('B'+(y+j+28)).style.color==='')){
          await new Promise(resolve => setTimeout(resolve, 1000));
          document.getElementById('B'+(y+j)).style.color=currentPlayer;
          document.getElementById('B'+(y+j+14)).style.color=currentPlayer;
          document.getElementById('B'+(y+j+28)).style.color=currentPlayer;
          document.getElementById('B'+(y+j)).innerHTML='S';
          let score = parseInt(document.getElementById(currentPlayer).innerHTML);
          document.getElementById(currentPlayer).innerHTML = score + 1;
          aiMoved(y+j);
          founded = true;
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      } 
    }

  if(founded===true){
    founded = false;
    Ai();
  }else{
    await new Promise(resolve => setTimeout(resolve, 1000));
    //if cant find
    let randomBox = Math.floor(Math.random()*225)+1;
    const randomMove = Math.floor(Math.random()*2)+1;
    
    if(document.getElementById('B'+randomBox).innerHTML!==''){
      for(let i=1;i<226;i++){
        if(document.getElementById('B'+i).innerHTML===''){
          randomBox = i;
          break;
        }
        if(i===225){
          console.log('The table is full');
        }
      }
    }

    if(document.getElementById('B'+randomBox).innerHTML===''){
      if(randomMove===1){
        document.getElementById("B"+randomBox).innerHTML = 'S';
        aiMoved(randomBox);
      }else if(randomMove===2){
        document.getElementById("B"+randomBox).innerHTML = 'O';
        aiMoved(randomBox);
      }
    }
    //switch back to red
    if(currentPlayer==='green'){
      currentPlayer = 'red';
      document.getElementById('green').parentElement.parentElement.style.width = '80px';
      document.getElementById('green').parentElement.parentElement.style.height = '30px';
      document.getElementById('red').parentElement.parentElement.style.width = '150px';
      document.getElementById('red').parentElement.parentElement.style.height = '50px';
    }
  }
}


















//This Code switch player
function switchPlayer(){
  if(Players.innerHTML==='1'){
    if(currentPlayer==='red'){
      currentPlayer = 'green';
      document.getElementById('red').parentElement.parentElement.style.width = '80px';
      document.getElementById('red').parentElement.parentElement.style.height = '30px';
      document.getElementById('green').parentElement.parentElement.style.width = '150px';
      document.getElementById('green').parentElement.parentElement.style.height = '50px';
      Ai();
    }
  }
  if(Players.innerHTML==='2'){
    if(currentPlayer==='red'){
      currentPlayer = 'green';
      document.getElementById('red').parentElement.parentElement.style.width = '80px';
      document.getElementById('red').parentElement.parentElement.style.height = '30px';
      document.getElementById('green').parentElement.parentElement.style.width = '150px';
      document.getElementById('green').parentElement.parentElement.style.height = '50px';
    }else if(currentPlayer==='green'){
      currentPlayer = 'red';
      document.getElementById('green').parentElement.parentElement.style.width = '80px';
      document.getElementById('green').parentElement.parentElement.style.height = '30px';
      document.getElementById('red').parentElement.parentElement.style.width = '150px';
      document.getElementById('red').parentElement.parentElement.style.height = '50px';
    }
  }
  if(Players.innerHTML==='3'){
    if(currentPlayer==='red'){
      currentPlayer = 'green';
      document.getElementById('red').parentElement.parentElement.style.width = '80px';
      document.getElementById('red').parentElement.parentElement.style.height = '30px';
      document.getElementById('green').parentElement.parentElement.style.width = '150px';
      document.getElementById('green').parentElement.parentElement.style.height = '50px';
    }else if(currentPlayer==='green'){
      currentPlayer = 'blue';
      document.getElementById('green').parentElement.parentElement.style.width = '80px';
      document.getElementById('green').parentElement.parentElement.style.height = '30px';
      document.getElementById('blue').parentElement.parentElement.style.width = '150px';
      document.getElementById('blue').parentElement.parentElement.style.height = '50px';
    }else if(currentPlayer==='blue'){
      currentPlayer = 'red';
      document.getElementById('blue').parentElement.parentElement.style.width = '80px';
      document.getElementById('blue').parentElement.parentElement.style.height = '30px';
      document.getElementById('red').parentElement.parentElement.style.width = '150px';
      document.getElementById('red').parentElement.parentElement.style.height = '50px';
    }
  }
  if(Players.innerHTML==='4'){
    if(currentPlayer==='red'){
      currentPlayer = 'green';
      document.getElementById('red').parentElement.parentElement.style.width = '80px';
      document.getElementById('red').parentElement.parentElement.style.height = '30px';
      document.getElementById('green').parentElement.parentElement.style.width = '150px';
      document.getElementById('green').parentElement.parentElement.style.height = '50px';
    }else if(currentPlayer==='green'){
      currentPlayer = 'blue';
      document.getElementById('green').parentElement.parentElement.style.width = '80px';
      document.getElementById('green').parentElement.parentElement.style.height = '30px';
      document.getElementById('blue').parentElement.parentElement.style.width = '150px';
      document.getElementById('blue').parentElement.parentElement.style.height = '50px';
    }else if(currentPlayer==='blue'){
      currentPlayer = 'orange';
      document.getElementById('blue').parentElement.parentElement.style.width = '80px';
      document.getElementById('blue').parentElement.parentElement.style.height = '30px';
      document.getElementById('orange').parentElement.parentElement.style.width = '150px';
      document.getElementById('orange').parentElement.parentElement.style.height = '50px';
    }else if(currentPlayer==='orange'){
      currentPlayer = 'red';
      document.getElementById('orange').parentElement.parentElement.style.width = '80px';
      document.getElementById('orange').parentElement.parentElement.style.height = '30px';
      document.getElementById('red').parentElement.parentElement.style.width = '150px';
      document.getElementById('red').parentElement.parentElement.style.height = '50px';
    }
  }
}
//This Code switch player










//This Code set something detect-SOS
function setIfHasSos(){//Run If Button is onClick
  let detectSos = false;
  
  let horcol = 0;
  for(let i=1;i<16;i++){
    for(let j=1;j<14;j++){
      sc = horcol+j;
      if(document.getElementById('B'+sc).innerHTML==='S'
      && document.getElementById('B'+(sc+1)).innerHTML==='O'
      && document.getElementById('B'+(sc+2)).innerHTML=='S'
      &&(document.getElementById('B'+sc).style.color===''|| document.getElementById('B'+(sc+1)).style.color==='' || document.getElementById('B'+(sc+2)).style.color==='')){
        document.getElementById('B'+sc).style.color=currentPlayer;
        document.getElementById('B'+(sc+1)).style.color=currentPlayer;
        document.getElementById('B'+(sc+2)).style.color=currentPlayer;
        detectSos = true;
        let score = parseInt(document.getElementById(currentPlayer).innerHTML);
        document.getElementById(currentPlayer).innerHTML = score + 1;
      }
    }
    horcol = horcol + 15;
  }
  for(let i=0;i<195;i++){//Vertical
    sc = i+1;
    if(document.getElementById('B'+sc).innerHTML==='S'
    && document.getElementById('B'+(sc+15)).innerHTML==='O'
    && document.getElementById('B'+(sc+30)).innerHTML==='S'&&(document.getElementById('B'+sc).style.color===''
    || document.getElementById('B'+(sc+15)).style.color===''
    || document.getElementById('B'+(sc+30)).style.color==='')){
      document.getElementById('B'+sc).style.color=currentPlayer;
      document.getElementById('B'+(sc+15)).style.color=currentPlayer;
      document.getElementById('B'+(sc+30)).style.color=currentPlayer;
      detectSos = true;
      let score = parseInt(document.getElementById(currentPlayer).innerHTML);
      document.getElementById(currentPlayer).innerHTML = score + 1;
    }
  }
  for(let i=0;i<13;i++){//Diagonal Right
    let y = i*15;
    for(let j=0;j<13;j++){
      let sc = j+1;
      if(document.getElementById('B'+(y+sc)).innerHTML==='S'
      && document.getElementById('B'+(y+sc+16)).innerHTML==='O'
      && document.getElementById('B'+(y+sc+32)).innerHTML=='S'&&(document.getElementById('B'+(y+sc)).style.color===''||
      document.getElementById('B'+(y+sc+16)).style.color===''||
      document.getElementById('B'+(y+sc+32)).style.color==='')){
        document.getElementById('B'+(y+sc)).style.color=currentPlayer;
        document.getElementById('B'+(y+sc+16)).style.color=currentPlayer;
        document.getElementById('B'+(y+sc+32)).style.color=currentPlayer;
        detectSos = true;
        let score = parseInt(document.getElementById(currentPlayer).innerHTML);
        document.getElementById(currentPlayer).innerHTML = score + 1;
      }
    }
  }
  for(let i=0;i<13;i++){//Diagonal Left
    let y=i*15;
    for(let j=3;j<16;j++){
      if(document.getElementById('B'+(y+j)).innerHTML==='S'
      && document.getElementById('B'+(y+j+14)).innerHTML==='O'
      && document.getElementById('B'+(y+j+28)).innerHTML=='S'&&(document.getElementById('B'+(y+j)).style.color===''||
      document.getElementById('B'+(y+j+14)).style.color===''||
      document.getElementById('B'+(y+j+28)).style.color==='')){
        document.getElementById('B'+(y+j)).style.color=currentPlayer;
        document.getElementById('B'+(y+j+14)).style.color=currentPlayer;
        document.getElementById('B'+(y+j+28)).style.color=currentPlayer;
        detectSos = true;
        let score = parseInt(document.getElementById(currentPlayer).innerHTML);
        document.getElementById(currentPlayer).innerHTML = score + 1;
      }
    } 
  }
  if(!detectSos){
    switchPlayer();
  }

}
//This Code set something detect-SOS















//This Code run if the buttons of table is onclicked
let prevButton = '';
function buttonClick(whichbutton){
  if (document.getElementById("B"+whichbutton).innerHTML===''){
    
    if(Players.innerHTML!=='1'){
      document.getElementById('B'+whichbutton).innerHTML = choice;
    }else{
      if(currentPlayer==='red'){
        document.getElementById('B'+whichbutton).innerHTML = choice;
      }
    }

    if(prevButton!==''){
      document.getElementById('B'+prevButton).style.border = '0';
    }
    document.getElementById('B'+whichbutton).style.border = '2px solid';
    document.getElementById('B'+whichbutton).style.borderColor = 'black';
    document.getElementById('B'+whichbutton).style.borderRadius = '5px';
    prevButton = whichbutton;
    setIfHasSos();//and run this
  }
}
//This Code run if the buttons of table is onclicked
