import express, { request, response } from "express";

const app =express();
app.use(express.json());
const logginMiddlewar=(request,response,next) =>{
    console.log(`${request.method}-${request.url}`);
    next();
};

// app.use(logginMiddlewar);


const resolveIndexByUserId=(request,response,next)=>{
    const{
        body,
        params:{id},
    }=request;
    const parsedId=parseInt(id);
    if(isNaN(parsedId)) return response.sendstatus(400);
    const findeUsersIndex=mockUsers.findIndex(
        (user)=>user.id===parsedId);
        if(findeUsersIndex=== -1)return response.sendstatus(404);
        request.findeUsersIndex=findeUsersIndex;
       next(); 
}


const Port=Process.env.Port||3000;
const mockUsers=[
    {id:1,username:"anson",displayName:"Anson"},
    {id:2,username:"jack",displayName:"Jack"},
    {id:3,username:"adam",displayName:"Adam"},
    {id:4,username:"tina",displayName:"Tina"},
    {id:5,username:"jason",displayName:"Jason"},
    {id:6,username:"marilyn",displayName:"Marilyn"},
    {id:7,username:"henry",displayName:"Henry"},
]


app.listen(Port,()=>{
    console.log(`Running on Port ${Port}`)
});


    
    
    app.get(
        "/",
        (request,response,next)=>{
            console.log("Base URL 1");
            next()
        },
        (request,response,next)=>{
console.log("Base URL 2");
next()
        },
        (request,response,next)=>{
            console.log("Base URL 3");
            next()
                    },
                    (request,response)=>{
                        response.status(201).send({msg:"hello"})
                    }

    )






app.get('/api/users',(request,response)=>{
    console.log(request.query);
    const{ query:{filter,value},}=request;
if(filter&& value) return  response.send(
    mockUsers.filter((user)=>user[filter].includes(value))
);
return response.send(mockUsers)
});

app.use(loggingMiddleware,(request,response,next)=>{
console.log("Finished Logging...");
next();
}); 











app.get('/api/products',(request,response)=>{
    response.send([{id:123,name:'chicken breast',price:12.99}])
})



app.post("/api/users",(request,response)=>{
    console.log(request.body);
    const{body}=request;
    const newUsers={id:mockUsers[mockUsers.length-1].id+1,...body};
    mockUsers.push(newUsers);
    return response.status(201).send(newUsers);
    
})


app.get('/api/users/:id',resolveIndexByUserId,(request,response)=>{
   const{findeUsersIndex}=request;
   const findeUser=mockUsers[findeUsersIndex];
   if(!findIndex) return response.sendstatus(404);
    return response.send(findeUser);
});

app.put('/api/users/:id',resolveIndexByUserId,(request,response)=>{
    const{body,findeUsersIndex}=request;
        mockUsers[findeUsersIndex]={id:mockUsers[findeUsersIndex].id,...body};
        return response.sendstatus(200);
})

app.patch('/api/users/:id',resolveIndexByUserId,(request,response)=>{
    const{body,findeUsersIndex }=request;
    mockUsers[findeUsersIndex]={...mockUsers[findeUsersIndex],...body}
        return response.sendstatus(200);

})


app.delete('/api/users/:id',resolveIndexByUserId,(request,response)=>{
   const{findeUsersIndex} =request;
   
   
   mockUsers.splice(findeUsersIndex,1);
   return response.sendstatus(200)
})