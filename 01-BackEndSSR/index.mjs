import express, { application } from 'express'

const app = express()

app.set('view engine' , 'ejs' )

app.get('/users' , (req , res)=> {
  // bucar dados
  const users = [
    {id: 1, name: "Daniel Fernandes Silva"},
    {id: 2, name: "Diego Fernandes"},
    {id: 3, name: "Dani Leã"},
  ];

  if(req.header("Accept") == 'aplication/json'){
    return res.json({data: users})
  }

  return res.render('users/list', {users})
})


app.listen(3000)