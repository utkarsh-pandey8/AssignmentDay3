//working with boolean
var booleanVariable:boolean = true
console.log(booleanVariable)

booleanVariable = false
console.log(booleanVariable)

//------------------------------------------------------------------------------

//working with 'any'
var anyVariable:any = 12        //datatype is number
console.log(anyVariable)

anyVariable = 'hello world'     //datatype is string
console.log(anyVariable)

anyVariable = true              //datatype is boolean
console.log(anyVariable)

anyVariable = [12,33,56,32,1]   //datatype is object
console.log(anyVariable)

//------------------------------------------------------------------------------

//array of strings
var arrayOfStrings : object = ["React", "Next", "Angular", "JavaScript", "TypeScript", "Tailwind"]
console.log(arrayOfStrings)
console.log(arrayOfStrings[3])

//------------------------------------------------------------------------------

//Heterogeneous Array
var heterogeneousArray : object = [12, true, 'Utkarsh',55.0, false]
console.log(heterogeneousArray)
console.log(typeof heterogeneousArray[1])
console.log(typeof heterogeneousArray[2])
console.log(typeof heterogeneousArray[3])

//------------------------------------------------------------------------------

//Commands to run TypeScript on VS Code console
//Compile TS to JS -> tsc task1.ts
//run task1.js on the console -> node task1.js