import { SQLDataSource } from 'datasource-sql'
class Books extends SQLDataSource {
  getBooks () {
    return this.db.select('*').from('books')
  }
}

module.exports = Books
