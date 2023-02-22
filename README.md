# Module 2 - Javascript Operators & Control Flow

## List the symbols for each of the below Javascript operators

1. Arithmetic Operators:
    +, -,*, /, %, **, ++,--

2. Assignment Operators:
    =, +=, -=, *=, /=

3. Comparison Operators:
    ==, ===, !=, !==, >, <, >=, <=

4. Logical Operators:
    &&, ||, !

5. Bitwise Operators:
    &, |, ^, ~, <<, >>, >>>

## For each JavaScript Operator, write 2 examples

#### Arithmetic

```JavaScript
 //modulus
    const num1 = 12
    const num2 = 5

    let addition = num1 % num2
    console.log(addition);

 //increment
    for(let i = 0; i < 5; i++) {
        console.log(i);
    }
```

#### Assignment 

```JavaScript
 //assignment
    let name, track;
    name = "Allen"
    track = "Backend Development"

 //-=
    let count = 20
    count -= 10; 
    console.log(count)
```

#### Comparison

```JavaScript
 //equality (data type and values)
    let equality = 15 === "15"? true : false;
    console.log(equality)

 //-=
    let age = 54;
    
    goldenJubilee = () => {
        if (age !== 50) {
            console.log("Not eligible for golden jubilee")
        } else {
            console.log("Happy Golden Jubilee!")
        }
    }
    goldenJubilee();
```

#### Logical 

```JavaScript
 // AND
 const logic1 = (24 === 24 && 24 === 24) ? true : false;
 console.log(compare1);

 // OR
 const logic2 = (24 === 14 || 24 === 22) ? true : false;
 console.log(logic2);
```

#### Bitwise 

```JavaScript
 // AND
 const logic1 = (24 === 24 && 24 === 24) ? true : false;
 console.log(compare1);

 // OR
 const logic2 = (24 === 14 || 24 === 22) ? true : false;
 console.log(logic2);
```

## What is the result when the following program is executed?

```JavaScript
 for(let i = 1; i < 20; i += 7) {
    console.log(i);
 }

 // Answer
 1
 8
 15
```