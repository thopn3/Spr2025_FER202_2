async function proccessLinearEquation(a, b){
    if(a===0){
        if(b===0)
            throw new Error("PT có vô số nghiệm");
        else
            throw new Error("PT vô nghiệm");
    }else{
        let x = -b/a;
        return x.toFixed(2);
    }
}

async function callLinearEquation(a, b){
    try {
        const result = await proccessLinearEquation(a, b);
        console.log(`Nghiệm là: ${result}`);
    } catch (error) {
        console.log(error.message);
    }
}

callLinearEquation(17,10);