function validate(){
	
	if(f.first_name.value == ""){
	      alert("please Enter your First_name");   
	      return false;
	   }
	if(f.last_name.value == ""){
	      alert("please Enter your Last_name");   
	      return false;
	   }
	
	if(f.id.value == ""){
		alert("please Enter your ID");   
		return false;
	}
	if(f.password.value == ""){
		alert("please Enter your Password");
		return false;
	}
	
	if(f.chpassword.value == ""){
		alert("please Enter your Check Password");
		return false;
	}
	if(f.birth_year.value == ""){
		alert("please Enter your Check Password");
		return false;
	}
	
   if(f.emailad.value == ""){
      alert("please Enter your Email address");
      return false;
   }
   if(f.phonenum.value == ""){
      alert("please Enter your Phone number");
      return false;
   } 
   if(f.password.value != f.chpassword.value){
		alert('The passwords are different from each other')
		return false;
	}
}
