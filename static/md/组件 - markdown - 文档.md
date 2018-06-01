## 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| url | markdown文件地址 | 非 | String |  | 无 |
| md | markdown内容 | 非 | String |  | 无 |
| highlight | 代码高亮 | 非 | Boolean |  | false |
| baidupan | 百度网盘分享链接显示优化 | 非 | Boolean |  | true |

## 使用方法

加载一个.md文件

```
<markdown url="/static/md/xxxx.md"></markdown>
```

加载资源

```
const md = `# Header

## title

text`

<markdown :md="md"></markdown>
```

