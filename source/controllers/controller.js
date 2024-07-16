const path = require('path');

// show html page
exports.home = (req, res) => {
    res.sendFile(path.join(__dirname, '../pages', 'home.html'));
};

exports.getTodayDate = (req, res) => {
  const today = new Date();
  res.send(`Today's date is ${today.toDateString()}`);
};

exports.getMonthsName = (req, res) => {
  const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];
  res.send(months);
};

// get list of people -- This can come from a database and what's defined in model.js
// but for the purpose of this demo, I'm going to just type a couple of names
exports.getPeople = (req, res) => {
  res.json([
    {
      FirstName: 'Arif',
      LastName: 'Syraj',
      title: 'Software Engineer',
      LinkedIn: 'https://www.linkedin.com/in/arifsyraj/'
    },
    {
      FirstName: 'Bernard',
      LastName: 'Ng',
      title: 'Software Developer',
      LinkedIn: 'https://www.linkedin.com/in/bernard-ngandu/'
    },
    {
      FirstName: 'Clerc',
      LastName: 'Kapema',
      title: 'Web Developer',
      LinkedIn: 'https://www.linkedin.com/in/clerc-ngonga-b1253b174/'
    },
    {
      FirstName: 'Gloire',
      LastName: 'Kafwalubi',
      title: 'Web Developer',
      LinkedIn: 'https://www.linkedin.com/in/gloire-kafwalubi-3152871a0/'
    }
  ]);
};
