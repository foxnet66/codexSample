# Portfolio Site

现代化的个人作品集网站，基于 [Next.js](https://nextjs.org/) + [TypeScript](https://www.typescriptlang.org/) + [Tailwind CSS](https://tailwindcss.com/) 构建，聚焦产品设计与前端工程服务的展示与获客。

## ✨ 功能特性

- 自适应的单页作品集结构：Hero、服务、技能、案例、CTA 与联系表单模块
- Tailwind CSS 设计系统，内置渐变、玻璃拟态与卡片风格
- `next-seo` 驱动的 SEO 预设，统一管理 Open Graph 与 Twitter 元数据
- API 路由模拟表单提交，便于接入真实后台或第三方服务

## 📁 项目结构

```
portfolio-site/
├── public/               # 静态资源与 OG 图（可按需扩展）
├── src/
│   ├── components/       # 页面模块组件
│   ├── data/             # 静态数据源（项目、服务、技能、CTA）
│   ├── pages/            # Next.js 路由与 API（含 _app.tsx 与表单接口）
│   └── styles/           # 全局样式（Tailwind）
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
└── README.md
```

## 🚀 本地开发

1. 安装依赖（需 Node.js 18+）：

   ```bash
   npm install
   ```

2. 启动开发服务器：

   ```bash
   npm run dev
   ```

   默认访问地址：<http://localhost:3000>

## ☁️ Vercel 部署

1. 在 Vercel 控制台导入仓库，选择 `portfolio-site` 目录作为项目根路径。
2. 构建命令使用 `npm run build`，输出目录为 `.next`（默认配置）。
3. 完成首次部署后，将自定义域名 CNAME 指向 `cname.vercel-dns.com`，在 Vercel 中完成域名绑定。
4. 开启 Vercel 的 Git 集成后，每次推送到 `main` 分支都会触发自动部署。

> **提示**：当前环境无法直接访问 Vercel，因此未在此处完成上线验证。请在具备外网权限的环境中执行上述操作，并在部署后测试联系表单是否正确调用 `/api/contact` 接口或已接入的后端服务。

## 🔄 内容更新流程

- 文案、服务、技能、案例等内容集中存放于 `src/data/` 目录。
- 更新组件样式或布局时，请参考 `tailwind.config.ts` 中的设计令牌，保持 UI 一致性。
- 若需新增页面，可在 `src/pages/` 中创建对应路由，同时补充 SEO 配置。

## 🛡️ 质量保障

- 推荐在 CI/CD 中加入 `npm run lint`，保障代码风格与可访问性规范。
- 表单提交可接入 Vercel Edge Functions、Resend、或者第三方 CRM；上线前请确保已通过 E2E 测试。

## 📄 许可证

本项目默认以 MIT License 发布，可按需调整。
