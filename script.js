let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("First promise resolved");
    }, 3000);
});

promise.then((res) => {
    console.log(res);
    let secondPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Second promise resolved");
        }, 2000);
    });
    return secondPromise;   
})
.then((res) => {
    console.log(res);
    let thirdPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Third promise resolved");
        }, 1000);
    });
    return thirdPromise;
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.error("Error occurred:", err);
});