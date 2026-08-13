const products = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 129.99,
    category: "Electronics",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800",
    ],
    description:
      "Experience high-quality sound with premium wireless headphones designed for comfort and long listening sessions.",
  },

  {
    id: 2,
    title: "Smart Watch Pro",
    price: 89.99,
    category: "Electronics",
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800",
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=800",
    ],
    description:
      "Track your fitness, notifications and daily activities with this modern smart watch.",
  },

  {
    id: 3,
    title: "Classic Cotton T-Shirt",
    price: 24.99,
    category: "Fashion",
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800",
    ],
    description:
      "A comfortable classic cotton t-shirt suitable for everyday casual wear.",
  },

  {
    id: 4,
    title: "Running Sneakers",
    price: 69.99,
    category: "Fashion",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800",
    ],
    description:
      "Lightweight and comfortable running sneakers designed for everyday workouts and running.",
  },

  {
    id: 5,
    title: "Minimalist Backpack",
    price: 49.99,
    category: "Accessories",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=800",
      "https://images.unsplash.com/photo-1556306535-38febf6782e7?w=800",
    ],
    description:
      "A stylish and practical backpack with enough space for work, travel and everyday essentials.",
  },

  {
    id: 6,
    title: "Leather Wallet",
    price: 34.99,
    category: "Accessories",
    rating: 4.1,
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800",
      "https://images.unsplash.com/photo-1610394491340-75f0b1c1c8f4?w=800",
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800",
    ],
    description:
      "A premium compact leather wallet with a clean and timeless design.",
  },

  // Product 7
  {
    id: 7,
    title: "Portable Bluetooth Speaker",
    price: 59.99,
    category: "Electronics",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800",
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=800",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800",
    ],
    description:
      "Enjoy powerful sound anywhere with this compact portable Bluetooth speaker.",
  },

  // Product 8
  {
    id: 8,
    title: "Premium Sunglasses",
    price: 39.99,
    category: "Accessories",
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=800",
    ],
    description:
      "Classic sunglasses with a modern design that adds style to any outfit.",
  },

  // Product 9
  {
    id: 9,
    title: "Casual Denim Jacket",
    price: 79.99,
    category: "Fashion",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800",
      "https://images.unsplash.com/photo-1523205565295-f8e0f1f5d4d0?w=800",
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=800",
    ],
    description:
      "A versatile denim jacket with a timeless casual look for everyday wear.",
  },

    {
    id: 10,
    title: "Wireless Gaming Mouse",
    price: 44.99,
    category: "Electronics",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800",
    images: [
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800",
      "https://images.unsplash.com/photo-1563297007-0686b7003af7?w=800",
    ],
    description:
      "A responsive wireless gaming mouse designed for precision, comfort and smooth performance.",
  },

  {
    id: 11,
    title: "Mechanical Gaming Keyboard",
    price: 74.99,
    category: "Electronics",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800",
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800",
    ],
    description:
      "A mechanical keyboard with responsive keys and a modern design for gaming and productivity.",
  },

  {
    id: 12,
    title: "Smartphone Pro",
    price: 699.99,
    category: "Electronics",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800",
    ],
    description:
      "A modern smartphone with a powerful processor, premium display and advanced camera system.",
  },

  {
    id: 13,
    title: "Men's Casual Hoodie",
    price: 44.99,
    category: "Fashion",
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800",
      "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=800",
    ],
    description:
      "A comfortable casual hoodie made for everyday wear with a clean modern style.",
  },

  {
    id: 14,
    title: "Women's Casual Dress",
    price: 54.99,
    category: "Fashion",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800",
    ],
    description:
      "A stylish casual dress with a comfortable fit, perfect for everyday occasions.",
  },

  {
    id: 15,
    title: "Classic White Sneakers",
    price: 64.99,
    category: "Fashion",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800",
    ],
    description:
      "Clean and versatile white sneakers that pair easily with everyday outfits.",
  },

  {
    id: 16,
    title: "Canvas Travel Bag",
    price: 59.99,
    category: "Accessories",
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800",
    ],
    description:
      "A durable travel bag with spacious compartments for your everyday and travel essentials.",
  },

  {
    id: 17,
    title: "Classic Leather Belt",
    price: 29.99,
    category: "Accessories",
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800",
    images: [
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
    ],
    description:
      "A classic leather belt with a timeless buckle design suitable for everyday wear.",
  },

  {
    id: 18,
    title: "Premium Analog Watch",
    price: 119.99,
    category: "Accessories",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800",
    images: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
    ],
    description:
      "A sophisticated analog watch with a premium finish and timeless design.",
  },

  {
    id: 19,
    title: "Portable Coffee Maker",
    price: 49.99,
    category: "Accessories",
    rating: 4.1,
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800",
    images: [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
    ],
    description:
      "A compact coffee maker designed for convenient brewing at home or while traveling.",
  },

  {
    id: 20,
    title: "Wireless Earbuds",
    price: 79.99,
    category: "Electronics",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800",
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800",
    ],
    description:
      "Compact wireless earbuds with clear audio, comfortable fit and convenient charging.",
  },
];

export default products;