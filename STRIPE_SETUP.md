# Stripe Payment Link 设置指南

## 步骤1：创建Stripe账号

1. 访问 https://dashboard.stripe.com/register
2. 填写邮箱、国家（选United States）、密码
3. 验证邮箱

## 步骤2：创建Payment Link

### 单次购买 ($2.99)
1. 左侧菜单 → Products → Payment Links
2. 点击 "+ Create" → "Payment link"
3. 填写：
   - Name: `Single Mantra Generation`
   - Price: `$2.99` (One-time)
   - Description: `Get one personalized power mantra`
4. 点击 "Create payment link"
5. **复制链接**

### 月度订阅 ($9.99)
1. 同上，创建新链接
2. 填写：
   - Name: `MantraGen Monthly`
   - Price: `$9.99/month` (Recurring)
   - Description: `Unlimited mantras + daily delivery + saved favorites`
3. **复制链接**

### 年度订阅 ($49.99)
1. 同上，创建新链接
2. 填写：
   - Name: `MantraGen Yearly`
   - Price: `$49.99/year` (Recurring)
   - Description: `Everything in Monthly, plus priority support`
3. **复制链接**

## 步骤3：配置支付页面（可选优化）

在每个Payment Link设置中：
- 上传产品Logo
- 添加产品描述
- 自定义感谢页面

## 步骤4：测试支付链接

在无痕模式下打开链接，确认：
- 页面正常显示
- 价格正确
- 可以完成测试支付（用Stripe测试卡号：4242 4242 4242 4242）

## 步骤5：将链接填入代码

将3个链接填入 `app.js` 中的 `paymentLinks` 对象：

```javascript
const paymentLinks = {
    single: 'https://buy.stripe.com/xxx',      // 替换为你的链接
    monthly: 'https://buy.stripe.com/yyy',     // 替换为你的链接
    yearly: 'https://buy.stripe.com/zzz'       // 替换为你的链接
};
```

---

**准备好链接后，告诉我，我会更新代码！**
