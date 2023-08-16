import db from "./dbService";

const createTokenTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS tokens (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, value TEXT NOT NULL)",
      [],
      () => {
        console.log("Token table created successfully");
      },
      (error) => {
        console.log("Error creating token table:", error);
      }
    );
  });
};

const storeToken = (name, value) => {
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO tokens (name, value) VALUES (?, ?)",
      [name, value],
      () => {
        console.log("Token stored successfully");
      },
      (error) => {
        console.log("Error storing token:", error);
      }
    );
  });
};

const getToken = (name) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT value FROM tokens WHERE name = ?",
        [name],
        (tx, results) => {
          if (results.rows.length > 0) {
            resolve(results.rows.item(0).value);
          } else {
            resolve(null); // Token not found
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  });
};

export { createTokenTable, storeToken, getToken };
