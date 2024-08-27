const env = {
  database: 'antigua_umg2024_3579',
  username: 'antigua_umg2024_3579_user',
  password: '3zvyNhXxGpcBsHSRvWS2hcfRHsmJA3Qi',
  host: 'dpg-cqc5qld6l47c73cufe80-a.oregon-postgres.render.com',
  dialect: 'postgres',
  ssl: true,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = env;
