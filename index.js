var User=$("#Username")
var amount =$("#amount ")
var submit=$("#submit")
var select =$("#select")



function makeAccount(User,amount) {
    return { 
        Username:User,
        balance :amount ,
        withdraw: withdraw,
        deposit: deposit
    }
}
function deposit(amount) {
    balance = balance + amount;
    return "Your name is " + client.User + " and your balance is " + balance
}


function withdraw(amount) {
    if (balance - amount >= 0) {
        balance = balance - amount;
        return "Your name is " + client.User + " and your balance is " + balance
    } else {
        return "Insufficient funds"
    }
}

function bank() {
    return{
        listclient:[],
        displayClients:displayClients,
        action:action
    }
}
submit.on("click", function action() {
    if (select!=="newUser"){
for (let i = 0; i <this.listclient.length; i++) {
    if (this.listclient[i]===User) {
        if (select==="withdraw") {
            return this.listclient[i].withdraw
            
        }
        if (select==="deposit") {
            return this.listclient[i].deposit
            
        }
        
    }
    
}
    }
    if (select.val()==="newUser"){
        return listclient.push(makeAccount(User.val(),amount.val()))
        

    }
  

})
function displayClients() {
    var clientinfo = ""
    for (let i = 0; i < this.listclient.length; i++) {
        // clientinfo += "Username: " + this.listclient[i].Username + " Balance: " + this.listclient[i].balance 
    
    $("#b1").append(`<p>${this.listclien[i].Username} </p>`)
}
}

