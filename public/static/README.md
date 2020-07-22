public/static 目录下是可以直接引用的资源，这里的资源不需要走编译过程。

### 1.可以通过loadResource的方式直接引用
> loadResource 类似于AMD的引用方式，本质上通过在html header头部添加<script> / <style> 标签来实现。

```javascript
  public/static
    |--thirdparty //可以按需加载的第三方依赖
    |-- //项目的核心依赖
    |-- vue
```

