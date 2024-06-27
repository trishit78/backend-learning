import express from 'express'

const app = express();

app.get('/',(req,res)=>{
    res.send('Server is ready');
});


app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title:'A joke',
            content:'This is a joke'
        },
        {
            id:2,
            title:'A joke',
            content:'This is a joke'
        },
        {
            id:3,
            title:'A joke',
            content:'This is a joke'
        },
        {
            id:4,
            title:'A joke',
            content:'This is a joke'
        },
        {
            id:5,
            title:'A joke',
            content:'This is a joke'
        },
    ];

    res.send(jokes);
})



const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`serve at ${port}`);
});