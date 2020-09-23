const demo = (age) => {
    alert(`You are ${age} years old.`)
    console.log(`You are ${age} years old.`)
}

const userInput = (callback) => {
    let age = prompt("Please tell me your age.")
    console.log(age)
    callback(age)
}

userInput(demo)

const blogPosts = [
    { title: 'Blog One' },
    { title: 'Blog Two' },
    { title: 'Blog Three' }
]

const getPosts = () => {
    setTimeout( () => {
        console.log(blogPosts);
    }, 1000)
}

const createPost = (post, callback) => {
    setTimeout(() => {
        blogPosts.push(post)
        callback()
    }, 5000)
}
createPost({title: 'Blog Four'}, getPosts);