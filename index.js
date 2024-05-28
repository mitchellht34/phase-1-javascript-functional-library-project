function makeArray(collection){
    if(Array.isArray(collection)){
        return collection;
    }
    else{
        return Object.values(collection)
    }
}

function myEach(collection, callback){
    const array = makeArray(collection);

    for(let i = 0; i < array.length; i++){
        callback(array[i]);
    }

    return collection;
}

function myMap(collection, callback){
    const array = makeArray(collection);
    const newArray = [];

    for(let i = 0; i < array.length; i++){
        newArray[i] = callback(array[i]);
    }

    return newArray;
}

function myReduce(collection, callback, acc){
    let array = makeArray(collection);

    if(!acc){
        acc = array[0];
        array = array.slice(1);
    }

    for(let i = 0; i < array.length; i++){
        acc = callback(acc, array[i], array)
    }

    return acc;
}

function myFind(collection, predicate){
    const array = makeArray(collection);

    for(let i = 0; i < array.length; i++){
        if(predicate(array[i])){
            return array[i];
        }
    }
}

function myFilter(collection, predicate){
    const array = makeArray(collection);
    const newArray = [];

    for(let i = 0; i < array.length; i++){
        if(predicate(array[i])){
            newArray.push(array[i]);
        }
    }

    return newArray;
}

function mySize(collection){
    const array = makeArray(collection);

    return array.length;
}

function myFirst(array, n){
    return n ? array.slice(0, n) : array[0];
}

function myLast(array, n){
    return n ? array.slice(-n) : array[array.length - 1];
}

function myKeys(object){
    const array = [];
    
    for(const key in object){
        array.push(key)
    }

    return array;
}

function myValues(object){
    const array = [];
    
    for(const key in object){
        array.push(object[key])
    }

    return array;
}