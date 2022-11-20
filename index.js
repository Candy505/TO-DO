const modeBtn = document.getElementById('mode-btn')
const addBtn =  document.getElementById('add-btn')
const container = document.getElementById('container-two')

modeBtn.addEventListener('click',modeChange)

function modeChange()
{
    //console.log(themeBtn.name)

     if(modeBtn.name === "light")
     {
       modeBtn.innerHTML =  ` 
                           <img src= "\\images\\halfmoon.png" 
                           width = "30px">
                           `
                           modeBtn.name = "dark"
        
        document.body.style.backgroundImage = "url('https://static.vecteezy.com/system/resources/previews/002/099/710/non_2x/mountain-beautiful-landscape-background-design-illustration-free-vector.jpg')"

     }

     else
     {
        modeBtn.innerHTML =  ` 
                           <img src= "\\images\\sun.png" 
                           width = "30px">
                           `
                           modeBtn.name = "light"

       document.body.style.backgroundImage = "url('https://static.vecteezy.com/system/resources/previews/002/099/700/non_2x/mountain-beautiful-landscape-background-design-illustration-free-vector.jpg')"

     }
}

//addBtn.addEventListener('click', addTask)

function addTask(e)
{
   
   container.innerHTML += `
   <li>
   <input type="text" name = "task" maxlength="50">
         </li>                   ` 
   const select =  document.querySelectorAll('input');
   select[select.length-1].focus()

  }

  
  container.addEventListener('keyup',addOnEnter)

  function addOnEnter(e)
  {
    if(e.keyCode === 13)
    {
      addTask()
    }
  }


  function currentTime() {
   let date = new Date(); 
   let hh = date.getHours();
   let mm = date.getMinutes();
   let ss = date.getSeconds();
   let session = "AM";
 
     
   if(hh > 12){
       session = "PM";
    }
 
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
     
    let time = hh + ":" + mm + ":" + ss + " " + session;
 
   document.getElementById("clock").innerText = time; 
   var t = setTimeout(function(){ currentTime() }, 1000); 
 
 }
 
 currentTime();

  