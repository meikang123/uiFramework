import { MessageBox } from 'element-ui';

const GtConfirm = (message, success, cancel) => {
  MessageBox.confirm(`${message}`, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    center: false,
    type: 'warning'
  }).then(() => {
    success();
  }).catch(() => {
    if (cancel) {
      cancel();
    }
  });
};

export default GtConfirm;
