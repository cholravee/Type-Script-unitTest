

export function merge(collection_1: number[], collection_2: number[]) {
    var merge_collection_final: number[] = [];
    var i: number = 0;
    var j: number = 0;
  
    while (i < collection_1.length && j < collection_2.length) {
      if (collection_1[i] < collection_2[j]) {
        merge_collection_final.push(collection_1[i]);
        i++;
      } else {
        merge_collection_final.push(collection_2[j]);
        j++;
      }
    }
  
    while (i < collection_1.length) {
      merge_collection_final.push(collection_1[i]);
      i++;
    }
  
    while (j < collection_2.length) {
      merge_collection_final.push(collection_2[j]);
      j++;
    }
  
    return merge_collection_final;
  }
  
//var collection_1: number[] = [7, 8, 9, 10];
//var collection_2: number[] = [3, 4];
//
//console.log(merge(collection_1, collection_2));