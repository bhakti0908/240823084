// 1 ODD EVEN
// const num=8
// if (num%2==0)
// {
//     console.log("Number is Even")
// }
// else
// {
//     console.log("Number is Odd")
// }
// console.log("Git Pull")






//2 Find the Maximum of Two Numbers
// var num1=12
// var num2=7

// if(num1>num2)
// {
//     console.log(num1+" is Greater than "+num2)
// }
// else
// {
//     console.log(num2+" is Greater than "+num1)
// }








// 3. Check Leap Year
// Definition: Check if a given year is a leap year.
// Input: 2020
// Output: Leap Year

// var year=2020

// if(year%4==0)
// {
//     console.log("Leap year")
// }
// else
// {
//     console.log("Not a Leap year")
// }






// 4. Sum of Natural Numbers
// Definition: Calculate the sum of the first n natural numbers.
// Input: 5
// Output: 15

// var num=5
// var sum=0

// for(var i=1;i<=num;i++)
// {
//     sum+=i
// }
// console.log("Sum of Natural number till "+num+" is "+sum)




// 5. Factorial of a Number
// Definition: Calculate factorial of a number.
// Input: 4
// Output: 24


// var num=4
// var fact=1
// for(var i=num;i>0;i--)
// {
//     fact*=i
// }
// console.log("Factorial of give number "+num+" is "+fact)



// 6. Print Multiplication Table
// Definition: Display multiplication table of a number up to 10.

// Input: 3
// Output: 3 x 1 = 3
// ...
// 3 x 10 = 30

// var num=3
// for(var i=1;i<=10;i++)
// {
    // console.log("3 * ",i," = ",num*i)

// }





// 7. Reverse a Number
// Definition: Reverse the digits of a number.
// Input: 1234
// Output: 4321


// var num=1289
// var rem=0
// var rev=0


// while(num!=0)
// {
//     rem=num%10
//     rev=rev*10+rem
//     num=Math.floor(num/10)
// }

//     console.log("Reversed string :"+rev)




// 8. Palindrome Check (Number)
// Definition: Check if a number reads the same backward.
// Input: 121
// Output: Palindrome

// var num=121
// var rem=0
// var rev=0
// var sam=num

// while(num!=0)
// {
//     rem=num%10
//     rev=rev*10+rem
//     num=Math.floor(num/10)
// }
// if(sam==rev)
// {
//     console.log("Palindrome :"+rev)
// }
// else{
//     console.log("Not Palindrome :"+rev) 
// }


// 9. Check Prime Number
// Definition: Check whether the input number is prime.
// Input: 11
// Output: Prime

// var num=12
// for(var i=2 ;i<=11;i++)
// {
//     if(num%i==0)
//     {
//         console.log("Not Prime")
//         break;
//     }
//     else{
//         console.log(" Prime")
//         break;
//     }
// }

// 10. Count Digits in a Number
// Definition: Count how many digits a number contains.
// Input: 5023
// Output: 4

// var num=12145165
// var count=0

// while(num!=0)
// {
//     num=Math.floor(num/10)
//     count++
// }

// console.log(count)

// 11. Sum of Digits
// Definition: Calculate the sum of all digits in a number.
// Input: 123
// Output: 6

// var num=123
// var rem=0
// var a=0
// var sam=num

// while(num!=0)
// {
//     rem=num%10
//     a+=rem
//     num=Math.floor(num/10)
// }
// console.log(a)

// 12. Check Armstrong Number
// Definition: Check if the number is equal to the sum of its digits each raised to the power of
// the number of digits.
// Input: 153
// Output: Armstrong

// var num=152
// var rem=0
// var a=0
// var len=num.toString().length
// while(num!=0)
// {
//     rem=num%10
//     a=a+(Math.pow(rem,len))
//     num=Math.floor(num/10)
// }
// if(a==num){
//     console.log("ArmStrong")
// }
// else{
//     console.log("Not ArmStrong")
// }


// 13. Generate Fibonacci Series
// Definition: Generate the first n Fibonacci numbers.
// Input: 5
// Output: 0 1 1 2 3

// var num=5
// var a=0
// var b=1
// var c=0
// console.log(a)
// console.log(b)
//  for(var i=0;i<=5;i++)
//  {
//     c=a+b
//     a=b
//     b=c   
//     console.log(c)
//  }

// 14. Check Vowel or Consonant
// Definition: Determine if a given character is a vowel.
// Input: a
// Output: Vowel

// 15. Simple Calculator
// Definition: Perform +, -, *, / between two numbers.
// Input: 4 + 2
// Output: 6

// 16. Find GCD (HCF)
// Definition: Calculate the greatest common divisor of two numbers.
// Input: 20 28
// Output: 4

var input="20 28"
var d=input.split(" ")
var num1=parseInt(d[0])
var num2=parseInt(d[1])

var div,num=0

if(num1<num2)
{
    num=num1
}
else
{
    num=num2
}

for(var i=2;i<=num;i++)
{
    if(num1%i==0 && num2%i==0)
    {
        div=i
    }
}
console.log(div)

// 17. Check Perfect Number
// Definition: A number whose sum of divisors equals itself.
// Input: 28
// Output: Perfect

// 18. Print All Divisors
// Definition: Display all positive divisors of a number.
// Input: 10
// Output: 1 2 5 10

// 19. Number is Positive, Negative or Zero
// Definition: Check if number is +ve, -ve, or zero.
// Input: -5
// Output: Negative

// 20. Find Power (Exponentiation)
// Definition: Compute a raised to the power b (a^b).
// Input: 2 3
// Output: 8