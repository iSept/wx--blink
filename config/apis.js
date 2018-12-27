import mock from './mock/index.js';

// api文档地址：http://bl.7yue.pro/dev/index.html

const apis = {
  mock: false, // 是否启用mock数据
  getLatest: 'classic/latest', // 期刊：获取最新一期
  getPrevious: 'classic/<index>/previous', // 期刊：获取当前一期的上一期 <index> 当前期index
  getNext: 'classic/<index>/next', // 期刊：获取当前一期的下一期
  like: 'like', // 点赞: 进行点赞
  likeCancel: 'like/cancel', // 点赞: 取消点赞
}

export { apis, mock };
