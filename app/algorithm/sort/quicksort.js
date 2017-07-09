///////////////////////////////////////////////////////////////////
// quick sort functions
///////////////////////////////////////////////////////////////////

'use strict';
swap = function(list, srcIndex, destIndex) {
  var temp = list[srcIndex];
  list[srcIndex] = list[destIndex];
  list[destIndex] = temp;
};

partition = function(list, leftIndex, rightIndex) {
  var storeIndex = leftIndex;
  var pivot = list[rightIndex].key;
  for (var index  = leftIndex; index < rightIndex; index++) {
    if (list[index].key < pivot) {
      swap(list, storeIndex, index);
      storeIndex = storeIndex + 1;
    }
  }
  swap(list, rightIndex, storeIndex);
  return storeIndex;
};

sort = function(list, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return;
  }
  var storeIndex = partition(list, leftIndex, rightIndex);
  sort(list, leftIndex, storeIndex - 1);
  sort(list, storeIndex + 1, rightIndex);
};

qsort = function(arrayList) {
  sort(arrayList, 0, arrayList.length - 1);
  return arrayList;
};
