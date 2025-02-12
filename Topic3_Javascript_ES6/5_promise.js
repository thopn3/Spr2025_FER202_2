// Hàm xử lý tính toán theo hình thức bất đồng bộ (Asynchronous)
function proccessLinearEquation(a, b){
    return new Promise((resolve, reject) => {
        if(a===0){ // Rejection
            if(b===0)
                reject("PT có vô số nghiệm");
            else
                reject("PT vô nghiệm");
        }else{ // Resolve
            let x = -b/a;
            resolve(x.toFixed(2));
        }
    });
}

// Thực thi
proccessLinearEquation(10,7)
    .then(result => console.log(`Nghiệm của PT là: ${result}`))
    .catch(error => console.log(error));