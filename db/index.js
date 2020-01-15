const mongoose = require('mongoose');
mongoose
    .connect('mongodb+srv://odongolera:HR6BVUZtwVMogbMF@cluster0-kha1r.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true , useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to mongo database!!');
    })
    .catch(e => {
        console.error('Connection Error', e.message)
    })

    const db = mongoose.connection
    module.exports = db;