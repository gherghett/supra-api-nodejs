const { assert } = require('supra-core')
const { BaseDAO } = require('./BaseDAO')

class RefreshSessionDAO extends BaseDAO {
  static get tableName () {
    return 'refresh_sessions'
  }

  static async getByRefreshToken (refreshToken) {
    assert.string(refreshToken, { notEmpty: true })

    const result = await this.query()
      .where({ refreshToken })
      .first()
    if (!result) throw this.errorEmptyResponse()
    return result
  }
}

module.exports = { RefreshSessionDAO }
