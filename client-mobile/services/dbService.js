// import SQLite from 'react-native-sqlite-storage';

// const db = SQLite.openDatabase({ name: 'mydb.db', location: 'default' });

// export default db;


import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabase('wordMemorizationDB') // returns Database object