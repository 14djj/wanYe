var path = [
    {
      path:'https://p2.a.yximgs.com/ufile/atlas/NTIxNDYwNTU4Mzk4Nzg3NTgwOV8xNzQ2MjU5NzE1MDU4_${i}.jpg',
      mathPath:31
    },
    {
      path:'https://p2.a.yximgs.com/ufile/atlas/NTI0NDQ0MTkzMTAwNTg3ODU2M18xNzQ2MjU5Nzg4OTU3_${i}.jpg',
      mathPath:31
    },
    {
      path:'https://p2.a.yximgs.com/ufile/atlas/NTIzOTA5MzkwNTM4ODMzMjA2Nl8xNzQ2MjU5ODk0NTIy_${i}.jpg',
      mathPath:31
    },
    {
      path:'https://p2.a.yximgs.com/ufile/atlas/NTIzMTQ5NDA4MzI1ODYxODQ4M18xNzQ2MjYwMDAxNjkx_${i}.jpg',
      mathPath:31
    },
    {
      path:'https://p2.a.yximgs.com/ufile/atlas/NTI1NDU3NTAzMjY1NzUxNTYwN18xNzQ2MjYwMTY0Nzc3_${i}.jpg',
      mathPath:31
    },
    {
      path:'https://p2.a.yximgs.com/ufile/atlas/NTIyMDUxNjU1Nzc3NDI2MTg2MV8xNzQ2MjYwMjEyNDEx_${i}.jpg',
      mathPath:31
    },
    {
      path:'https://p2.a.yximgs.com/ufile/atlas/NTI0NjEzMDc4MDU3MzcyOTgyNV8xNzQ2MjYwMjIyMDU0_${i}.jpg',
      mathPath:31
    },
    {
      path:'https://p2.a.yximgs.com/ufile/atlas/NTI1OTY0MTU4MjEwNjI3Mjc2N18xNzQ2MjYwMjgzMTc2_${i}.jpg',
      mathPath:30
    }
  ];
  function oasdd(){
      var item = path;
      path = [];
      for(var i = 0; i<item.length; i++){
          for(var o = 0; o<item[i].mathPath; o++){
            var a = item[i].path.replace("${i}",o);
            path.push(a);
          }
      }
      console.log(path);
  }
  var ix = 19;
  var iy = 13;
  var ii = document.getElementById("ii");
  function into(){
    oasdd();
    for(var i = 0; i<iy;i++){
    var tr = document.createElement("tr");
      for(var o = 0;o<ix; o++){
        var td = document.createElement("td");
        var img = document.createElement("img");
        var b = (ix*i)+o;
        img.src = path[b];
        img.className = "target-image";
        //img.width = "50px";
        td.appendChild(img);
        tr.appendChild(td);
      }
      ii.appendChild(tr);
    }
  }