1. What will the following output?
```javascript
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);
```

2. What order will the numbers be printed out? 
```javascript
const test = () => {
    console.log(1);
    setTimeout(function(){console.log(2)}, 1000);
    setTimeout(function(){console.log(3)}, 0);
    console.log(4)
    setTimeout(function(){console.log(5)}, 50);
}
test()
```

3. What will the output be? 
```javascript 
console.log(false == '0');
console.log(false === '0');
```

4. What will this code log?
```javascript
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
```

5. What is the value of the below?
```javascript
console.log(typeof undefined == typeof NULL);
```

6. What would this come back with?
```javascript
console.log(typeof typeof 1);
```