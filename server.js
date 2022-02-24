const mongoose=require("mongoose")
const express=require("express")
const { json } = require("express/lib/response")
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://SaranPradeep:1906@cluster0.npfgq.mongodb.net/Todo?retryWrites=true&w=majority").then(()=>console.log("Success db")).catch(console.error)
const Todo=require("./models/Todo")


//To display all the todos in mongoDB
app.get("/todos",async(req,res)=>{
    const todos=await Todo.find()
    console.log("here")
    res.json(todos)
})
//To add new todos
app.post("/todos/new",(req,res)=>{
    console.log(req.body.text)
    const todo=new Todo({
        text:req.body.text
    })
    todo.save()
    console.log(req.body.text)
    res.json(todo)
})

//TO complete a todo
app.get("/todos/complete/:id",async(req,res)=>{

    console.log(req.params.id)
    const todo=await Todo.findById(req.params.id)
    todo.Complete=!todo.Complete;
    todo.save()
    res.json(todo)

})

//TO UPDATE THE TODO
app.put("/todos/update/:id",async(req,res)=>{

    const todo=await Todo.findById(req.params.id)
    todo.text=req.body.text
    todo.save()
    res.json(todo)

})

//TO DELETE THE TODO
app.delete('/todo/delete/:id', async (req, res) => {
	const result = await Todo.findByIdAndDelete(req.params.id);

	res.json({result});
});

//ASSIGNED PORT FOR LOCAL HOST
app.listen(process.env.MONGODB_URL||"3001",()=>{
    console.log("Port assigned successful")
})