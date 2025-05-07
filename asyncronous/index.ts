

// Promise

// const fetchData = () : Promise <string> => {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             const success = false
//             if(success){
//                 resolve ("Data fetched sucessfully")
//             }else{
//                 reject ("Error fetching data")
//             }
//         }, 1000)
//     })
// }

// fetchData()
// .then(result => console.log(result))
// .catch(error => console.log(error))


// Promise that resolves to a string

const fetchData = () : Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve ("Data fetched successfully")
        },100)
    })
}

fetchData()
.then(result => console.log(result))




export {}