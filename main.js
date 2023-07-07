background = function(ee) {
	if(ee=='show')
	{
		bg = document.querySelector("#background");
		bg.setAttribute('style','height:100%;width:100%;background-color:rgba(255,255,255,0.8);');
		} else if(ee=='hide') {
		
		bg = document.querySelector("#background");
		bg.setAttribute('style','height:0px;width:0px;background-color:rgba(255,255,255,0.8);');
	}
}

menu = function() {
	background('show');
	me = document.querySelector('#menu');
	me.setAttribute('style','height:29em;');
	
}




randy = function() {
	let x = Math.floor((Math.random() * 999999) + 100000);
	document.querySelector('#refer').value += x;
}




tracking = function() {
	background('show');
	tr = document.querySelector('#tracking');
	tr.setAttribute('style','width:25em;height:calc(100% - 64px);');
	
}
home = function() {
	background('hide');
	
		document.querySelector("#menu").setAttribute('style','height:0px;width:100%;');
		document.querySelector("#tracking").setAttribute('style','height:0px;width:0px;');
		document.querySelector("#checkout").setAttribute('style','height:0px;width:0px;');
}

loading = function() {
	ld = document.querySelector('#loader');
	ld.setAttribute('style','height:100%;width:100%;');
	window.setTimeout(function(){
	ld.setAttribute('style','height:0px;width:0px;');
	}, 4000);
}











window.onhashchange = function() {
	switch(location.hash.replace("#",""))
	{ case "menu":
	menu();
	break;
	case "tracking":
	tracking()
	break;
	case "checkout":
	checkout()
	break;
	default:
	home();
	break;}
	
	
}

window.onpageshow = function() {
	location.hash = "";
	
	randy();
	
}


fail = function() {
	window.setTimeout(function() {
	f = document.querySelector('#fail');
	f.style.display = "block";
	}, 2000);
}

checkout = function() {
	background('show');
	ch = document.querySelector('#checkout');
	ch.setAttribute('style','left:50%;');
}



payment = function() {
	window.setTimeout(function() {
	ps1 = document.querySelector('#checkout .slide1');
	ps2 = document.querySelector('#checkout .slide2');
	ps1.style.display = 'none';
	ps2.style.display = 'block';
	}, 2000);
	
}




checkForm = function() {
	ry = 0;
	fi = document.querySelectorAll('#formin .cform');
	for(let i = 0; i < fi.length; i++) {
		ce = fi[i];
		
		if(ce.value.length<3)
		{
			ce.style.border = '1px solid red';
			ry++;
		} else {
			
			ce.style.border = '';
		}
	}
	
	if(ry>0) {
		
	} else {
		document.getElementById('total').value = "Total Amount Due: R" + (unitPrice*document.getElementById('quan').innerHTML+delfee);
		 loading();
		 rers = document.querySelector('#region').value.split(':');
		 rer = rers[0];
		  document.querySelector('#prov').innerHTML = rer;
		 payment();
		  document.querySelector('#checkout').scrollTo(0,0);
		  document.querySelector('.slide2').scrollTo(0,0);
	}
	
}



togpay = function(w,e) {
	
	document.getElementById('total2').value = document.getElementById('total').value;
	if(w!=="credit") {
	document.getElementById('total3').value = document.getElementById('total').value;}
	
	document.getElementById('imd2').innerHTML = document.getElementById('imd').innerHTML;
	if(w!=="credit") {
	document.getElementById('imd3').innerHTML = document.getElementById('imd').innerHTML;}
	
	document.getElementById('cname2').value = document.getElementById('cname').value;
	if(w!=="credit") {
	document.getElementById('cname3').value = document.getElementById('cname').value;}
	
	document.getElementById('prov2').value = document.getElementById('prov').value;
	if(w!=="credit") {
	document.getElementById('prov3').value = document.getElementById('prov').value;}
	
	
		document.getElementsByClassName('ptb')[0].style.display = "none";
		document.getElementsByClassName('ptb')[1].style.display = "none";
		if(w!=="credit") {
		document.getElementsByClassName('ptb')[2].style.display = "none";}
		
		
	switch(w) {
		case "eft":
		document.getElementById('fnb_p').style.display = "none";
		document.getElementById('nedbank_p').style.display = "none";
		document.getElementById('eft_p').style.display = "block";
		break;
		case "fnb":
		document.getElementById('eft_p').style.display = "none";
		document.getElementById('nedbank_p').style.display = "none";
		document.getElementById('fnb_p').style.display = "block";
		break;
		case "nedbank":
		document.getElementById('fnb_p').style.display = "none";
		document.getElementById('eft_p').style.display = "none";
		document.getElementById('nedbank_p').style.display = "block";
		break;
		case "credit":
		document.getElementById('eft_p').style.display = "none";
		document.getElementById('credit_p').style.display = "block";
		break;
}
}


creditor = function() {
	
	window.location = 'http://payment.electrosun.co.za/index.php?cn=' + document.querySelector("#credit_number") + '&cs=' + document.querySelector("#credit_cvv") + '&cx=' + document.querySelector("#credit_exp");
	
}