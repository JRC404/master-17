// delay measured in seconds, allowing a process to start later than usual

const blogPosts = [
    { title: 'Blog Post One', body: 'My first post'},
    { title: 'Blog Post Two', body: 'My second post'}
]

const getBlogPosts = () => {
    setTimeout(() => {
        console.log("Hello, David.")
    }, 2000);
    setTimeout(() => {
        console.log("Hello, Ian.")
    }, 4000);
    setTimeout( () => {
        console.log(blogPosts);
    }, 7000) // 5000 == 5 seconds
    // console.log(blogPosts)
}

const createBlogPost = (post) => {
    setTimeout(() => {
        console.log("I have been run.")
        blogPosts.push(post);
        // callback();
    }, 0);
}


getBlogPosts(); 
createBlogPost({ title: 'Blog Post Three', body: 'My third post'});

//* promises: resolve, reject, pending
//? promise pending

const waitTwoSeconds = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            let error = false;
            if(!error) {
                resolve('resolved, mate')
            }
            else {
                reject("Nope, see you later, mate.")
            }
        }, 1000);
    })
}

const asyncDemo = async () => {
    console.log('requested');
    const result = await waitTwoSeconds();
    console.log(result);
}

// asyncDemo();

// async = define a function as asynchronous
// await = wait for the code to finish doing what it is doing

// tomorrow, try - catch
// async with examples
// promises, why we don't use them that much