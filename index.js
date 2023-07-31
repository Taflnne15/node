const {writeFile, readFile, appendFile} = require('fs')

readFile('./data.txt',  'utf-8', (err, data)=> {
if(!err)
console.log(data)
else
console.log('Please try again later');
}) 

writeFile('./data.txt', 'Hey there im the real slim shady', 'utf-8',(err)=>{
    if (!err)
    console.log('Hii there Slim')
    else
    console.log('OH NO!');
})

appendFile('./data.txt', 'Good day', 'utf-8', (err)=>{
    if (!err)
    console.log('Good bye')
    else
    console.log('try later bro');
})



