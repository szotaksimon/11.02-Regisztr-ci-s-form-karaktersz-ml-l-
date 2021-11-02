function charcountName(str){
    let lng = str.length
    document.getElementById("charcount-name").innerHTML = lng + "/20"

    if(lng >= 21){
        document.getElementById("nameDiv").classList.add("nameErrorColor")
    }
    else if(lng == 0){
        document.getElementById("charcount-name").innerHTML = ""
    }
    else{
        document.getElementById("nameDiv").classList.remove("nameErrorColor")
    }
}

function charcountPass1(str){
    let lng = str.length
    document.getElementById("charcount-pass1").innerHTML = lng + "/8"

    if(lng < 8 && lng > 0){
        document.getElementById("passDiv").classList.add("passErrorColor")
    }
    else if(lng == 0){
        document.getElementById("charcount-pass1").innerHTML = ""
    }
    else{
        document.getElementById("passDiv").classList.remove("passErrorColor")
    }
}

function passEqual(){
    let pass1 = document.getElementById("pass_1").value
    let pass2 = document.getElementById("pass_2").value

    if(pass1 != pass2){
        document.getElementById("passEqual").innerHTML = "A két jelszó nem egyezik"
    }
    else if(pass1 == pass2){
        document.getElementById("passEqual").innerHTML = ""
    }
}

function validates(){
    const lngName = document.getElementById("name").value.length
    const lngPass = document.getElementById("pass_1").value.length
    const pass1 = document.getElementById("pass_1").value
    const pass2 = document.getElementById("pass_2").value
    if(lngName > 20 || lngPass < 8 || pass1 !== pass2){
        document.getElementById("sikeres").classList.add("sikeresError")
        document.getElementById("sikeres").innerHTML = "Hibás adatok"

    }
    else{
        setTimeout(() => {
            document.getElementById("sikeres").classList.add("sikeresSucces")
            document.getElementById("sikeres").innerHTML = "Sikeres Regisztráció"
        }, 2000)
    }
}
