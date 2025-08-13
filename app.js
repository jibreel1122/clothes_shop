// المنتجات الافتراضية (يمكن استبدالها بقاعدة بيانات لاحقًا)
const products = [
    {
        id: 1,
        name: "قميص رجالي",
        price: 49.99,
        image: "https://via.placeholder.com/300",
        category: "رجالي"
    },
    {
        id: 2,
        name: "فستان سهرة",
        price: 129.99,
        image: "https://via.placeholder.com/300",
        category: "نسائي"
    }
];

function displayProducts() {
    const container = document.getElementById('products');
    container.innerHTML = products.map(product => `
        <div class="product-card bg-white rounded-lg shadow-md overflow-hidden">
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="font-bold text-xl">${product.name}</h3>
                <p class="text-gray-600">${product.price} $</p>
                <button onclick="addToCart(${product.id})" class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    أضف إلى السلة
                </button>
            </div>
        </div>
    `).join('');
}

function addToCart(productId) {
    alert("تمت إضافة المنتج إلى السلة");
}

// عرض المنتجات عند تحميل الصفحة
window.onload = displayProducts;
