import mock from './mock/index.js';

// api文档地址：http://bl.7yue.pro/dev/index.html

const apis = {
  mock: false, // 是否启用mock数据
  getLatest: 'classic/latest', // 期刊：获取最新一期
  like: 'like', // 点赞: 进行点赞
  likeCancel: 'like/cancel', // 点赞: 取消点赞
}

export { apis, mock };
