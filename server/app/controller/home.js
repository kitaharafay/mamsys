'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const userId = ctx.params.userId;
    const userInfo = await ctx.service.user.find(userId);
    ctx.body = userInfo;
  }
}

module.exports = HomeController;
