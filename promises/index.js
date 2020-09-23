/* 
TODO: Promises, what they are and why we use them

? Buy a plane ticket with a seat allocation, the airline promises that you will get the allocated seat

* resolved == fulfilled == successful

*/

const blogPosts = [
    { title: 'Blog One' },
    { title: 'Blog Two' },
    { title: 'Blog Three' }
]

const getPosts = () => {
    // setTimeout(() => {
    //     console.log(blogPosts);
    // }, 2000); // 2000 == 2 seconds
    console.log(blogPosts);
}

const createPost = (post) => {
    return new Promise((resolve, reject) => {
        // promise is taking 2 parameters: 'resolve, reject'
        setTimeout(() => {
            blogPosts.push(post)
            const error = true;
            // faking a response from a server / api
            if(!error) { // if there isn't an error, run resolve
                resolve();
            } else { // if there is an error, run reject
                reject("Error, you messed up.");
            }
        }, 3000);
    })
}

// getPosts() // shows three blog posts
// createPost({ title: 'Blog Four' }) // UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch().
// createPost({ title: 'Blog Four' }).then(getPosts).catch( (err) => {
//     console.log(err)
// })
// createPost({title: 'Blog Five'}).then(getPosts).catch((err) => {
//     console.log(err);
// });
//? if the createPost function is successful in delivering its promise, then run the getPosts method (resolve). If it is unsuccessful in delivering its promise, run the error... (rejection)

// createPost({ title: 'Blog Five' }).then(getPosts).catch( (e) => {
//     console.log(e)
// })
// console.log(blogPosts);
// getPosts() // shows four blog posts