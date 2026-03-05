# MantraGen - 项目状态

## 版本
**v0.2.0** - 2026-03-05

## 项目概述
**Personalized Mantra Generator** - 极简前端出海网站
- 目标市场：北美（美国、加拿大）及西欧
- 核心功能：输入焦虑场景 → 输出Power Mantra + 呼吸练习指导
- 技术栈：纯HTML/CSS/JS，无后端

## 已完成 (Week 1 - Day 2)

### ✅ 产品功能 (Day 1)
- [x] 6种预设焦虑场景（Work Stress, Anxiety, Insomnia, Overwhelmed, Self Doubt, Burnout）
- [x] 自定义场景输入
- [x] Mantra生成（预设内容，30+条箴言）
- [x] 呼吸练习指导
- [x] 3次免费限制（LocalStorage存储）
- [x] 复制到剪贴板
- [x] 付费墙界面

### ✅ 支付集成 (Day 2)
- [x] Stripe 账号注册（沙盒模式）
- [x] 创建3个 Payment Links（Single $2.99, Monthly $9.99, Yearly $49.99）
- [x] 集成支付按钮点击跳转
- [x] 沙盒模式支付测试通过
- [ ] 真实账户激活（待完成）

### ✅ SEO & GEO 优化 (Day 2)
- [x] Meta 标签优化（Title, Description, Keywords）
- [x] Open Graph 标签（社交分享）
- [x] Twitter Cards 标签
- [x] Schema.org 结构化数据（WebApplication, Organization, FAQPage）
- [x] robots.txt 创建
- [x] sitemap.xml 创建
- [x] 本地化标签（geo.region, 语言标签）

### ✅ 网站部署 (Day 2)
- [x] GitHub 仓库创建
- [x] 代码推送到 GitHub
- [x] GitHub Pages 激活
- [x] 网站上线：https://cicadaca.github.io/mantragen/

### ✅ 设计优化 (Day 1)
- [x] 6种预设焦虑场景（Work Stress, Anxiety, Insomnia, Overwhelmed, Self Doubt, Burnout）
- [x] 自定义场景输入
- [x] Mantra生成（预设内容，30+条箴言）
- [x] 呼吸练习指导
- [x] 3次免费限制（LocalStorage存储）
- [x] 复制到剪贴板
- [x] 付费墙界面

### ✅ 设计优化
- [x] Calm风格配色（蓝绿色调）
- [x] 操作界面占比增大（720px卡片）
- [x] 呼吸圆圈由大变小动画
- [x] Mantra箴言更大更清晰（2.2rem）
- [x] 响应式设计（移动端适配）

### ✅ 页面结构
- [x] Hero + Generator Card
- [x] How It Works说明
- [x] Pricing三档定价
- [x] Footer

## 文件结构
```
出海网站/
├── index.html       # 主页面（含SEO优化）
├── style.css        # 样式（Calm风格）
├── app.js           # 核心逻辑（含Stripe支付链接）
├── robots.txt       # 搜索引擎爬虫指引
├── sitemap.xml      # 网站地图
├── PROJECT_STATUS.md # 项目状态（本文件）
└── STRIPE_SETUP.md  # Stripe设置指南
```

## 线上地址
- **GitHub Pages**: https://cicadaca.github.io/mantragen/
- **计划域名**: mantragen.prosperai.live（待配置）

## 本地开发
```bash
cd "/Users/cyan/桃桃大人的城堡/财务自由/出海网站"
python3 -m http.server 8080
# 访问 http://localhost:8080
```

## 下一步 (上线前待办)

### 🔴 P0 - 必须完成才能上线
- [x] 购买/准备域名（已有：prosperai.live）
- [x] 部署网站到线上（已完成：GitHub Pages）
- [ ] 配置自定义域名（mantragen.prosperai.live）
- [ ] 更新代码中的域名链接
- [ ] Stripe 切换到真实账户
- [ ] 创建社交分享图片（OG + Twitter）

### 🟡 P1 - 上线后24小时内
- [ ] 安装 Google Analytics
- [ ] 提交 sitemap 到 Google Search Console
- [ ] Product Hunt 发布资料准备

### 🔵 P2 - 营销推广
- [ ] Pinterest 广告素材制作（10 pins）
- [ ] Reddit 社区发帖脚本

## 衡量指标

### Week 1目标
| 指标 | 目标 | 当前 |
|------|------|------|
| 访问量 | >500 | - |
| 生成次数 | >200 | - |
| 付费用户 | ≥3人 | - |
| 收入 | >$10 | - |

### Week 2目标
| 指标 | 目标 |
|------|------|
| C端总收入 | >$100 |
| B2B意向 | ≥1个回复 |
| 访问→付费转化 | >2% |

## 关键决策记录

### 2026-03-04 - 方案选择
- 选择方案4（Personalized Mantra Generator）
- 原因：解决具体痛点、Chrome Extension潜力、B2B市场

### 2026-03-04 - 设计方向
- 参考Calm.com设计风格
- 色调：宁静蓝绿（#4a90a4）
- 布局：大卡片、高对比度、清晰层级

### 2026-03-05 - 域名策略
- 使用现有域名 prosperai.live
- 配置子域名 mantragen.prosperai.live
- 部署方式：GitHub Pages（免费稳定）

## 技术债务
- [ ] Mantra内容目前是预设的，考虑接入AI
- [ ] 支付流程未完成
- [ ] 没有用户数据收集

## 链接
- **线上地址**: https://cicadaca.github.io/mantragen/
- **GitHub 仓库**: https://github.com/Cicadaca/mantragen
- **本地开发**: http://localhost:8080

## Stripe 支付链接（沙盒模式）
- Single: https://buy.stripe.com/test_cNi6oGdNeakB5gn20beZ200
- Monthly: https://buy.stripe.com/test_aFafZg24wakB24b20beZ201
- Yearly: https://buy.stripe.com/test_28E6oG10scsJaAHawHeZ202

---
**最后更新：** 2026-03-05
**下次继续：** 配置自定义域名 mantragen.prosperai.live
