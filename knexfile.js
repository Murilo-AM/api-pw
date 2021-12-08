// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: "./database/db..sqlite"
    },
     migrations:{

      directory: "./database/migrations",

     },

     useNullAsDefault: true,

     pool:{

      afterCreate: function (conn, done){


        conn.run("PRAGMA foreign_keys = ON", done);
      },

     },

     seeds: {

      directory: "./database/seeds",
     }

  },



};
