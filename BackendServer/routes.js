const express = require('express');
const router = express.Router();

// Sample data
let users = [
    {id: 1 ,name : 'Alice'},
    {id: 2 ,name : 'Bob'},
    {id: 3 ,name : 'Joe'},
    {id: 4 ,name : 'Manty'}
]

// Get request to read all the users
router.get('/users',(req,res)=>{
    res.status(200).json(users)  //Status code 200 - Success
})

// Get request to fetch/ read a particular user
router.get('/users/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id); 
    if(!user){
        return res.status(404).json({message: 'User not found'}); //Status code 404 - Bad Request
    }
    res.status(200).json(user)  //Status code 200 - Success
})

// Post request to create a new user
router.post('/users',(req,res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({message: 'Name is required'});
    }
    const newUser = {
        id : users.length + 1,
        name : name
    }
    users.push(newUser);
    res.status(201).json(newUser) //Status code 201 - Created user successfully
})

// Put request to update data of an existing user
router.put('/users/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const {name} = req.body;
    const user = users.find(user => user.id === id);
    if(!user){ 
        return res.status(404).json({message: 'User not found'}); //Status code 404 - Bad Request
    }
    user.name = name || user.name
    res.status(200).json(user) //Status code 200 - Success
})

// Delete request to delete an existing user
router.delete('/users/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const index = users.findIndex(user => user.id === id);
    if(index === -1){
        return res.status(404).json({message: 'User not found'}); //Status code 404 - Bad Request
    }
    users.splice(index,1);
    // res.sendStatus(204)
    res.json({message : "User deleted successfully!"})
});


module.exports = router;