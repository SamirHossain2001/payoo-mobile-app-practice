
// alert('Hiiiiiiiiii');

document.getElementById("login-btn")
    .addEventListener('click', function(event){
        // stop reload
        event.preventDefault();

        const accNumber = document.getElementById("acc-number").value;
        console.log(accNumber); 

        const pin = document.getElementById("pin").value;
        console.log(pin);

        // Check 11 digit
        if(accNumber.length === 11){
            if(pin === '1234'){
                window.location.href = "main.html";
            }
            else{
                alert("Wrong pin");
            }
            console.log('11 found');
        }
        else{
            alert('Enter 11 digit number.')
        }


        // const numberEle = document.getElementById()
        // const number = numberEle.value;
        // console.log(number);
    });

