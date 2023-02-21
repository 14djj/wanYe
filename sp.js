    sxan.onclick=function(){
     var arrNum = [];
     for(var i = 0; i < 2; i++) {
       arrNum[i] = Math.floor(Math.random() * 3);
       if(i > 0) {
         for(var j = 0; j < i; j++) {
          if(arrNum[j] == arrNum[i]) {
            i--;
            break;
            };
            };
            };
            };
            alert(arrNum);
            
            }
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
    sllh.onclick=function(){
      window.location.href="n.html";
      }
    bailu.onclick=function(){
      window.location.href="lsn.html";
      }
