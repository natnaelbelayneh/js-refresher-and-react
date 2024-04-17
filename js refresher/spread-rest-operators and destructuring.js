a = [1,2,3]

b = [4,5,6]

/**
 * TODO SPREAD OPERATOR
 */
// nested
// aAndC = [a,b]
// console.log(aAndC)

// to split the array elements and combine
// aAndC = [...a, ...b]
// console.log(aAndC)

// to combine array with other elements
// aAndC = [...a, 9,8,7]
// console.log(aAndC)


/**
 * TODO REST OPERATOR
 */
// function add(a,b){
//   return a + b
// }
// console.log(add(1,2))

// if count of parameters is unknown
// gives us an array of args
// function add(a,b,...args){
//   console.log(args)
// }

// add(1,2,3)


// using args for unknown number parameters
// function add(...args){
//   sum = 0
//   args.forEach(el=>sum+=el)
//   return sum
// }
// console.log(add(1,2,3))
// console.log(add(1,2,3,4,5,6))


// Notice: use them on the right most side if there are other parameters
// function add(a,b,...args){
//   sum = 0
//   args.forEach(el=>sum+=el)
//   console.log("this is a:",a ,"and b:",b)
//   return sum
// }
// console.log("sum:", add(10,2,3,3,3))