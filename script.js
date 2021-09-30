
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
    
        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));
                    
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
        
    return array;
 }
let door = ['G','G','C'];

let open = 0;
let insideDoor = shuffleArray(door);
let choose = 1;
let currentdoor = 0;
let disable = 1;
let d1 = document.getElementById('d1');
let d2 = document.getElementById('d2');
let d3 = document.getElementById('d3');
let btnYes = document.querySelector('.btn-yes');
let btnNo= document.querySelector('.btn-no');
let r = document.querySelector('.current-score');
let btnReset = document.querySelector('.btn-reset');



d1.addEventListener('click', function(){
    disable = 0;
    currentdoor = open =1;
    if(choose === 1){
        if (insideDoor[0] === 'C'){
            d2.src ="images/DoorG.png";
            r.textContent = "Do you want to switch?";
                
        } else if(insideDoor[0] ==='G'){
            if(insideDoor[1] === 'G'){
                d2.src ="images/DoorG.png";
                r.textContent = "Do you want to switch?";
            } else if(insideDoor[2] === 'G') {
                d3.src ="images/DoorG.png";
                r.textContent = "Do you want to switch?";
            }
        }
    }else if(choose === 2){
        secondChoose(open);
    }

});
d2.addEventListener('click', function(){
    disable = 0;
    currentdoor = open =2;
    if(choose === 1){
        if (insideDoor[1] === 'C'){
            d3.src ="images/DoorG.png";
            r.textContent = "Do you want to switch?";
        } else if(insideDoor[1] ==='G'){
            if(insideDoor[0] === 'G'){
                d1.src ="images/DoorG.png";
                r.textContent = "Do you want to switch?";
            } else if(insideDoor[2] === 'G') {
                d3.src ="images/DoorG.png";
                r.textContent = "Do you want to switch?";
            }
        }
    }else if(choose === 2){
        secondChoose(open);
    }
});
d3.addEventListener('click', function(){
    disable = 0;
    currentdoor = open =3;
    if(choose === 1){
        if (insideDoor[2] === 'C'){
            d1.src ="images/DoorG.png";
            r.textContent = "Do you want to switch?";
        }else if(insidDoor[2] ==='G'){
            if(insideDoor[0] === 'G'){
                d1.src ="images/DoorG.png";
                r.textContent = "Do you want to switch?";
            } else if(insideDoor[1] === 'G') {
                d2.src ="images/DoorG.png";
                r.textContent = "Do you want to switch?";
            }
        }
    }else if(choose ===2){
        secondChoose(open);    
    }
});

btnYes.addEventListener('click', function(){
    if(disable === 0){
        r.textContent ="Choose a Door again!";
        choose = 2;
    }
});

btnNo.addEventListener('click',function() {
    if(disable === 0){
        if (insideDoor[currentdoor -1] === 'C'){
            if(currentdoor === 1)
                d1.src ="images/DoorC.png";
            else if(currentdoor === 2)
                d2.src ="images/DoorC.png";
            else if(currentdoor === 3)
                d3.src ="images/DoorC.png";
            r.textContent = "You Won!";
        }else if(insideDoor[currentdoor -1] ==='G'){
            if(currentdoor === 1)
                d1.src ="images/DoorG.png";
            else if(currentdoor === 2)
                d2.src ="images/DoorG.png";
            else if(currentdoor === 3)
                d3.src ="images/DoorG.png";
            r.textContent = "You Lost!";
        }
        disable = 1;
    }
});

btnReset.addEventListener('click', function() {
    r.textContent ="Choose a Door!";
    choose = 1;
    d1.src ="images/Door.png";
    d2.src ="images/Door.png";
    d3.src ="images/Door.png";
    insideDoor = shuffleArray(door);
    disable = 1;
});

function secondChoose(o) {
    if (insideDoor[o-1] === 'C'){
        if(o === 1)
            d1.src ="images/DoorC.png";
        else if(o === 2)
            d2.src ="images/DoorC.png";
        else if(o === 3)
            d3.src ="images/DoorC.png";
        r.textContent = "You Won!";
    }else if(insideDoor[o-1] ==='G'){
        if(o === 1)
            d1.src ="images/DoorG.png";
        else if(o === 2)
            d2.src ="images/DoorG.png";
        else if(o === 3)
            d3.src ="images/DoorG.png";
        r.textContent = "You Lost!";
    }
}
