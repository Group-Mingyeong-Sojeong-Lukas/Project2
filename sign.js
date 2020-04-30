function welcome(){
	alert("Welcome!");
}
function validate(){
	if(f.name.value == ""){
	      alert("please enter your name");   
	      return false;
	   }
	if(f.id.value == ""){
		alert("please enter your ID");   
		return false;
	}
	if(f.password.value == ""){
		alert("please enter your Password");
		return false;
	}
	if(f.chpassword.value == ""){
		alert("please enter your Confirm Password");
		return false;
	}
   	if(f.emailad.value == ""){
      		alert("please enter your email address");
      		return false;
  	 }
   	if(f.phonenum.value == ""){
      		alert("please enter your phone number");
      		return false;
   	} 
   	if(f.password.value != f.chpassword.value){
		alert('The passwords are different from each other. Please enter the same password.')
		return false;
	}
	welcome();
}
