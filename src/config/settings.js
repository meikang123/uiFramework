/**
 * @description 基础配置
 */
export const Config = {

  /**
   * @description 开发联调环境
   * http://192.168.236.201:8787 张珊
   */
  development: {
    requestUrl: 'http://192.168.246.125:8777',
    // requestUrl: 'http://192.168.246.104:8787',
    wsUrl: '//192.168.96.75:8787'
  },

  /**
   * @description 测试环境/内网环境
   *
   */
  st: {
    requestUrl: 'http://192.168.189.71:8787',
    wsUrl: '//192.168.189.71:8787'
  },

  /**
   * @description 服务器人员本地测试
   *
   */
  local: {
    requestUrl: 'http://127.0.0.1:8787',
    wsUrl: '//127.0.0.1:8787'
  },

  /**
   * @description 生产环境
   *
   */
  production: {
    requestUrl: 'http://192.168.96.75:8787',
    wsUrl: '//192.168.96.75:8787'
  }
};

export const abc = {};
