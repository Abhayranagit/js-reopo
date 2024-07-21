//stack => passing the copy not the refrence i.e the actual value will be remain as it is
let  x= "abhay"
let y= x
console.log(y)
console.log(x)
y="rana"// value will only change on the copy of the x given to y 
console.log(x)
console.log(y)
//heap=>refrencee will  pass to actual value hence if any change occurs then teh actual value also change(use for non -primitive datatypes)
let accountId={
    email:"abahyrana@gmail.com",
    upi:"abay@sbi"
}
let accountId2= accountId
accountId2.email="abhayranaji@faml.com"
console.log(accountId.email)//change occur in  acoountId2 will change the values in accountId 