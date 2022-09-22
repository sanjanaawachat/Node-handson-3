const express =require("express");

const app=express();
const port =8000;

const middleware1=(req,res,next)=>{
    res.send("localmiddleware")
    console.log("Middleware1");
    next();
}

const text1=(req,res,next)=>{
    console.log("text1");
    next();
}
const text2=(req,res,next)=>{
    console.log("Middleware1");
    next();
}
const text3=(req,res,next)=>{
    console.log("Middleware1");
    next();
}
const text4=(req,res,next)=>{
    console.log("Middleware1");
    next();
}


const middleware2=(req,res,next)=>{
    res.send("this is a global middleware");
    console.log("middleware2");
    next();
}

app.use(middleware2);//glbally all routes


app.get('/page1',middleware1,(req,res)=>{
    console.log("here middleware1 and middleware2 is used");
    
})
app.get('/page2',text1,(req,res)=>{
    console.log("data1 can be used");
    
})
app.get('/page3',text2,(req,res)=>{
    console.log("data2 can be used");
    
})
app.get('/page4',text3,(req,res)=>{
    console.log("data3 can be used");
    
})
app.get('/page5',text4,(req,res)=>{
    console.log("data4 can be used");
    
})
app.listen(port,()=>{
    console.log("app is running");
});