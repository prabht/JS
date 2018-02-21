//mouseover event ----------------------------------------------------X---------------------------------------------------

var prod = document.getElementsByClassName("product");

prod[0].childNodes[1].addEventListener("mouseover", getApple, true);

function getApple() {

	var t = Math.floor(Math.random() * 2);
	console.log(t);
	prod[0].childNodes[1].src = "laptops/apple/apple" + (t + 2) + ".jpg";

}
prod[0].childNodes[1].addEventListener("mouseout", getAppleout, true);
function getAppleout() {
	prod[0].childNodes[1].src = "laptops/apple/apple1.jpg";
}

prod[1].childNodes[1].addEventListener("mouseover", getDell, true);
function getDell() {
	var t = Math.floor(Math.random() * 2);
	prod[1].childNodes[1].src = "laptops/dell/dell" + (t + 2) + ".jpg";
}

prod[1].childNodes[1].addEventListener("mouseout", getDellout, true);
function getDellout() {
	prod[1].childNodes[1].src = "laptops/dell/dell1.jpg";
}

prod[2].childNodes[1].addEventListener("mouseover", getHp, true);
function getHp() {
	var t = Math.floor(Math.random() * 2);
	prod[2].childNodes[1].src = "laptops/hp/hp" + (t + 2) + ".jpg";
}
prod[2].childNodes[1].addEventListener("mouseout", getHpout, true);
function getHpout() {
	prod[2].childNodes[1].src = "laptops/hp/hp1.jpg";
}

// adding in cart and quanity incrementer and button
// removal----------------------------------------------------X---------------------------------------------------
prod[0].childNodes[1].addEventListener("click", addApple, true);

function addApple() {
	document.getElementById("noItemMsg").style.visibility = "hidden";
	var cart = document.getElementById("cart-content");
	var cart1 = document.createElement("li");
	var cart2 = document.createElement("input");
	cart2.type = "number";
	cart2.min = "1";
	cart2.window = "10px";
	var t = prod[0].childNodes[3].childNodes[1].childNodes[0].cloneNode(true);
	var p = prod[0].childNodes[5].childNodes[0].cloneNode(true);
	var i = document.createElement("img");
	i.setAttribute("src", "images/invalid.png");
	cart1.appendChild(i);
	i.addEventListener("click", remove, true);
	console.log(document.getElementById("cart-content").childNodes.length);
	function remove() {
		cart.removeChild(cart1);
		if (document.getElementById("cart-content").childNodes.length == 3) {

			document.getElementById("noItemMsg").style.visibility = 'visible';
			document.getElementById("checkoutdiv").style.visibility = "hidden";
		}

	}
	cart1.appendChild(t);
	cart1.appendChild(p);

	cart1.appendChild(cart2);
	cart.appendChild(cart1);

}

prod[1].childNodes[1].addEventListener("click", addDell, true);
function addDell() {
	document.getElementById("noItemMsg").style.visibility = "hidden";
	var cart = document.getElementById("cart-content");
	var cart1 = document.createElement("li");
	var t = prod[1].childNodes[3].childNodes[1].childNodes[0].cloneNode(true);
	var p = prod[1].childNodes[5].childNodes[0].cloneNode(true);
	var cart2 = document.createElement("input");
	cart2.type = "number";
	cart2.min = "1";
	var i = document.createElement("img");
	i.setAttribute("src", "images/invalid.png");
	cart1.appendChild(i);
	i.addEventListener("click", remove, true);
	function remove() {
		cart.removeChild(cart1);
		if (document.getElementById("cart-content").childNodes.length == 3) {

			document.getElementById("noItemMsg").style.visibility = 'visible';
			document.getElementById("checkoutdiv").style.visibility = "hidden";
		}
	}
	cart1.appendChild(t);
	cart1.appendChild(p);
	cart1.appendChild(cart2);
	cart.appendChild(cart1);

}

prod[2].childNodes[1].addEventListener("click", addHp, true);
function addHp() {
	document.getElementById("noItemMsg").style.visibility = "hidden";
	var cart = document.getElementById("cart-content");

	var cart1 = document.createElement("li");
	var t = prod[2].childNodes[3].childNodes[1].childNodes[0].cloneNode(true);
	var p = prod[2].childNodes[5].childNodes[0].cloneNode(true);
	var cart2 = document.createElement("input");
	cart2.type = "number";
	cart2.min = "1";
	var i = document.createElement("img");
	i.setAttribute("src", "images/invalid.png");
	cart1.appendChild(i);
	i.addEventListener("click", remove, true);
	function remove() {
		cart.removeChild(cart1);
		if (document.getElementById("cart-content").childNodes.length == 3) {

			document.getElementById("noItemMsg").style.visibility = 'visible';
			document.getElementById("checkoutdiv").style.visibility = "hidden";
		}
	}
	cart1.appendChild(t);
	cart1.appendChild(p);
	cart1.appendChild(cart2);
	cart.appendChild(cart1);
}

// removing
// all----------------------------------------------------X---------------------------------------------------

var remall = document.getElementById("remove");
remall.addEventListener("click", removeall, true)
function removeall() {

	while (document.getElementById("cart-content").childNodes.length > 3) {
		document.getElementById("cart-content").childNodes[3].remove();
	}

	document.getElementById("noItemMsg").style.visibility = 'visible';
	document.getElementById("checkoutdiv").style.visibility = "hidden";
}

var login = document.getElementById("checkoutdiv");
login.style.visibility = "hidden";

var co = document.getElementById("checkout");
co.addEventListener("click", getvis, true);
function getvis() {
	if(document.getElementById("cart-content").childNodes.length>3)
	document.getElementById("checkoutdiv").style.visibility = "visible";
}

// JSP
// DATA-----------------------------------------------X-------------------------------------------

var sub = document.getElementById("submit");

sub.addEventListener("click", getcred, true);

function getcred() {

	xml = new XMLHttpRequest();
	name = document.getElementById("txtUserName").value;
	var pwd = document.getElementById("txtPwd").value;

	var url = "jsp/userDetails.jsp";

	xml.open("POST", url, true);

	xml.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	xml.onreadystatechange = Handle;

	var data = "name=" + name + "&pwd=" + pwd;

	xml.send(data);

}

function Handle() {
	if (xml.readyState == 4 && xml.status == 200) {
	
		var response=JSON.parse(xml.responseText);
		alert("Hey,"+name+"Your order will reach at "+response.Delivery_City+" You have chosen your payment mode to "+response.Payment_mode+".");	
		

	}
}
// ----------------------------------------------------X---------------------------------------------------
