let count = 0;
function countFunction(){
    if(i <= 5){
        count  = i;
        return count;
    }
    return count;
}
let i = 0;
function number(){
    i++;
    countFunction();
    return i;
}
function universal(){
    const findId = document.getElementById('final-selected-player');
    return findId;
}
            // one
document.getElementById('first-button').addEventListener('click',function(){
    const firstValue = document.getElementById('first-name');
    const li1 = document.createElement('li');
    const li11 = document.createElement('li');
    const serial = number();
    if(serial <= 5){
        li11.innerText = serial;
        const serial1 = universal();
        serial1.appendChild(li11);
        li1.innerText = firstValue.innerText;
        const firstfunction = universal(); 
        firstfunction.appendChild(li1);
    }
    else{
        alert('You should not add more than 5 player');
    }
    const firstButton = document.getElementById('first-button');
    firstButton.setAttribute('disabled',true);
    firstButton.style.backgroundColor = '#8E8B8B'; 
})
                    // Two
document.getElementById('second-button').addEventListener('click',function(){
    const secondValue = document.getElementById('second-name');
    const li2 = document.createElement('li');
    const li12 = document.createElement('li');
    const serial2 = number();
    if(serial2 <= 5){
        li12.innerText = serial2;
        const serial3 = universal();
        serial3.appendChild(li12);
        li2.innerText = secondValue.innerText;
        const secondfunction = universal(); 
        secondfunction.appendChild(li2);
    }
    else{
        alert('You should not add more than 5 player');
    }
    const secondButton = document.getElementById('second-button');
    secondButton.setAttribute('disabled',true);
    secondButton.style.backgroundColor = '#8E8B8B';
})


            // Three
document.getElementById('third-button').addEventListener('click',function(){
    const thirdValue = document.getElementById('third-name');
    const li3 = document.createElement('li');
    const li13 = document.createElement('li');
    const serial4 = number();
    if(serial4 <= 5){
        li13.innerText = serial4;
        const serial5 = universal();
        serial5.appendChild(li13);

        li3.innerText = thirdValue.innerText;
        const thirdfunction = universal(); 
        thirdfunction.appendChild(li3);
    }
    else{
        alert('You should not add more than 5 player');
    }
    const thirdButton = document.getElementById('third-button');
    thirdButton.setAttribute('disabled',true);
    thirdButton.style.backgroundColor = '#8E8B8B';
})
            // four
document.getElementById('fourth-button').addEventListener('click',function(){
    const fourthValue = document.getElementById('fourth-name');
    const li4 = document.createElement('li');
    const li14 = document.createElement('li');
    const serial6 = number();
    if(serial6 <= 5){
        li14.innerText = serial6;
        const serial7 = universal();
        serial7.appendChild(li14);
        li4.innerText = fourthValue.innerText;
        const fourthfunction = universal(); 
        fourthfunction.appendChild(li4);
    }
    else{
        alert('You should not add more than 5 player');
    }
    const fourthButton = document.getElementById('fourth-button');
    fourthButton.setAttribute('disabled',true);
    fourthButton.style.backgroundColor = '#8E8B8B';
})

                // five
document.getElementById('fifth-button').addEventListener('click',function(){
    const fifthValue = document.getElementById('fifth-name');
    const li5 = document.createElement('li');
    const li15 = document.createElement('li');
    const serial8 = number();
    if(serial8 <= 5){
        li15.innerText = serial8;
        const serial9 = universal();
        serial9.appendChild(li15);
        li5.innerText =  fifthValue.innerText;
        const fifthfunction = universal(); 
        fifthfunction.appendChild(li5);
    }
    else{
        alert('You should not add more than 5 player');
    }
    const fifthButton = document.getElementById('fifth-button');
    fifthButton.setAttribute('disabled',true);
    fifthButton.style.backgroundColor = '#8E8B8B';
})

                // sixth
