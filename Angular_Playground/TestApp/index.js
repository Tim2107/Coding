const dbConnection = require('./dbConnect.js');

const getAllTestData = async () => {
    try {
      const result = await dbConnection.query('SELECT * FROM users;');
      return result.rows;
    } catch (err) {
      console.error('Error fetching data from test table:', err);
      return [];
    }
  };




  

