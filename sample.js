function printmessage() {
    var name, number, age, from, to, dd, rd;
    name = document.getElementById("name").value
    number = document.getElementById("number").value
    age = document.getElementById("AGE").value
    from = document.getElementById("form").value
    to = document.getElementById("form1").value
    dd = document.getElementById("form2").value
    rd = document.getElementById("form3").value

    msg = "NAME: " + name + " <br/>CONTACT NUMBER: " + number + "<br/> AGE:" + age + "<br/> FROM:" + from + "<br/> TO: " + to + "<br/>  DEPARTURE DATE:" + dd + "<br/> RETURN DATE:" + rd + "<br/>(NOTE:your payment details will be send through your mobile number:" + number + ")";

    document.getElementById("msg").innerHTML = msg;
}