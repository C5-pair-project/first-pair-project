

function check(username,pass){
	for(var key in localStorage){
		if((key===username)&&(localStorage[key]===pass)){
			alert('Welcom');
			window.location.href = "page2/html.html";
			return false;
		}
		
	}
	alert('Signe in first');
}
function add(name,password){
	localStorage.setItem(name,password);
}

function checkExisting(name){
	for(var key in localStorage){
		if(key===name){
			return	false;
		}
	}
	return true;
}


$(document).ready(function(){


$('.login').append('<br>');
$('.login').append('<input type="text" placeholder="Name" id="name">');
$('.login').append('<br>');
$('.login').append('<input type="password" placeholder="Password" id="pass">');
$('.login').append('<br>');
$('.login').append('<button id="log">Log In</button>');
$('.login').append('<br>');
$('.login').append('<button id="signe">New member</button>');

$('.signein').append('<input type="text" placeholder="Your name" id="newname">');
$('.signein').append('<br>');
$('.signein').append('<input type="password" placeholder="Your password" id="newpass">');
$('.signein').append('<br>');
$('.signein').append('<button id="register">Register</button>');
$('#signe').show();
$('#newname').hide();
$('#newpass').hide();
$('#register').hide();

$('#log').on('click',function(){
	var name=$('#name').val();
	var pass=$('#pass').val();
	if((name==='')&&(pass==='')){
		alert('Fill all information first');
	}
	else if(name===''){
		alert('Type in your name please');
	}
	else if(pass===''){
		alert('Type in your password please');
	}
	else {
		check(name,pass);

	}
})

$('#signe').on('click',function(){
	$('#newname').show();
	$('#newpass').show();
	$('#register').show();
	$('#signe').hide();
	$('.login').hide();
	$('#register').on('click',function(){
		var name=$('#newname').val();
		var pass=$('#newpass').val();
		if((name==='')&&(pass==='')){
			alert('Fill your information please');
		}
		else if(pass===''){
			alert('Fill in your password please');
		}
		else if(name===''){
			alert('Fill in your name please');
		}
		else if(pass.length<8){
			alert('Password should contain at least 8 characters, please retry');
		}
		else if(!checkExisting(name)){
			alert('Existing user name, please retry');
		}
		else{
			add(name,pass);
			alert('Welcome to the family');
			window.location.href = "page2/html.html";
		}		
	})
})

return false;
});