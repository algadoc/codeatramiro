function findInDicArray(searchvalue,variablesearch,array){
  for (var dic of array){
    if (dic[variablesearch] === searchvalue){
      return array.indexOf(dic);
    }
  }
  return -1;
}

export default findInDicArray;
