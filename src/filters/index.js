import { CONST_DATE_TIME_FORMATER } from '@framework/config/consts';
import { Transform } from '@framework/utils';
/*
* 时间格式化
*/
export const formatTime = time => {
  if (!time) {
    return '--';
  }
  if (time && typeof time === 'string') {
    time = new Date(time);
    return Transform.formatDate(time, CONST_DATE_TIME_FORMATER);
  } if (typeof time === 'object') {
    return Transform.formatDate(time, CONST_DATE_TIME_FORMATER);
  }
};

export const abc = {};