document.getElementById('sixth-button').addEventListener('click',function(){
    const sixthValue = document.getElementById('sixth-name');
    const li6 = document.createElement('li');
    const li16 = document.createElement('li');
    const serial10 = number();
    if(serial10 <= 5){
        li16.innerText = serial10;
        const serial11 = universal();
        serial11.appendChild(li16);
        li6.innerText = sixthValue.innerText;
        const sixthfunction = universal(); 
        sixthfunction.appendChild(li6);
    }
    else{
        alert('You should not add more than 5 player');
    }
    const sixthButton = document.getElementById('sixth-button');
    sixthButton.setAttribute('disabled',true);
    sixthButton.style.backgroundColor = '#8E8B8B';
})
                    // seven
document.getElementById('seventh-button').addEventListener('click',function(){
    const seventhValue = document.getElementById('seventh-name');
    const li7 = document.createElement('li');
    const li17 = document.createElement('li');
    const serial12 = number();
    if(serial12 <= 5){
        li17.innerText = serial12;
        const serial13 = universal();
        serial13.appendChild(li17);
        li7.innerText = seventhValue.innerText;
        const seventhfunction = universal(); 
        seventhfunction.appendChild(li7);
    }
    else{
        alert('You should not add more than 5 player');
    }
    const seventhButton = document.getElementById('seventh-button');
    seventhButton.setAttribute('disabled',true);
    seventhButton.style.backgroundColor = '#8E8B8B';
})
            // eight
document.getElementById('eight-button').addEventListener('click',function(){
    const eightValue = document.getElementById('eight-name');
    const li8 = document.createElement('li');
    const li18 = document.createElement('li');
    const serial14 = number();
    if(serial14 <= 5){
        li18.innerText = serial14;
        const serial19 = universal();
        serial19.appendChild(li18);
        li8.innerText = eightValue.innerText;
        const eightfunction = universal(); 
        eightfunction.appendChild(li8);
    }
    else{
        alert('You should not add more than 5 player');
    }
    const eightButton = document.getElementById('eight-button');
    eightButton.setAttribute('disabled',true);
    eightButton.style.backgroundColor = '#8E8B8B';
})
                    // nine
document.getElementById('nineth-button').addEventListener('click',function(){
    const ninethValue = document.getElementById('nineth-name');
    const li9 = document.createElement('li');
    const li19 = document.createElement('li');
    const serial15 = number();
    if(serial15 <= 5){
        li19.innerText = serial15;
        const serial20 = universal();
        serial20.appendChild(li19);
        li9.innerText = ninethValue.innerText;
        const ninethfunction = universal(); 
        ninethfunction.appendChild(li9);
    }
    else{
        alert('You should not add more than 5 player');
    }
    const ninethButton = document.getElementById('nineth-button');
    ninethButton.setAttribute('disabled',true);
    ninethButton.style.backgroundColor = '#8E8B8B';
})


document.getElementById('Calculate').addEventListener('click',function(){
    const fore = countFunction();
    const perPlayer = document.getElementById('perPlayer');
    const perPlayerExpenses = perPlayer.value;
    if(isNaN(perPlayerExpenses)){
        alert('Please provide a valid number in per player section');
        return;
    }
    const playerExpenses = perPlayerExpenses * fore;
    const expenses = document.getElementById('player-expenses');
    expenses.innerText = playerExpenses;
    perPlayer.value = '';
    document.getElementById('Calculate-total').addEventListener('click',function(){
        const manager = document.getElementById('manager');
        const managerExpensesString = manager.value;
        if(isNaN(managerExpensesString)){
            alert('Please provide a valid number in manager section');
            return;
        }
        const managerExpensesFloat = parseFloat(managerExpensesString);
        manager.value = '';
        const coach = document.getElementById('Coach');
        const coachExpensesString = coach.value;
        if(isNaN(coachExpensesString)){
            alert('Please provide a valid number in coach section');
            return;
        }
        const coachExpensesFloat = parseFloat(coachExpensesString);
        coach.value = '';
        const totalExpenses = document.getElementById('overall-total');
        const overallExpenses = playerExpenses + managerExpensesFloat + coachExpensesFloat;
        if(isNaN(overallExpenses)){
            alert('Please check your all information & provide valid information');
            return;
        }
        else if(overallExpenses >= 1000000){
            const million = overallExpenses / 1000000;
            totalExpenses.innerText = million +' Million';
        }
        else{
            totalExpenses.innerText = overallExpenses;
        }
    })   
})
