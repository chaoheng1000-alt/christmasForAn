# GitHub Pages 部署指南

## 📋 部署前准备

1. **确保所有静态资源在正确位置**：
   - 图片文件应放在 `public/assets/` 目录下
   - 音乐文件应放在 `public/assets/` 目录下

2. **安装依赖**：
   ```bash
   npm install
   ```

3. **本地测试**：
   ```bash
   npm run dev
   ```
   访问 `http://localhost:4321/` 确认页面正常

## 🚀 部署步骤

### 方式一：部署到仓库根路径（推荐用于 username.github.io 仓库）

如果你的仓库名是 `username.github.io`，网站将部署在根路径：

1. **保持 `astro.config.mjs` 默认配置**（不需要设置 `base`）

2. **推送代码到 GitHub**：
   ```bash
   git add .
   git commit -m "准备部署到 GitHub Pages"
   git push origin main
   ```

3. **启用 GitHub Pages**：
   - 进入仓库 Settings → Pages
   - Source 选择 "GitHub Actions"
   - 保存设置

4. **等待部署完成**：
   - 在仓库的 Actions 标签页查看部署进度
   - 部署完成后访问：`https://username.github.io/`

### 方式二：部署到子路径（用于普通仓库）

如果你的仓库名不是 `username.github.io`，网站将部署在子路径：

1. **修改 `astro.config.mjs`**：
   ```javascript
   import { defineConfig } from 'astro/config';

   export default defineConfig({
     base: '/your-repo-name',  // 替换为你的仓库名
     site: 'https://your-username.github.io',  // 替换为你的用户名
     output: 'static',
   });
   ```

2. **推送代码到 GitHub**：
   ```bash
   git add .
   git commit -m "准备部署到 GitHub Pages"
   git push origin main
   ```

3. **启用 GitHub Pages**：
   - 进入仓库 Settings → Pages
   - Source 选择 "GitHub Actions"
   - 保存设置

4. **等待部署完成**：
   - 在仓库的 Actions 标签页查看部署进度
   - 部署完成后访问：`https://username.github.io/repo-name/`

## ⚠️ 常见问题

### 1. 图片无法显示

**问题**：部署后图片无法加载

**解决**：
- 确保图片文件在 `public/assets/` 目录下
- 检查 `src/christmasConfig.ts` 中的路径是否为 `/assets/xxx.jpg`
- 如果部署在子路径，确保 `astro.config.mjs` 中设置了正确的 `base`

### 2. 404 错误

**问题**：访问页面时出现 404

**解决**：
- 检查 GitHub Pages 设置中 Source 是否选择了 "GitHub Actions"
- 确认 GitHub Actions 工作流已成功运行
- 检查访问的 URL 是否正确（注意子路径）

### 3. 构建失败

**问题**：GitHub Actions 构建失败

**解决**：
- 检查 `package.json` 中的依赖是否正确
- 确保所有文件都已提交到 GitHub
- 查看 Actions 日志中的错误信息

## 📝 注意事项

1. **首次部署可能需要几分钟**，请耐心等待
2. **每次推送代码到 main/master 分支**，GitHub Actions 会自动重新部署
3. **静态资源路径**：`public/` 目录下的文件会直接映射到网站根路径
4. **HTTPS**：GitHub Pages 自动提供 HTTPS 支持

## 🔗 相关链接

- [Astro 部署文档](https://docs.astro.build/zh-cn/guides/deploy/github/)
- [GitHub Pages 文档](https://docs.github.com/zh/pages)

