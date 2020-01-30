// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var db = require("../db/db");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/notes", function(req, res) {
    res.json(db);
  });

  app.post("/api/notes", function(req,res){
    console.log("POST", req.body)
    // push this to the db
    var newNote ={
        title: req.body.title,
        text: req.body.text,
        id: db[db.length -1].id + 1
    }
    db.push(newNote)
    console.log(db)
    res.json(newNote)
  })

  app.delete("/api/notes/:id", function(req,res){
      console.log("DELETE", req.params)
      //remove the note from the db
      db = db.filter(note=> note.id !== parseInt(req.params.id))
      console.log(db)
      res.json(db)
  })
//   app.get("/api/waitlist", function(req, res) {
//     res.json(waitListData);
//   });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------



  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

//   app.post("/api/clear", function(req, res) {
//     // Empty out the arrays of data
//     tableData.length = 0;
//     waitListData.length = 0;

//     res.json({ ok: true });
//   });
};
