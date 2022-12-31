let is = 0
		let m = document.querySelector('.m')
		let d = document.querySelector('.d')
		let h = document.querySelector('.h')
		let mm = document.querySelector('.mm')
		let s = document.querySelector('.s')
		addText(m,12,30,'月')
		addText(d,31,65,'日')
		addText(h,24,100,'时')
		addText(mm,60,135,'分',true)
		addText(s,60,170,'秒')

		function addText(dom,max,trans,txt,ck){
			for(let i = 0; i < max; i++){
				let pm = document.createElement('p')
				pm.innerHTML = (ck ? i : i+1)+txt
				pm.style.transform = `rotate(${i*(360/max)}deg) translateX(${trans}px)`
				dom.appendChild(pm)
			}
		}
		
		setInterval(()=>{
			    let date = new Date()
				setTime(m,date.getMonth(),12)
				setTime(d,date.getDate(),31)
				setTime(h,date.getHours(),24)
				setTime(mm,date.getMinutes()+1,60)
				setTime(s,date.getSeconds(),60)
				
		},1000)
		
		function setTime(dom,timer,max){
			let p = dom.querySelectorAll('p')
			dom.style.transform = 'rotate('+(dom==m ? timer : timer -1)*(-360/max)+'deg)'
			p.forEach(v=>{
				v.classList.remove('ck')
			})
			p[dom==m ? timer : timer-1].classList.add('ck')
		}
