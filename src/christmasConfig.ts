// 圣诞主题配置文件
// 在这里配置礼盒和对应的图片

export interface GiftBox {
	id: string;
	position: {
		top: string; // CSS top 值，例如 "15%"
		left: string; // CSS left 值，例如 "45%"
	};
	image: string; // 图片路径，放在 assets/ 目录下
	label?: string; // 可选：礼盒标签
}

export const giftBoxes: GiftBox[] = [
	{
		id: "gift-1",
		position: { top: "25%", left: "48%" },
		image: "/assets/gift-1.jpg",
		label: "礼物 1"
	},
	{
		id: "gift-2",
		position: { top: "35%", left: "42%" },
		image: "/assets/gift-2.jpg",
		label: "礼物 2"
	},
	{
		id: "gift-3",
		position: { top: "35%", left: "54%" },
		image: "/assets/gift-3.jpg",
		label: "礼物 3"
	},
	{
		id: "gift-4",
		position: { top: "45%", left: "40%" },
		image: "/assets/gift-4.jpg",
		label: "礼物 4"
	},
	{
		id: "gift-5",
		position: { top: "45%", left: "52%" },
		image: "/assets/gift-5.jpg",
		label: "礼物 5"
	},
	{
		id: "gift-6",
		position: { top: "55%", left: "38%" },
		image: "/assets/gift-6.jpg",
		label: "礼物 6"
	},
	{
		id: "gift-7",
		position: { top: "55%", left: "50%" },
		image: "/assets/gift-7.jpg",
		label: "礼物 7"
	},
	{
		id: "gift-8",
		position: { top: "55%", left: "58%" },
		image: "/assets/gift-8.jpg",
		label: "礼物 8"
	}
];

// 背景音乐配置（可选）
export const backgroundMusic = "/assets/Anson Seabra-Christmas List.mp3"; // 将音乐文件放在 assets/ 目录下

