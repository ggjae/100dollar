const handleMouseMove = function(event){
	const screen_height = window.screen.height;
	if( event.pageY < 0.05*screen_height){
		this.classList.remove("hidden");
	}
	else if(event.pageY > 0.3*screen_height){
		setTimeout(()=>{
			this.classList.add("hidden");
		})
	}
};

const toggle_dropdowncontent = function(event){
	this.classList.toggle("a11y-hidden");
}
;



const change_btn_content = function(event){
	const btn = document.querySelectorAll(".dropdown-btn")
	btn[1].innerHTML = this.innerHTML;
	btn[0].innerHTML = this.innerHTML;
}

const handle_mouseOut = function(event){
	if(!(this.classList.contains("a11y-hidden"))){
		setTimeout(()=>{
			this.classList.add("a11y-hidden");
		},1000);
	}
}


window.addEventListener('scroll',handleScroll.bind(header));
window.addEventListener('scroll',handleScroll_nav.bind(navbar));
window.addEventListener('mousemove',handleMouseMove.bind(navbar));

dropdown_btn.addEventListener('click',toggle_dropdowncontent.bind(dropdown_content));
dropdown_btn2.addEventListener('click',toggle_dropdowncontent.bind(dropdown_content));

dropdown_list.forEach((element) =>{
	element.addEventListener('click',change_btn_content.bind(element));
});	

dropdown_content.addEventListener('mouseleave',handle_mouseOut.bind(dropdown_content));


setTimeout(()=>{
	navbar.classList.add("hidden");
},1000);

