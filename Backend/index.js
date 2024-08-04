const express = require('express');
const cors = require('cors');
require('./connection');
const BlogModel = require('./BlogData'); 

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());


app.post('/add', async (req, res) => {
    try {
        const item = req.body;
        const newBlog = new BlogModel(item);
        await newBlog.save();
        res.status(201).send('Post successful');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error posting blog');
    }
});


app.put('/blogedit/:id', async (req, res) => {
    try {
        await BlogModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send('Updated successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating blog');
    }
});


app.delete('/removeblog/:id', async (req, res) => {
    try {
        await BlogModel.findByIdAndDelete(req.params.id);
        res.status(200).send('Deleted successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting blog');
    }
});


app.get('/blog', async (req, res) => {
    try {
        const data = await BlogModel.find();
        res.status(200).send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Data not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
