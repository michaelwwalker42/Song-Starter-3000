function createArray(string) {
    
    console.log(string.replace(/' '/gi, ',').replace(/' '/i, ''))
}

const string ='adbc d';

createArray(string);