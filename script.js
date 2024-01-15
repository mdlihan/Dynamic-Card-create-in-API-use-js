  //<div class="d1">
   // <h4>this is titel 1</h4>
   // <p>this is body 1</p>
   
 const fatchdata = async (config)=>{
   const res=await axios(config)
   return res.data
 }

var full=document.querySelector('.full')

const lodedata=async()=>{
 const posts = await  fatchdata ("https://jsonplaceholder.typicode.com/posts");
 
 posts.map((post)=>{
   const nowelement=document.createElement('div')
         nowelement.classList.add('d1')
        nowelement.innerHTML=` <h4>${post.title}</h4><p>${post.body}</p>`
        full.appendChild(nowelement)
 })
}

lodedata();