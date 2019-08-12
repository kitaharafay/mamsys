'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  // async index() {
  //   const { ctx } = this;
  //   const userId = ctx.params.userId;
  //   const userInfo = await ctx.service.user.find(userId);
  //   ctx.body = userInfo;
  // }

  async getArchiveTree() {
    const { ctx } = this;
    const path = ctx.params.path;
    const dirList = await ctx.service.archive.index.getArchiveTree(path);
    ctx.body = {
      code: 20000,
      message: '',
      data: dirList,
    };
  }
}

module.exports = HomeController;
