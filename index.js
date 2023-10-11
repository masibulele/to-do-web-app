import express from "express"
import BodyParser from "body-parser"

var myList= [];


const app = express();
const port = 3000;
app.use(BodyParser.urlencoded({extended:true}));
app.use(express.static('public'))

app.get('/',(req,res)=>{

    res.render('index.ejs');
});


app.post('/submit',(req,res)=>{
    const listItem= req.body;
    
    myList.push(listItem['entry'])
    const context={items:myList};
    console.log(myList);

    res.render('index.ejs', context)
});



app.listen(port, ()=>{
    console.log(`server running in port ${port}`)
});


// helper functions

