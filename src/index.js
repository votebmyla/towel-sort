
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix == undefined || matrix.length == 0){
    return [];
  }
  for (let i = 0; i < matrix.length; i++){
    if( i % 2 == 1){
      matrix[i] = matrix[i].reverse();
    } else{
      matrix[i] = matrix[i];
    }
  }
  return matrix.flat();
}
