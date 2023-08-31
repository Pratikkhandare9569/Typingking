const buttons = document.querySelectorAll('.btn');

var flag = false;
buttons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});
let fuctionrunning=false;
function timer(time)
{
  if(!fuctionrunning)
  {
    fuctionrunning= true;
    var timeleft=time;
    var countdownTimer= setInterval(function()
    {
      timeleft--;
      document.getElementById("timer").textContent=timeleft;
      if(timeleft<=0)
      {
       checkinput()
        clearInterval(countdownTimer);
        
        fuctionrunning=false;
        flag=false;
        window.location.href='result.html';
        
      }
    },1000);
   
  }
}
let globaltime=15;
async function handleButtonClick(event) {
  const clickedButton = event.target;

  if(clickedButton.textContent=="15 sec")
  {
    globaltime=10;
  }
  else if(clickedButton.textContent=="30 sec")
  {
    globaltime=30;
  }
  else if(clickedButton.textContent=="60 sec")
  {
    globaltime=60;
  }
  flag=true;
  //..
}


// for changing text according to button input
const character= 'the word technology and its uses have immensely changed since the century and with time it has continued to evolve ever since We are living in a world driven by technology the advancement of technology has played an important role in the development of human civilization along with cultural changes technology provides innovative ways of doing work through various smart and innovative means electronic appliances gadgets faster modes of communication and transport have added to the comfort factor in our lives it has helped in improving the productivity of individuals and different business enterprises technology has brought a revolution in many operational fields it has undoubtedly made a very important contribution to the progress that mankind has made over the years'

function displayword(numberofwords)
{
  const words=character.split(' ').slice(0,numberofwords).join(' ');
  const textdisplay=document.getElementById('text-display');
  textdisplay.textContent=words;
}

const btn10=document.querySelector('.btnw-10');
const btn25=document.querySelector('.btnw-25');
const btn50=document.querySelector('.btnw-50');

btn10.addEventListener('click',function()
{
  displayword(10);
});
btn25.addEventListener('click',function()
 {
    displayword(25);
});
btn50.addEventListener('click',function()
{
  displayword(50);
});

displayword(60);


// checking the input written by the user
const userinput=document.getElementById('user-input' );
// userinput.addEventListener('input',()=>{
//   checkinput();
// });
userinput.addEventListener('input',async()=>{
  if(flag){
  await timer(globaltime);
  }
})
function checkinput()
{
  const textdisplay=document.getElementById('text-display').textContent;
  const words= textdisplay.split(' ');
  const typedwords= userinput.value.split(' ');

  const totalwords=words.length;
  
  // calculate correctly typed words
  let correctwords=0;
  for(let i=0;i<typedwords.length;i++)
  {
    if(typedwords[i].trim()===words[i].trim())
    {
      correctwords++;
    }
  }
  console.log(correctwords);
  console.log(typedwords)
  // calculate accuracy
  const accuracy=(correctwords/typedwords.length)*100;
  const speed=(typedwords.length*(60/globaltime));
  console.log(accuracy)
  console.log(speed)
  localStorage.setItem('accuracy',accuracy);
  localStorage.setItem('speed',speed);
}
