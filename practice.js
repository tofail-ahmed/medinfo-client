// * 1
const cameCase=()=>{
      const favFood="biriyani"
      const favDrink="borhani"
      console.log(favFood+"+"+favDrink)
}

// cameCase()


// * 2
const camelcase=()=>{
      const favFood="Biriyani"
      const favDrink="Borhani"
      console.log(favFood+"+"+favDrink)
}

// camelcase()

const city="ctg"
const City="dhaka"
// console.log(city,City)

const fatherAge="55"
const sonAge="22"
const fatherAgeNumber=parseInt(fatherAge)
const sonAgeNumber=parseInt(sonAge)



// console.log(typeof(fatherAgeNumber))
// console.log(typeof(sonAgeNumber))
// console.log(fatherAgeNumber+sonAgeNumber)



// console.log(20==="20")
// console.log("true"==true)
//  for(let i=0,j=0;i<=10 && j<=10;){
      
      // console.log("i--->",++i);
      // console.log("j--->",++j);
//  }
//  console.log( 10 != 10 )
// console.log(10!=="10")

// console.log("apple"=="APPLE")
// console.log("orange"=="ORANGE")

if("apple"=="Apple"){
      // console.log("apple and Appleare not same")
}

let muttonBiriyani=250;
if(muttonBiriyani>300){
      // console.log("Mutton biriyani costs too high and its BDT",muttonBiriyani)
}

if(muttonBiriyani>350){
      // console.log("Mutton Biriyani costs too high and its BDT",muttonBiriyani)
}else{
      // console.log("Mutton Biriyani costs reasonable price and its less than 350")
}

const eidToday=true;
if(eidToday){
      // console.log("Today is eid day")
}else{
      // console.log("Today is not eid day")
}


const cost=50;
if (cost < 30) {
  // console.log("Riksha mama cholo DC park")
} else {
  // console.log("Walking is a good exercise")
}

const salary = 62000;
const BCS = false;
const height = 5.8;
if (salary > 50000 && BCS) {
  // console.log("Osthir pola...")
} else {
  // console.log("dhure jaya mor beta...")
}

if ((salary > 40000 && BCS) || (salary > 50000 && height > 5.5)) {
  // console.log("Sei sei pola... agun...")
} else {
  // console.log("balish er niche matha diya ghumaw ...")
}

const price = 462;
const discount10 = 0.1;
const discount15 = 0.15;
if (price >= 5000) {
  if (price >= 10000) {
    const pay = price - price * discount15;
    //     console.log("You got 15% discount, Please pay", pay);
  } else {
    const pay = price - price * discount10;
    //     console.log("You got 10% discount, Please pay", pay);
  }
} else {
  //   console.log("You rae not eligible for discount .Please pay", price);
}

{
  const bill = 5000;
  const age = 8;
  const disc50 = 0.5;
  const disc100 = 0;
  if (age <= 12) {
    const pay = bill - bill * disc100;
    // console.log("Enjoy 100% discount😁");
  } else if (age >= 60) {
    const pay = bill - bill * disc50;
    // console.log("enjoy 50% discount, net payable", pay);
  } else {
    const pay = bill;

    // console.log(" net payable", pay);
  }
}


{
 
let isLeader=false;
if(!isLeader){
  // console.log("yay desh amar baper...")
}
}


 {
   const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  //  console.log(numbers[9]);
  const friends=["rahim","karim","hasan","ikram"]
  // console.log(friends[1])   //karim
  numbers[0]=100;
  // console.log(numbers)
  // console.log(friends[7])
 }