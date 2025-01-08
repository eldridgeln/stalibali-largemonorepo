// sensitiveData.js
const sensitiveData = {
  database: {
    host: 'localhost',
    port: 5432,
    username: 'db_user',
    password: 'secure_password_not_any_more',
  },
  apiKeys: {
    serviceA: 'your_serviceA_api_key',
    serviceB: 'your_serviceB_api_key',
  },
};

module.exports = sensitiveData;
