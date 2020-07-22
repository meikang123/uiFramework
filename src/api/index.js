import request from '@/utils/request';

// eslint-disable-next-line import/prefer-default-export
export const ShoesService = {
  /**
    * @description 获取订单信息
    */
  getList: data => request.get('/v1/shoes', { params: data }),
  /**
    * @description 批量更新订单信息
    */
  update: data => request.put('/v1/shoes', data),
  /**
    * @description 导出订单信息
    */
  download: data => request.get('/v1/shoes/export', { params: data })
};

export const api = {};
