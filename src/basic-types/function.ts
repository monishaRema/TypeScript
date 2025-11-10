// Function

// arrow function , normal function

function addNormal(num1:number,num2:number){
    return num1 + num2
}

addNormal(2,2)

const addArr = (num1:number,num2:number) :
number =>num1 + num2;

addArr(5,5)

// object => function => method

const user3 = {
    name:"Moni",
    balance: 0,
    addBalance(value:number): number {
        const totalBalance = this.balance + value
        return totalBalance
    }
}

user3.addBalance(10)
     

// call back function

const arr : number[] = [2,4,6];

const sqrArr = arr.map((elem:number): number => elem * elem);


