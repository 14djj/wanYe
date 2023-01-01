    var btn = document.getElementById("btn");
    var pic = document.getElementById("pic");
    btn.onclick= function (){
        pic.style.display = "block";
        btn.style.display = "none";
    }
    pic.onclick= function (){
        pic.style.display = "none";
        btn.style.display = "block";
    }
  function bf(){
 var audio = document.getElementById('music1'); 
 if(audio!==null){             
    //检测播放是否已暂停.audio.paused 在播放器播放时返回false.
     ;
  if(audio.paused)                     {                 
      audio.play();//audio.play();// 这个就是播放  
  }else{
   audio.pause();// 这个就是暂停
  }
 } 
}
