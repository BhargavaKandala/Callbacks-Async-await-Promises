function getUserDetails(id){
    return new Promise((resolve, reject) => {
        console.log("fun1 is called");
        resolve({Rollnumber: "321"});
    });
}

function getUserSubjects(userroll){
    return new Promise((resolve, reject) => {
        console.log("fun2 is called");
        resolve({SubID : "345"});
    })
}
function getUserMarks(subid){
    return new Promise((resolve, reject) => {
        console.log("fun3 is called");
        resolve({Marks: "99"});
    })
}

getUserDetails("123").then((result)=> {
    return getUserSubjects(result.Rollnumber)
}).then((result) => {
    return getUserMarks(result.SubID)
}).then((result) => console.log(result))
  .catch((error) => console.log(error));

const p1 = new Promise((resolve, reject) => {
    if(true){
        resolve("Promise Resolved");
    }else {
        reject("Unexpected error has occured");
    }
});

p1.then((result) => console.log("result: ", result))
        .catch((error) => console.log(error));


// Today's class:

function getUserDetails(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({username: "345"});
        }, 2000);
    })
}

const myfun = async() => {
    console.log("123");
    const result = await getUserDetails("123");
    console.log(result);
    console.log("456");
};

myfun();

