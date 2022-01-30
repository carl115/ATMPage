const inputNumber = document.getElementById('money');
const btnTaken = document.getElementById('btn-take-out');
const ticketOne = document.getElementById('ticket-1');
const ticketTwo = document.getElementById('ticket-2');
const ticketThree = document.getElementById('ticket-3');
const amountTicketOne = document.querySelector('.amount-1');
const amountTicketTwo = document.querySelector('.amount-2');
const amountTicketThree = document.querySelector('.amount-3');
const error = document.getElementById('error');

class ticket {
    constructor(a, v) {
        this.amount = a;
        this.value = v;
    }
}

function amtG() {
    let money = parseInt(inputNumber.value);
    let total = 0;

    for (let i in tickets) {
        total += tickets[i].value * tickets[i].amount;
    }

    if (money > total || money < 0) {
        const paragraph = document.createElement("p");
        paragraph.innerHTML = "Error: value not valid";
        error.style.display = "block";
        error.appendChild(paragraph);
    }
    else {
        error.style.display = "none";

        for (let m in tickets) {
            let div = 0;
    
            if (money > 0) {
                if (money >= tickets[m].value) {
                    div = Math.floor(money / tickets[m].value);
                    tickets[m].amount - div;
                }
    
                if (div > 0) {
                    money = money - (div * tickets[m].value);
                }
            }
    
            let ticket;
            let amountT;
    
            switch (tickets[m].value) {
                case 50000:
                    console.log(ticket = ticketThree);
                    console.log(amountT = amountTicketThree);
                    generateT(div, ticket, amountT);
                    break;
                case 20000:
                    console.log(ticket = ticketTwo);
                    console.log(amountT = amountTicketTwo);
                    generateT(div, ticket, amountT);
                    break;
                case 10000:
                    console.log(ticket = ticketOne);
                    console.log(amountT = amountTicketOne);
                    generateT(div, ticket, amountT);
                    break;
                default: console.log('Error in the machine');
                    break;
            }
        }
    }
}

function generateT(d, t, aTick) {
    if (d > 0) {
        t.style.display="block";
        aTick.innerHTML = d;
    }
    else if (d <= 0) {
        t.style.display="none";
    }
}

const tickets = [];

//280
let ticketFifThou = new ticket(4, 50000);
let ticketTwenThou = new ticket(3, 20000);
let ticketTenThou = new ticket(2, 10000);

tickets.push(ticketFifThou, ticketTwenThou, ticketTenThou);

btnTaken.addEventListener('click', amtG);