import { SQLDataSource } from 'datasource-sql'
class Author extends SQLDataSource {
  getAuthor () {
    return this.db.select('*').from('books').where({ id: 1 })
  }
}

module.exports = Author
