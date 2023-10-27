function insertionSort() {
    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i];
    
        for (var j = i - 1; j > -1 && arr[j] > curr; j--) {
          arr[j + 1] = arr[j];
        }
    
        arr[j + 1] = curr;
      }
    
      return arr;
}

module.exports = insertionSort;