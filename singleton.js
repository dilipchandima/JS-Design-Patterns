function process(state) {
  this.state = state;
}

const DB = (function() {
  function DBConnection() {
    this.numProcess = 0;
    this.numProcess++;
  }

  let dbConnection;
  function createDBConnection() {
    dbConnection = new DBConnection();
    return dbConnection;
  }

  return {
    getDBConnection: () => {
      if (!dbConnection) {
        dbConnection = createDBConnection();
        return dbConnection;
      }
      return dbConnection;
    }
  };
})();

const pMan = DB.getDBConnection();
const pMan2 = DB.getDBConnection();

console.log(pMan, pMan2, pMan === pMan2);
