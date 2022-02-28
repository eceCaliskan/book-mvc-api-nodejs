const Book = require('../models/Book')

//getting all the books
const getBooks = async(req, res) => {
    Book.find()
        .then((result) => { res.json(result) })
        .catch((err) => { console.log(err); });

}

//addign a new books
const addBooks = (req, res) => {
    try {
        console.log(req.body)
        const book = new Book(req.body)
        book.save()
            .then(() => { res.send(req.body) })
            .catch((err) => { res.send(err.message); })
    } catch (err) {
        res.send(err)
    }
}

//getting individual books
const findBooks = (req, res) => {

    const id = req.params.id;
    Book.findById(id)
        .then((result) => { res.json(result); })
        .catch((err) => { res.send(err.message); })

}

//delete individual book
const deleteBooks = (req, res) => {

    const id = req.params.id;
    const book = Book.findById(id)
    book.remove()
        .then((result) => { res.json(result); })
        .catch((err) => { res.send(err.message); })
}

//update book
const updateBooks = async(req, res) => {

    const id = req.params.id;
    const book = await Book.findById(id);
    book.updateOne(req.body).then((result) => { res.send(req.body) })
}



module.exports = { getBooks, addBooks, findBooks, deleteBooks, updateBooks }