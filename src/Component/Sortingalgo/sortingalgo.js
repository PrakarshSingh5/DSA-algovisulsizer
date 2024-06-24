export function getMergeSort(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }

  export function getbubblesort(array){
        const animations=[];
        if(array.length<=1)return array;

        bubblesorthelper(array,animations);
        return animations;
  }
  function bubblesorthelper(mainArray, animations ){

      for(let i=0;i<mainArray.length-1;i++){
        for(let j=0;j<mainArray.length-i-1;j++){
          animations.push([j,j+1]); //these values are going to compare and push for changing color
          animations.push([j,j+1]) //again push them to revert their color
          if(mainArray[j]>mainArray[j+1]){
              animations.push([j,mainArray[j+1]]);  
              animations.push([j+1,mainArray[j]]);
              const val=mainArray[j];
              mainArray[j]=mainArray[j+1];
              mainArray[j+1]=val;
          }else {
              animations.push([j, mainArray[j]]);
              animations.push([j + 1, mainArray[j + 1]]);
          }
        }
      }
  }
export function getQuickSort(array) {
  const animations = [];
  if (array.length <= 1) return array;
  quickSort(array, 0, array.length - 1, animations);
  return animations;
}

function quickSort(array, startIdx, endIdx, animations) {
  if (startIdx < endIdx) {
      const pi = partition(array, startIdx, endIdx, animations);
      quickSort(array, startIdx, pi - 1, animations);
      quickSort(array, pi + 1, endIdx, animations);
  }
}

function partition(array, startIdx, endIdx, animations) {
  const pivot = array[endIdx];
  let i = startIdx - 1;
  for (let j = startIdx; j < endIdx; j++) {
      animations.push(["compare", j, endIdx]);
      animations.push(["revert", j, endIdx]);

      if (array[j] < pivot) {
          i++;
          animations.push(["swap", i, array[j]]);
          animations.push(["swap", j, array[i]]);
          swap(array, i, j);
      }
  }

  animations.push(["swap", i + 1, array[endIdx]]);
  animations.push(["swap", endIdx, array[i + 1]]);
  swap(array, i + 1, endIdx);
  return i + 1;
}


export function getheapSort(array){
    const animations=[];
    if(array.length<=1)return array;
    heapSort(array,animations,array.length);
    return animations;
    
}

function heapSort(array, animations, n){
      //build heap;
      for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(array,n,i,animations);
      }
      //one by one extract an element from heap
      for(let i=n-1;i>0;i--){
        animations.push(["swap",0,array[i]]);
        animations.push(["swap",i,array[0]]);
        swap(array,0,i);
        heapify(array,i,0,animations);
      }
}
function heapify(array,n,i,animations){
    let larg=i;
    const l=2*i+1;
    const r=2*i+2;
    //compare
    
    if(l<n&& array[l]>array[larg]){
      larg=l;
    }
    
    if(r<n && array[r]>array[larg]){
      larg=r;
    }
    if(larg!=i){
      animations.push(['compare', i, larg]);
      animations.push(['revert', i, larg]);
      animations.push(['swap', i, array[larg]]);
      animations.push(['swap', larg, array[i]]);
      swap(array,i,larg);

      heapify(array,n,larg,animations);
    }
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

