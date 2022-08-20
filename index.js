// Code your solution here
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(num.filter(function(num){
//     return (num > 5)
// }))
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(arr, str){

    return arr.filter(item => item==str)
}

function fuzzyMatch(arr, str){
    return arr.filter((item)=>{
        let word = item.split(',')
        return word.find(i => i[0]==str.charAt(0))
})
}
const driver = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


function matchName(arr, str){
  return arr.filter(item => item.name === str);
}
console.log(matchName(driver, "Bobby"))