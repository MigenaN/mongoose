const Joke = require('../models/joke.model');

module.exports.getAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({ jokes: allJokes })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.getOneSingleJoke = (req, res) => {
    Joke.findById({ _id: req.params.id })
        .then(oneSingleJoke => {
            res.json({ joke: oneSingleJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.createNewJoke = (req, res) => {
    const { setup, punchline } = req.body;
            
        if (!setup || !punchline) {
            return res.json({ error: 'Setup and punchline are required' });
            }
            
    Joke.create({ setup, punchline })
        .then((newJoke) => {
            res.json({ joke: newJoke });
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.updateJoke = (req, res) => {
    const { setup, punchline } = req.body;
            
    if (!setup || !punchline) {
    return res.json({ error: 'Setup and punchline are required' });
            }
            
    Joke.findByIdAndUpdate({ _id: req.params.id },
            { setup, punchline },
            { new: true }
            )
    .then((updatedJoke) => {
        res.json({ joke: updatedJoke });
        })
    .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
                });
            };
            
module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.findByIdAndDelete({ _id: req.params.id })
        .then(() => {
            res.json({ message: 'Joke deleted successfully' });
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
                });
            };
