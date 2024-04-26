const nahoru = document.querySelector("#nahoru");
nahoru.addEventListener("click", (udalost) =>{
	window.scrollTo({
		left: 0,
		top: 0,
		behavior: 'smooth',
	}

	);
});

const header = document.querySelector("header");


window.addEventListener("scroll", (udalost)=>
{
	const poziceHeadru = header.getBoundingClientRect(); //tahle funkce zjistí, Y a X osu, kde je ten header
	

	if (window.scrollY > poziceHeadru.bottom)
	{
		nahoru.classList.add("zobrazit");
	}
	else
	{
		nahoru.classList.remove("zobrazit");
	}
});