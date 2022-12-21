//getting inputs from Dom
let billAmount=document.getElementById('billTotalInput');
let tipInput=document.getElementById('tipInput');
let numberOfPeopleDiv=document.getElementById('numberOfPeople');
let perPersonTotalDiv=document.getElementById('perPersonTotal');
let numberOfPeople=Number(numberOfPeopleDiv.innerText);



//------------------- CALCULATE BILLL-------------------

 const calculateBill =() =>
 {
      const bill=Number(billAmount.value);
      const tipPercentage= Number(tipInput.value)/100;
      const tip= tipPercentage*bill;
      const totalBill =bill+tip;
      const perPersonTotal=totalBill/numberOfPeople;
      perPersonTotalDiv.innerText=`₹ ${perPersonTotal.toFixed(2)}`;
      
} 
const increasePeople=()=>{
   numberOfPeople++;
   numberOfPeopleDiv.innerText=`${numberOfPeople}`;
   calculateBill();

}
const decreasePeople=()=>{
   if(numberOfPeople<=1){return;}
   numberOfPeople--;
   numberOfPeopleDiv.innerText=`${numberOfPeople}`;
   

}