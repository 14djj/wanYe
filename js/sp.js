    
    var o = 0;
    p.onclick=function (){
     if(o==0){
     o=1;
    let str = "我真的是服了这个老六";
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
      window.location.href="Subpages/in.html";
      }
  dxy.onclick=function(){
      window.location.href="Subpages/dxy.html";
      }
    sllh.onclick=function(){
      window.location.href="Subpages/n.html";
      }
    bailu.onclick=function(){
      window.location.href="Subpages/lsn.html";
      }
