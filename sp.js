    
    var o = 0;
    p.onclick=function (){
     if(o==0){
     o=1;
    let str = "我真的是服了你这个老六";
    let i = 0;
    let timer = setInterval(()=>{
      p.innerText += str[i];
      i++;
      if(i == str.length-0){
        clearInterval(timer)
        };
      },200);}
    }
  sshly.onclick=function(){
      window.location.href="in.html";
      }
  dxy.onclick=function(){
      window.location.href="dxy.html";
      }
    sllh.onclick=function(){
      window.location.href="n.html";
      }
    bailu.onclick=function(){
      window.location.href="lsn.html";
      }
