const express = require('express');
const router = express.Router();

const noteModel = require('../models/NotesModel.js');
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
router.post('/notes', async (req, res) => {
    // Validate request
    // if(!req.body.content) {
    //     return res.status(400).send({
    //         message: "Note content can not be empty"
    //     });
    // }
    //TODO - Write your code here to save the note
    const noteData = req.body
    
    try {
        const note = new noteModel(noteData)
        const newNote = await note.save()
        res.send(newNote)
    } catch (error) {
        res.status(500).send({message: err.message})
    }

    // res.send({message: "Add NEW Note"})
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
router.get('/notes', (req, res) => {
    // Validate request
    // if(!req.body.content) {
    //     return res.status(400).send({
    //         message: "Note content can not be empty"
    //     });
    // }
    //TODO - Write your code here to returns all note
    noteModel.find().then((books) => {
        res.send(books)
    }).catch((err) => {
        res.status(500).send({message: err.message})
    })
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
router.get('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to return onlt one note using noteid
    noteModel.find().then((books) => {
        res.send(books)
    }).catch((err) => {
        res.status(500).send({message: err.message})
    })
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
router.put('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to update the note using noteid
    noteModel.findByIdAndUpdate(req.params.noteId, req.body, {new:true})
        .then((note) => {
            if (note) {
                res.send(note)
            } else {
                res.status(404).send({message: "Note not found"})
            }
        })
        .catch((err) => {
            res.status(500).send({message: err.message})
        }
    )
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
router.delete('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to delete the note using noteid
    noteModel.findByIdAndDelete(req.params.noteId, req.body, {new:true})
        .then((note) => {
            if (note) {
                res.send(note)
            } else {
                res.status(404).send({message: "Note not found"})
            }
        })
        .catch((err) => {
            res.status(500).send({message: err.message})
        }
    )
});

module.exports = router;