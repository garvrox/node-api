import config from 'config'
const dbConfig = config.get('db')
export default {
  client: 'mysql',
  connection: dbConfig.connection,
  pool: dbConfig.pool
}
