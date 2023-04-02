// function time(){
//   const dateTime = new Date();
//   const hours = document.querySelector('.hrs')
//   const minutes = document.querySelector('.min')
//   const seconds = document.querySelector('.sec')
//   const session = document.querySelector('.ses')
  
// hours.textContent = dateTime.getHours();
// minutes.textContent = dateTime.getMinutes();
// seconds.textContent = dateTime.getSeconds();



//   if(hours.textContent >= 12){
//     session.textContent = 'PM'
//   }else{
//     session.textContent = 'AM';
//   }
//    if(hours.textContent >12){
//     hours.textContent = hours.textContent -12;
//    }
 
// }

// setInterval(time, 10)


 const counter = () =>{

  const num = document.querySelector('h4');
  const btn1 = document.querySelector('.btn-1')
  const btn2 = document.querySelector('.btn-2')
  const btn3 = document.querySelector('.btn-3')

  let count = 0;
  btn1.addEventListener('click',()=>{
    num.textContent = count = count +1;
  })

  btn2.addEventListener('click',(e)=>{
    num.textContent = count = count * 0;
  })
  btn3.addEventListener('click',()=>{
    if(count>0){
      num.innerHTML = count = count -1;
    }
  })

  return count;
 }

 counter()
  

