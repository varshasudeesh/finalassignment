const mongoose=require('mongoose');
const schema = mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
});
const BlogData=mongoose.model('blogs',schema);
module.exports=BlogData 
