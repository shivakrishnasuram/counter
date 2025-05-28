// function rotateArray(array ,k){
//     let n=array.length
//     k = k % n
//     for(let i =0 ;i<k;i++){
//         let last =array[n-1]
//         for(let j =n-1;j>0;j--){
//             array[j]=array[j-1]
//         }
//         array[0]=last
//     }
//     return array
// }
// console.log(rotateArray([1,2,3,4,5,6,7],2))




function Person(name,age,surname){
    this.name=name;
    this.age=age;
    this.surname=surname;
    this.fullname=function(){
        console.log(this.name,this.age,this.surname)
    }
}
const person1 =new Person("shiva",45,"suram")
const personww =new Person("suram",55,"suramsk")
person1.fullname();
personww.fullname();