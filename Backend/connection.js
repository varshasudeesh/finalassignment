const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://varshasudeesh004:dftpafjmoLs3v0Rw@cluster0.abshkil.mongodb.net/blogdb?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
    console.log('DB is connected')
    }).catch((error)=>{
        console.log('Error in conncetion')
    })