let email = document.getElementById("mail");
let form =document.getElementById("form-text")
let pwd=document.getElementById("pwd")
let name=document.getElementById("name")
let lastname=document.getElementById("lastname")
let adress=document.getElementById("adress")
let comment=document.getElementById("comment")
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    EmptyTest(name,lastname,adress,comment);
    ValidateEmail(email);
    ValidatePassword(pwd);
    
  })
  ///////////Emailtest
  function ValidateEmail(email)
  {    
 let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(mailformat.test(email.value))
  {
  return true;
  }
  else
  {
  alert("You have entered an invalid email address!");
  }
  }
  /////////paswordTest
  function ValidatePassword(pwd)
  {
    if(pwd.value.length < 6) {
      alert("Error: Password must contain at least six characters!");
      pwd.focus();
      return false;
    }
    re = /[0-9]/;
    if(!re.test(pwd.value)) {
      alert("Error: password must contain at least one number (0-9)!");
     pwd.focus();
      return false;
    }
    re = /[a-z]/;
    if(!re.test(pwd.value)) {
      alert("Error: password must contain at least one lowercase letter (a-z)!");
      pwd.focus();
      return false;
    }
    re = /[A-Z]/;
    if(!re.test(pwd.value)) {
      alert("Error: password must contain at least one uppercase letter (A-Z)!");
      pwd.focus();
      return false;
    }
//////empty Test
}
function EmptyTest(name,lastname,adress,comment)
{
if(name.value=="")
return alert("NAME IS EMPTY!");

if(lastname.value=="")
return alert("LASTNAME IS EMPTY");

if(adress.value=="")
return alert("ADRESS IS EMPTY");

if(comment.value=="")
return alert("COMMENT IS EMPTY!");
}