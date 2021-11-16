try {
    console.log(x);
} catch (e){
    if (e instanceof EvalError){
        console.log('EvalError')
    } else if (e instanceof RangeError){
        console.log('RangeError')
    } else if (e instanceof ReferenceError){
        console.log('ReferenceError')
    } else if (e instanceof SyntaxError){
        console.log('SyntaxError')
    } else if (e instanceof TypeError){
        console.log('TypeError')
    } else if (e instanceof URIError){
        console.log('URIError')
    } else{
        console.log('Error!')
    }
}