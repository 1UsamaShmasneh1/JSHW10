const posts = [
    { title: ' Post 1 ', body: ' this is post 1'},
    { title: ' Post 2 ', body: ' this is post 2'},
];

function getPosts() {
    
    setTimeout( () => {
        let output = '';

        posts.forEach( (post, index) => {
            output += `<li>${post.title}</li>`;
        } );
    
        document.body.innerHTML = output;
    }, 3000);
}

function createPost( post ) {
    return new Promise( (resolve, reject ) =>{
        setTimeout( () =>{
            
            posts.push(post);

            let error = false;

            if (!error)  { // הכל תקין
                resolve();
            } else {
                reject("there is an error");
            }
       }, 2000);
    } );
}

async function init(){
    try{
        await createPost({title: 'post 3', body: 'this is post 3'});
        getPosts();
    } catch (error){
        console.log("error: " + error)
    }
}

