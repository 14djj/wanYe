
      //rank_type：等级
      //uigf_gacha_type：卡池
      //301：up池
      //302：武器池
      //200：常驻池
      const listElements = {
        "200": "jsonLurl",
        //常驻
        "301": "jsonList",
        //角色
        "302": "jsonLutl",
        //武器
        "4": "sixing",
        //四星
        "5": "wuxin",
        //五星
        "3": "s",
        //三星
      };
      const listEleme = {
        "200": 0,
        //常驻
        "302": 0,
        //武器
        "301": 0
        //角色
      };
      
      
      hhhg.onchange = function() {
          jsonList.style.display = (hhhg.value == "301") ? "block" : "none";
          //显示up池
          jsonLutl.style.display = (hhhg.value == "302") ? "block" : "none";
          //显示武器池
          jsonLurl.style.display = (hhhg.value == "200") ? "block" : "none";
          //显示常驻池
        }
      
      const xhr = new XMLHttpRequest();
      xhr.open('GET', './214634447.json');
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const json = JSON.parse(xhr.responseText);
          console.table(json);
      
          json.list.forEach(item => {
              listEleme[item.uigf_gacha_type]++;
          });
      
          json.list.forEach(item => {
              const li = document.createElement('li');
              li.classList.add(listElements[item.rank_type]);
              li.textContent = `${listEleme[item.uigf_gacha_type]}. ${item.name} - ${item.item_type} - ${item.time}`;
              listEleme[item.uigf_gacha_type]--;
              document.getElementById(listElements[item.uigf_gacha_type]).appendChild(li);
          });
      
          console.table(listEleme);
      
      
            };
          }
      xhr.send();