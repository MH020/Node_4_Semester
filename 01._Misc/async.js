function myPromise(){
    return new Promise(() => {
        try {
            setTimeout("something good", 200)
        resolve()

        } catch (error) {
            reject("something bad ")
        }  
    })
}
myPromise(); 