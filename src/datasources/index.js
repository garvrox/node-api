import knexConfig from './Knex'
import Books from './Modal/Books'
import Author from './Modal/Author'

export default {
  bookObj: new Books(knexConfig),
  authorObj: new Author(knexConfig)
}
