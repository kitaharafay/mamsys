'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async find(id) {
    const user = await this.app.mysql.query('select * from t_ex_user where ID = ?', id);
    return user;
  }
}

module.exports = UserService;
