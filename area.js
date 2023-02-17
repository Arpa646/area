const triangleCalculate=document.getElementById('triangleCalculate');
const RectangleCalculate=document.getElementById('RectangleCalculate');
const parallelogramCalculation=document.getElementById('parallelogramCalculation');
const rhombusCalculate=document.getElementById('rhombusCalculate');
const pentagoncalCulator=document.getElementById('pentagoncalCulator');
const ellipseCalculate=document.getElementById('ellipseCalculate');

const  triangleHeight=document.getElementById('triangleHeight');
const  triangleBase=document.getElementById('TriagleBase');


const rectAngleWidth=document.getElementById('rectAngleWidth');
const rectAngleLength=document.getElementById('rectAngleLength');  

const parallelogramBase=document.getElementById('parallelogramBase');  
const parallelogramHeight=document.getElementById('parallelogramHeight'); 

const d1=document.getElementById('d1');  
const d2=document.getElementById('d2');

const perimeter=document.getElementById('perimeter');  
const apotheme=document.getElementById('apotheme'); 

const a=document.getElementById('a');  
const b=document.getElementById('b');  



let serial=0;

function TakeInput(leftInput, rightInput){
    const leftInputInt=parseInt(leftInput.value);
    const  rightInputInt=parseInt(rightInput.value);
    leftInput.value='';
    rightInput.value='';
    if(leftInputInt<0|| rightInputInt<0 || isNaN(leftInputInt)|| isNaN(rightInputInt))
    {
        return alert('put validate number')
    }
    return [leftInputInt, rightInputInt];
}


function displaData(name,Area)
{ const display=document.getElementById('table-container');
const tr = document.createElement("tr");
    tr.innerHTML=`
  
    <td>${serial}  </td>
    <td>${name} </td>
    <td>${Area} CM</td>
    <td>
    <button class="btn btn-sm btn-red-500">Square</button>
    </td>
   
   
    `
    display.appendChild(tr)

}



triangleCalculate.addEventListener('click',function(){
//     const triangleHeightInt=parseInt(triangleHeight.value);
//    const  triangleBaseInt=parseInt(triangleBase.value);

  serial=serial+1;
    const [triangleBaseInt, triangleHeightInt] = TakeInput(triangleBase, triangleHeight);
    const Area=0.5* triangleBaseInt*triangleHeightInt
    console.log(Area);

  const name=document.getElementById('Triangle').innerText;
    
   
    displaData(name,Area)


 
})


RectangleCalculate.addEventListener('click',function(){
    serial=serial+1;
    const [rectAngleWidthInt, rectAngleLengthInt] = TakeInput(rectAngleWidth, rectAngleLength);
    const Area=rectAngleWidthInt*rectAngleLengthInt;
    const name=document.getElementById('Rectangle').innerText;
    displaData(name,Area);

})

parallelogramCalculation.addEventListener('click',function(){
    serial=serial+1;
    const [parallelogramBaseInt, parallelogramHeightInt] = TakeInput(parallelogramBase, parallelogramHeight);
    console.log(parallelogramBaseInt,parallelogramHeightInt);
    const Area=parallelogramBaseInt*parallelogramHeightInt;
    const name=document.getElementById('parallelogram').innerText;
    displaData(name,Area);

})



rhombusCalculate.addEventListener('click',function(){
    serial=serial+1;
    const [d1Int, d2Int] = TakeInput(d1, d2);
    const Area=0.5*d1Int*d2Int;
    const name=document.getElementById('rhombus').innerText;
    displaData(name,Area);
})

pentagoncalCulator.addEventListener('click',function(){
    serial=serial+1;
    const [perimeterInt, apothemeInt] = TakeInput(perimeter, apotheme);
    const Area=0.5*perimeterInt*apothemeInt;
    const name=document.getElementById('pentagon').innerText;
    displaData(name,Area);
})

ellipseCalculate.addEventListener('click',function(){
    serial=serial+1;
    const [aInt, bInt] = TakeInput(a, b);
    const Area=3.1416*aInt*bbInt;
    const name=document.getElementById('ellipse').innerText;
    displaData(name,Area);
})