
function palindromeVerify (verify){
    if(verify === verify.reverse){
        return true
    }
    else{
        return false
    }
}
console.log(palindromeVerify("arara"))