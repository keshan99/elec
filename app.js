const container = document.querySelector(".container");
const R1 = document.getElementById('R1');
const R2 = document.getElementById('R2');
const pickres = document.getElementById('pickres');

var vr = +pickres.value;
var r1 = 0;
var r2 = 0;
var b = 0;
var r11 = 0;
var r12 = 0;
var r21 = 0;
var r22 = 0;
var r31 = 0;
var r32 = 0;

function myFunction() {
    calres();
    if(r1 == r11){
        r1 = r21;
        r2 = r22;
        R1.innerHTML = r21;
        R2.innerHTML = r22;
    }
    if(r1 == r21){
        r1 = r31;
        r2 = r32;
        R1.innerHTML = r31;
        R2.innerHTML = r32;
    }
    if(r1 == r31){
        r1 = r21;
        r2 = r22;
        R1.innerHTML = r21;
        R2.innerHTML = r22;
    }

  }


function calres(){
    var a = [10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82];
    var min = 100;
    r11 = 0;
    r12 = 0;
    r21 = 0;
    r22 = 0;
    r31 = 0;
    r32 = 0;

    var x=0;
    var y=0;
    console.log('     new     ');

    for (let i = 0; i < a.length; i++) {
        x=a[i];
        for (let j = 0; j < a.length; j++) {
            y=a[j];
            b= 12*y/(x+y);
            //b = 12*j/(j + i);
            if (Math.abs(vr-b)<min) {
                min = Math.abs(vr-b);
                r11 = x;
                r12 = y;
                console.log('     -     ');
                console.log(x);
                console.log(y);
            }   
        }  
    }
    var min = 100;
    for (let i = 0; i < a.length; i++) {
        x=a[i];
        for (let j = 0; j < a.length; j++) {
            y=a[j];
            b= 12*y/(x+y);
            //b = 12*j/(j + i);
            if (Math.abs(vr-b)<min && x!=r11) {
                min = Math.abs(vr-b);
                r21 = x;
                r22 = y;
            }   
        }  
    }
    var min = 100;
    for (let i = 0; i < a.length; i++) {
        x=a[i];
        for (let j = 0; j < a.length; j++) {
            y=a[j];
            b= 12*y/(x+y);
            //b = 12*j/(j + i);
            if (Math.abs(vr-b)<min && x!=r21 && x!=r31) {
                min = Math.abs(vr-b);
                r31 = x;
                r32 = y;

            }   
        }  
    }
    if (r21 ==0) {
        r21 = r11;
        r22 = r12;
        r31 = r11;
        r32 = r12;
    }
    
    if (r31 ==0) {
        r31 = r11;
        r32 = r12;
    }

    r1 = r11;
    r2 = r12;
    R1.innerHTML = r11;
    R2.innerHTML = r12;



}

pickres.addEventListener('change',function(e){
  
 vr = +e.target.value;

  calres();

});



calres();

