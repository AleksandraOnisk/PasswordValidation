function validateForm() {
  var pw1 = document.getElementById("pswd1").value;
  var pw2 = document.getElementById("pswd2").value;

  if(pw1 == "") {
    document.getElementById("message1").innerHTML = "**Wprowadź hasło!";
    return false;
  }

  if(pw2 == "") {
    document.getElementById("message2").innerHTML = "**Wprowadź hasło!";
    return false;
  }

  if(pw1.length < 8) {
    document.getElementById("message1").innerHTML = "**Minimum 8 znaków";
    return false;
  }

  if(!pw1.match(/[a-z]/)) {
    document.getElementById("message1").innerHTML = "**Minimum 1 mała litera";
    return false;
  }

  if(!pw1.match(/[A-Z]/)) {
    document.getElementById("message1").innerHTML = "**Minimum 1 duża litera";
    return false;
  }
  if(!pw1.match(/.[!,@,#,$,%,^,&,*,?,_,~]/)) {
    document.getElementById("message1").innerHTML = "**Minimum 1 znakspecjalny";
    return false;
  }

  if(pw1 != pw2) {
    document.getElementById("message2").innerHTML = "**Hasła różnią się od siebie!";
    return false;
  } else {
    alert ("Twoje hasło zostało utworzone pomyślnie");
    document.write("Formularz został przesłany pomyślnie");
  }
}