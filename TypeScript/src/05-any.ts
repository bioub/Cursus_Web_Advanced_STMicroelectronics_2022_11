
// si tsconfig contient noImplicitAny: false
// les params non typées sont typés any par défaut

function goodbye(param: any) {

}

goodbye(124);
goodbye([]);
