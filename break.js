/*let i = 1;
while(i <= 200){
    console.log(i);
  if(i === 100){
    console.log('Breaking the loop at 100');
    break;
  }


    i++;
}
*/

let i = 1;
let sum = 0;
while(i <= 200){
    sum+= i
    
  if(sum >= 100){
    console.log('Breaking the loop at 100');
    break;
  }

    i++;
}
console.log(sum);