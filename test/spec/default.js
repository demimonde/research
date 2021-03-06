import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import research from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof research, 'function')
  },
  async 'calls package without error'() {
    await research()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await research({
      type: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T