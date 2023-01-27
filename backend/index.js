const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

app.use(cors())
app.use(express.json())

const kardSchema = new mongoose.Schema({
    img: String,
    categories: String,
    name: String,
    price: Number,
});
const Kard = mongoose.model('MyKard', kardSchema);

app.get('/', (req, res) => {
    Kard.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.send("get sorgusu alinmadi")
        }
    })
})

app.get('/:id', (req, res) => {
    const { id } = req.params

    Kard.findById(id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.send(" id get sorgusu alinmadi")
        }
    })
})

app.post('/', (req, res) => {
    const newKard = new Kard({
        img: req.body.img,
        categories: req.body.categories,
        name: req.body.name,
        price: req.body.price,
    });
    newKard.save()
    res.send(newKard)
})

app.delete('/:id', (req, res) => {
    const { id } = req.params

    Kard.findByIdAndDelete(id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.send("delete sorgusu alinmadi")
        }
    })
})

mongoose.set('strictQuery', true);
mongoose.connect(process.env.USER)
    .then(() => console.log('Connected!'));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})