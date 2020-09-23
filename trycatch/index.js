const blogPosts = [
    { title: 'Blog One' },
    { title: 'Blog Two' },
    { title: 'Blog Three' }
]

const getPosts = () => {
    console.log(blogPosts);
}

const createPost = (post) => {
    return new Promise((resolve, reject) => {
        // setTimeout(() => {
            const error = true;
            if(!error) { 
                blogPosts.push(post)
                resolve();
            } else {
                reject("Error, you messed up.");
            }
        // }, 1000);
    })
}

// try something... if it works... crack on...
// if it doesn't work, tell me. catch the error and show me the error.
createPost({title: 'Blog Four'});
const initialise = async () => {
    try {
        await createPost({title: 'Blog Four'});
        getPosts();
    } catch (error) {
        console.log(error)
    }
}

initialise()

createPost({title: 'Blog Five'}).then(getPosts).catch((err) => {
    console.log(err);
});

console.log(blogPosts);
