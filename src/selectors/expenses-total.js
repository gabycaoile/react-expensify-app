export default (expenses) => {
  if(expenses.length === 0){
    return 0;
  }
  return expenses.reduce((accumulator, {amount})=> {return accumulator + amount}, 0);
}