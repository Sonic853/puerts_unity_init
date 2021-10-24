# puerts_unity_init

初始化只包含 puerts 的 Unity 项目。带有自动化编译 ts。

## 它是如何运行的？

存放 ts 文件的路径在 TsProject\Unity 下，SampleScene 场景含有 PuertsInit 物体，运行 Assets\TypeScript\Init.cs 文件，Init.cs 文件使用 require 调用 init.ts 文件。

## 项目下的 puerts 文件夹不是最新？

如 puerts 不是最新，只需将最新的 puerts 代码覆盖到 Assets 文件夹里即可（请自行手动补充 Plugins 插件）

![Snipaste_2021-10-24_18-40-01](https://user-images.githubusercontent.com/8389962/138590354-4454cf47-d37c-49bf-bb66-1d8584bb1538.png)

## ts 代码自动编译？

先安装 nodejs，然后 npm 安装 typescript nodemon

```
npm install -g typescript
npm install -g nodemon
```

最后运行 build:auto 以及 postbuild:auto 即可。

Just do it!🙃