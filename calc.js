let sum = [0,0,0],total;
// let pet_bot = document
//   .querySelector("#PET")
//   .addEventListener("change", function (e) {
//     sum[0]=(pet_bot.value)* 42;
//   });
// let plastc_bags = document
//   .querySelector("#PB")
//   .addEventListener("change", function (e) {
//     console.log((plastc_bags.value)* 7);
//   });
// let food_wrps = document
//   .querySelector("#FWRP")
//   .addEventListener("change", function (e) {
//     console.log((food_wrps.value)* 7);
//   });
// let yog_cont = document
//   .querySelector("#YC")
//   .addEventListener("change", function (e) {
//     console.log((yog_cont.value)* 130);
//   });
// let ctn_swb = document
//   .querySelector("#CS")
//   .addEventListener("change", function (e) {
//     console.log((ctn_swb.value)* 0.6);
//   });
// let detergent = document
//   .querySelector("#det")
//   .addEventListener("change", function (e) {
//     console.log((detergent.value)* 90);
//   });
// let shampo = document
//   .querySelector("#shampoo")
//   .addEventListener("change", function (e) {
//     console.log((shampo.value)* 50);
//   });
// let refill = document
//   .querySelector("#refil")
//   .addEventListener("change", function (e) {
//     console.log((refill.value)*10);
//   });
// let tb = document.querySelector("#tb").addEventListener("change", function (e) {
//   console.log((tb.value)*7);
// });
// let tp = document.querySelector("#tp").addEventListener("change", function (e) {
//   console.log((tp.value)*15);
// });
// let pb = document.querySelector("#pb").addEventListener("change", function (e) {
//   console.log((pb.value)*110);
// });
// let pc = document.querySelector("#pc").addEventListener("change", function (e) {
//   console.log((pc.value)*75.4);
// });
// let straw = document
//   .querySelector("#straw")
//   .addEventListener("change", function (e) {
//     console.log((straw.value)*0.4);
//   });
// let usethrow = document
//   .querySelector("#usethrow")
//   .addEventListener("change", function (e) {
//     console.log((usethrow.value)*6);
//   });
// for(let calc of sum){
//     console.log(calc);
// }

let style1=document.querySelectorAll(".style1");
console.log(style1);
for(let calc of style1){
calc.addEventListener("change",function(e){
    sum[0]=calc.value*10+sum[0];
})
}
let style3=document.querySelectorAll(".style3");
console.log(style3);
for(let calc of style3){
calc.addEventListener("change",function(e){
    sum[1]=calc.value*35+sum[1];
})
}
let style4=document.querySelectorAll(".style4");
console.log(style4);
for(let calc of style4){
calc.addEventListener("change",function(e){
    sum[2]=calc.value*50+sum[2];
})
}
let placeshow=document.querySelector("#total");
let show=document.createElement("h4");
let button = document
  .querySelector(".calc");

  button.addEventListener("click", function (e) {
    total=sum[0]+sum[1]+sum[2];
    show.innerText=total*365*0.0001;
    placeshow.append(show);
  });

