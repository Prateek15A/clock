let body1 = document.querySelector("body");
let body2 = document.querySelector("body");
let h2 = document.querySelector("h2");
let minu = document.querySelector(".minh");
let secs = document.querySelector(".sech");
let hrs = document.querySelector(".hourh");

const time = () => {
		let samay = new Date();
		h2.innerHTML = `${samay.getHours()}hrs ${samay.getMinutes()}mins ${samay.getSeconds() }secs`;
		setTimeout(time,500);
	}
	body1.onload = time();

const ghadi = () => {
	let samay = new Date();
	let ans;
	secs.style.transform = `rotate(${samay.getSeconds() * 6}deg)`;
	setTimeout(ghadi,500);
	minu.style.transform = `rotate(${samay.getMinutes() * 6 + samay.getSeconds() * 0.1}deg)`;
	if(samay.getHours() > 12){
		ans = ((samay.getHours() % 12) * 30) + (samay.getSeconds() * (1/120));
	}
	else{
		ans = (samay.getHours() * 30) + (samay.getSeconds() * (1/120));	
	}
	hrs.style.transform = `rotate(${ans}deg)`;
}

body2.onload =  ghadi();