var User = $("#Username")
var amount = $("#amount")
var submit = $("#submit")
var select = $("#select")

function makeAccount(User, balance) {
    return { 
        Username: User,
        balance: balance,
        withdraw: withdraw,
        deposit: deposit
    };
}

function deposit(amount) {
    this.balance += amount;
    return "Your name is " + this.Username + " and your balance is " + this.balance
}

function withdraw(amount) {
    if (this.balance - amount >= 0) {
        this.balance -= amount
        return "Your name is " + this.Username + " and your balance is " + this.balance
    } else {
        return "Insufficient funds"
    }
}

function bank() {
    return {
        listclient: [],
        displayClients: displayClients,
        action: action
    };
}
var bankInstance = bank()
bankInstance.listclient.push(makeAccount("gaith",600))
bankInstance.listclient.push(makeAccount("khalil",700))
bankInstance.listclient.push(makeAccount("rahma",800))
bankInstance.listclient.push(makeAccount("yassine",800))
console.log();

function action() {
    var user = User.val()
    var amt =Number( amount.val())
    var sel = select.val()
console.log("😊😊");

    if (sel !== "newUser") {
        for (let i = 0; i < bankInstance.listclient.length; i++) {
            if (bankInstance.listclient[i].Username === user) {
                if (sel === "withdraw") {
                    
                    return alert(bankInstance.listclient[i].withdraw(amt))
                }
                if (sel === "deposit") {    
                    
                    return alert(bankInstance.listclient[i].deposit(amt))
                }
            }
        }
    } else {
        bankInstance.listclient.push(makeAccount(user, amt));
        alert("New user created");
    }
}
submit.on("click",bankInstance.action  );

function displayClients() {
        var clientinfo = ""
        for (let i = 0; i < this.listclient.length; i++) {
            
        $("#allclient").append(`<p>${"Username is : " + this.listclient[i].Username + " his Balance is: " + this.listclient[i].balance} </p>`)
        $("p").addClass("intro")
    }
    }

bankInstance.displayClients()
















