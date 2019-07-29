function Account(credit,debit,accountNumber){
    this.credit = credit;
    this.debit = debit;
    this.accountNumber = accountNumber;
}

var Account1 = [];
for(var count = 0; count < 5 ; count++){
	Account1.push(new Account(Math.floor(Math.random() * 1000000),Math.floor(Math.random() * 1000000),100 + count));
	Account1.push(new Account(Math.floor(Math.random() * 1000000),null,200 + count));
	Account1.push(new Account(null,Math.floor(Math.random() * 1000000),300 + count));
	Account1.push(new Account(null,null,400 + count));
}

var sortedAccount = [];
var creditList = [];
var debitList = [];
var undefinedList = [];
for(var i = 0; i < Account1.length; i++){
	if(Account1[i].credit!=null){
		creditList.push(Account1[i]);
	}
	else if(Account1[i].credit ==null && Account1[i].debit!=null){
		debitList.push(Account1[i]);
	}
	else{
		undefinedList.push(Account1[i]);
	} 
}
function sortAccountNumber(a,b){
	return b.accountNumber - a.accountNumber;
}

creditList.sort(sortAccountNumber);
debitList.sort(sortAccountNumber);
undefinedList.sort(sortAccountNumber);
sortedAccount.push(creditList);
sortedAccount.push(debitList);
sortedAccount.push(undefinedList);

for(var i = 0; i < Account1.length; i++){
    console.log(Account1[i]); 
}      
for(var i = 0; i < Account1.length; i++){
    console.log(sortedAccount[i]);
} 
