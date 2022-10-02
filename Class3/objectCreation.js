my_list = [1, 2, 3];  //A list is accessed by index, It checks the value one by one
my_object = {"QC": "Quebec", "ON": "Ontario" }; //KEY , VALUE

console.log(my_object["ON"]);
console.log(my_object[1]); //This does not work bc. there is no such a key

const a = ()=>({"QC": "Quebec", "ON": "Ontario" });
console.log(a());
