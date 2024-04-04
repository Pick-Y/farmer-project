module.exports = {
  HOST: 'db',
  USER: 'postgres',
  PASSWORD: 'password',
  DB: 'farmers_backpackers',
  PORT: 5432,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}
