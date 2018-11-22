
window.onload = function() {
   var p=document.querySelector("body")
    p.insertAdjacentHTML("beforeend","<div id='fangkuai'></div>")
    
    p.insertAdjacentHTML("beforeend","<input type='button' value='向左' class='btn1'>")
    p.insertAdjacentHTML("beforeend","<input type='button' value='向右' class='btn2'>")
    p.insertAdjacentHTML("beforeend","<input type='button' value='向上' class='btn3'>")
    p.insertAdjacentHTML("beforeend","<input type='button' value='向下' class='btn4'>")
    p.insertAdjacentHTML("beforeend","<input type='button' value='放大' class='btn5'>")
    p.insertAdjacentHTML("beforeend","<input type='button' value='缩小' class='btn6'>") 

   var btn1=document.querySelector(".btn1")
        btn1.addEventListener("click",function(){
        
          var distance =100
          var zuo =parseInt(  document.getElementById("fangkuai").getBoundingClientRect().left -distance)
        document.getElementById("fangkuai").style.left= zuo+"px"
        
    }) 
      var btn2=document.querySelector(".btn2")
        btn2.addEventListener("click", function(){
          var distance = 100
          var you= parseInt( document.getElementById("fangkuai").getBoundingClientRect().left +distance)
        document.getElementById("fangkuai").style.left= you +"px"
        
    })
     var btn3=document.querySelector(".btn3")
        btn3.addEventListener("click", function(){
          var distance = 100
          var shang = parseInt( document.getElementById("fangkuai").getBoundingClientRect().top -distance)
        document.getElementById("fangkuai").style.top = shang + "px"
      
   })
     var btn4=document.querySelector(".btn4")
        btn4.addEventListener("click", function(){
          var distance = 100
          var xia = parseInt( document.getElementById("fangkuai").getBoundingClientRect().top +distance)
          document.getElementById("fangkuai").style.top = xia + "px"
        
   })
     var btn5=document.querySelector(".btn5")
        btn5.addEventListener("click", function(){
        document.getElementById("fangkuai").style.cssText="padding-top: 100;padding-left: 100;"
   })
     
   
  
   
 var btn6=document.querySelector(".btn6")
        btn6.addEventListener("click", function(){
        document.getElementById("fangkuai").style.cssText="width:50px;height:50px"
   })
  }
     
       
     
    
      


 