/* 
TODO: Promises, what they are and why we use them

? Buy a plane ticket with a seat allocation, the airline promises that you will get the allocated seat

*/

const blogPosts = [
    { title: 'Blog One' },
    { title: 'Blog Two' },
    { title: 'Blog Three' }
]

const getPosts = () => {
    setTimeout(() => {
        console.log(blogPosts);
    }, 2000); // 2000 == 2 seconds
}

const createPost = (post) => {
    return new Promise((resolve, reject) => {
        // promise is taking 2 parameters: 'resolve, reject'
        setTimeout(() => {
            blogPosts.push(post)
            const error = false;
            // faking a response from a server / api
            if(!error) { // if there isn't an error, run resolve
                resolve();
            } else { // if there is an error, run reject
                reject("Error, you messed up.");
            }
        }, 3000);
    })
}

getPosts() // shows three blog posts
createPost({ title: 'Blog Four' })
// getPosts() // shows four blog posts