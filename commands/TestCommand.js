'use strict'

/**
 * Dependencies
 * @ignore
 */

/**
 * Module Dependencies
 * @ignore
 */
const { Command } = require('panmnesia-server')

/**
 * Command
 * @ignore
 */
class TestCommand extends Command {

  static get type () {
    return "test"
  }

  // Specify where command needs to be emitted to
  // You must write functions for each output (named according to the object key)
  static destination (user) {
    return { main: 'main', public: 'public', user: user.username }
  }

  static authorize (state, command, user) {
    return true // Always allow
  }

  // Will emit to db 'main'
  static main (state, command, user) {
    return { type: this.type, payload: { foo: 'main' } }
  }

  // Will emit to db 'public'
  static public (state, command, user) {
    return { type: this.type, payload: { foo: 'public' } }
  }

  // Will emit to db `${user.username}`
  static user (state, command, user) {
    return { type: this.type, payload: { foo: user } }
  }
}

/**
 * Exports
 * @ignore
 */
module.exports = TestCommand
