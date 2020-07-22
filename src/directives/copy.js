import { Message } from 'element-ui';

export default {
  bind(el, { value }) {
    el.$value = value;
    el.handler = () => {
      console.log(this, '-----------------是不是vue对象');
      if (!el.$value) {
        Message({
          type: 'warning',
          message: '无复制内容'
        });
        return;
      }
      const input = document.createElement('input');
      input.readOnly = true;
      input.style.position = 'absolute';
      input.style.left = '-9999px';
      input.style.opacity = 0;
      input.value = el.$value;
      document.body.appendChild(input);
      input.select();
      input.setSelectionRange(0, input.value.length);
      if (document.execCommand('Copy')) {
        Message({
          type: 'success',
          message: '复制成功'
        });
      } else {
        Message({
          type: 'error',
          message: '复制失败'
        });
      }
      document.body.removeChild(input);
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
