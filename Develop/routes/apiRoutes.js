const db = require('../Develop/db/db.json');
const app = express();
const util = require('util');
const fs = require('fs');
const cuid = require('cuid');
app.use(express.json());

const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(db));
    res.end();
};

app.post('api/notes', (req, res) => {
    let note = req.body;
    let noteId = cuid();
    note.id = noteId;

    read('./db/db/json', 'utf-8').then((data) => {
        let thisData = JSON.parse(data);
        let newData = [...thisData, note];
        write('./db/db/json', JSON.stringify(newData));
    });
    res.json(db);
    res.end();
})


