function funName(str)
{
    let sum=0 ;
  for(const char of str)
  {
   
    if(char==="a" || char==="e" || char==="i"|| char==="o" || char==="u")
    {
       sum++ ;
    }
  }
  return sum;
}
let res=funName("hello");

console.log(res);
