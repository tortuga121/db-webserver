const env = process.env;

const config = {
  db: { /* don’t expose password or any sensitive info, done only for demo */
    host: env.DB_HOST || 'localhost',
    user: env.DB_USER || 'root',
    password: env.DB_PASSWORD || '@Tiagob12',
    database: env.DB_NAME || 'guidoo',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};
  
module.exports = config;
