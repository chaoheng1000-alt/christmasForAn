# 圣诞主题页面使用说明

## 📁 文件结构

```
src/
├── components/
│   └── christmas/
│       ├── christmasConfig.ts      # 配置文件（礼盒位置和图片）
│       ├── ChristmasTree.astro    # 圣诞树组件
│       ├── GiftBox.astro          # 礼盒组件
│       ├── ImageModal.astro       # 图片展示模态框
│       └── ChristmasMusic.astro   # 背景音乐控制
└── pages/
    └── christmas.astro            # 主页面

public/
└── christmas/                    # 需要创建此目录
    ├── gift-1.jpg               # 礼盒图片 1
    ├── gift-2.jpg               # 礼盒图片 2
    ├── gift-3.jpg               # 礼盒图片 3
    ├── gift-4.jpg               # 礼盒图片 4
    ├── gift-5.jpg               # 礼盒图片 5
    ├── gift-6.jpg               # 礼盒图片 6
    ├── gift-7.jpg               # 礼盒图片 7
    ├── gift-8.jpg               # 礼盒图片 8
    └── christmas-music.mp3      # 背景音乐（可选）
```

## 🎯 使用步骤

### 1. 创建图片目录

在 `public` 目录下创建 `christmas` 文件夹：

```bash
mkdir public/christmas
```

### 2. 添加图片

将你的礼盒图片放入 `public/christmas/` 目录，命名为：
- `gift-1.jpg`
- `gift-2.jpg`
- `gift-3.jpg`
- ... 等等

### 3. 配置礼盒位置

编辑 `src/components/christmas/christmasConfig.ts` 文件，调整礼盒的位置和图片路径：

```typescript
export const giftBoxes: GiftBox[] = [
	{
		id: "gift-1",
		position: { top: "25%", left: "48%" },  // 调整位置
		image: "/christmas/gift-1.jpg",         // 图片路径
		label: "礼物 1"                          // 可选标签
	},
	// ... 更多礼盒
];
```

### 4. 添加背景音乐（可选）

将圣诞主题音乐文件放入 `public/christmas/` 目录，命名为 `christmas-music.mp3`。

如果不需要背景音乐，可以修改 `christmasConfig.ts` 中的 `backgroundMusic` 为空字符串。

### 5. 访问页面

启动开发服务器后，访问：`http://localhost:4321/christmas`

## 🎨 自定义配置

### 调整礼盒数量

在 `christmasConfig.ts` 中添加或删除 `giftBoxes` 数组中的项目。

### 调整礼盒位置

修改每个礼盒的 `position` 属性：
- `top`: 距离顶部的百分比（如 "25%"）
- `left`: 距离左侧的百分比（如 "48%"）

### 修改圣诞树样式

编辑 `ChristmasTree.astro` 文件中的 CSS 样式。

### 修改礼盒样式

编辑 `GiftBox.astro` 文件中的 CSS 样式。

## 📝 注意事项

1. 图片格式支持：JPG、PNG、WebP 等浏览器支持的格式
2. 图片大小建议：每张图片不超过 2MB，以保证加载速度
3. 背景音乐格式：MP3、OGG 等浏览器支持的音频格式
4. 响应式设计：页面已适配移动端，但建议在移动设备上测试

## 🎄 功能特性

- ✨ 精美的圣诞树设计（CSS 纯绘制，无需图片）
- 🎁 可点击的礼盒，带有动画效果
- 🖼️ 点击礼盒后展示图片（模态框）
- 🎵 背景音乐播放控制（可选）
- ❄️ 雪花飘落动画
- 📱 响应式设计，支持移动端
- 🌙 适配深色背景

# christmasForAn
