import { Message } from 'element-ui';

export default {
  bind(el, { value }) {
    el.$value = value;
    el.handler = () => {
      if (!el.$value) {
        return Message({
          type: 'warning',
          message: '下载地址不存在'
        });
      }
      const link = document.createElement('a');
      link.setAttribute('download', '');
      link.href = el.$value;
      link.click();
    };
    el.addEventListener('click', el.handler);
  },
  componentUpdated(el, { value }) {
    el.$value = value;
  },
  unbind(el) {
    el.removeEventListener('click', el.handler);
  }
};
