// here defined routes for the Node backend, APi routes or any other routes of that nature
// API or CRUD goes here
// other routes ....

module.exports = function (app) {
  // server routes.
  // handle things like API calls
  // authentication routes

  // API route ========================
  app.get('/api/nerds', function (req, res) {
    // FOR APIs: USE MONGOOSE to get all nerds in the DATABASE
    Nerd.find(function (err, nerds) {
      // if there's an error, only send the error
      if (err) res.send(err);
      // return all nerds in JSON format
      res.json(nerds);
    });
  });

  // front end route ==================
  // to handle Angular requests
  app.get('*', function (req, res) {
    // only load index.html regardless of url
    res.sendfile('./public/views/index.html');
  });

};