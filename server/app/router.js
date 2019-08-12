'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  //router.get('/user/:userId', controller.home.index);
  router.get('/user/archive/:path', controller.home.getArchiveTree)
};
