document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    const productPage = document.getElementById("product-page");
    const partnerProductsPage = document.getElementById("partner-products-page");
    const allProductsPage = document.getElementById("all-products-page");
    const getQuoteBtn = document.getElementById("get-quote-btn");

    const products = [
        { id: "1", name: "Warping and Auxiliaries", description: "Specialized services for warping processes and auxiliary textile operations, ensuring high-quality yarn preparation for weaving.", image: "../assets/images/jeniuschem/warping-and-auxiliaries.jpg", services: ["Yarn Preparation", "Warping Machine Operation", "Beam Preparation", "Quality Inspection of Warped Beams", "Auxiliary Textile Services"], partnerId: "jeniuschem" },
        { id: "2", name: "Cotton Fabric", description: "High-quality cotton fabric, perfect for various apparel applications, offering comfort and durability.", image: "../assets/images/jeniuschem/cotton.jpg", services: ["Raw Material Sourcing", "Fabric Quality Testing", "Sustainable Cotton Options", "Bulk Supply"], partnerId: "jeniuschem" },
        { id: "3", name: "Staple Fiber", description: "Versatile staple fibers for textile production, available in various types like cotton, polyester, and blends.", image: "../assets/images/jeniuschem/staple.jpg", services: ["Fiber Sourcing", "Fiber Quality Analysis", "Custom Fiber Blends", "Technical Support"], partnerId: "jeniuschem" },
        { id: "4", name: "Cold Sizing Agent", description: "Advanced cold sizing agents for efficient and eco-friendly textile processing, improving yarn strength and weaveability.", image: "../assets/images/jeniuschem/cold-sizing-agent.jpg", services: ["Sizing Agent Supply", "Application Guidance", "Performance Optimization", "Technical Consultation"], partnerId: "jeniuschem" },
        { id: "5", name: "Raw Materials", description: "Sourcing and supply of diverse raw materials for textile and apparel manufacturing, ensuring quality and sustainability.", image: "../assets/images/jeniuschem/raw-materials.jpg", services: ["Material Sourcing & Procurement", "Quality Assurance", "Supply Chain Management", "Sustainable Material Options"], partnerId: "jeniuschem" },
        { id: "6", name: "Wool Fabric", description: "Premium wool fabrics for luxurious and comfortable garments, known for their warmth and natural properties.", image: "../assets/images/jeniuschem/wool.jpg", services: ["Wool Sourcing", "Fabric Blending", "Quality Control", "Custom Weaving"], partnerId: "jeniuschem" },
        { id: "7", name: "Ball of Yarn", description: "High-quality ball of yarn, suitable for various knitting and crochet projects.", image: "../assets/images/verateks/ball of yarn.jpg", services: ["Yarn Supply", "Color Matching", "Custom Orders"], partnerId: "verateks" },
        { id: "8", name: "Matweiss Pads", description: "High-quality Matweiss pads for various applications.", image: "../assets/images/verateks/Matweiss Pads.jpg", services: ["Pad Supply", "Custom Sizing", "Bulk Orders"], partnerId: "verateks" },
        { id: "9", name: "Paint Auxiliary", description: "High-performance auxiliaries for paint and coating formulations, ensuring optimal pigment dispersion, stability, and application properties.", image: "../assets/images/verateks/PAINT_AUXILIARY.jpg", services: ["Pigment Wetting & Dispersion", "Foam Control Agents", "Rheology Modifiers", "Surface Additives"], partnerId: "verateks" },
        { id: "10", name: "Pre-treatment & Finishing", description: "Comprehensive solutions for textile pre-treatment and finishing, enhancing fabric quality, feel, and functionality from start to finish.", image: "../assets/images/verateks/pre_finish.jpg", services: ["Scouring & Bleaching Agents", "Dyeing Auxiliaries", "Softener Application", "Functional Finishes (e.g., water-repellent)"], partnerId: "verateks" }
    ];

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));
    }
    if (scrollTopBtn) {
        window.onscroll = () => { scrollTopBtn.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "flex" : "none"; };
        scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    }
    function handleHeader() {
        if (!header) return;
        header.classList.add("scrolled");
        header.style.transform = 'translateY(0)';
        header.style.animation = 'none';
    }

    // Generic Product Card Creator (NO-CARD STYLE)
    function createProductCard(product) {
        const productCard = document.createElement("div");
        productCard.className = "text-center transition-all duration-300 transform hover:scale-105 cursor-pointer";
        productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name} Image" class="w-full h-64 object-cover rounded-xl mb-6">
        <h3 class="text-2xl font-bold text-gray-800 mb-2">${product.name}</h3>
        <p class="text-gray-600">${product.description.split(".")[0]}.</p>
    `;
        productCard.addEventListener("click", () => showProductPage(product.id));
        return productCard;
    }

    function showProductPage(productId) {
        const product = products.find((p) => p.id === productId);
        if (!product) { showAllProductsPage(); return; }

        productPage.classList.remove("hidden");
        if (partnerProductsPage) partnerProductsPage.classList.add("hidden");
        if (allProductsPage) allProductsPage.classList.add("hidden");
        window.scrollTo({ top: 0, behavior: "smooth" });

        document.getElementById("product-image").src = product.image;
        document.getElementById("product-name").textContent = product.name;
        document.getElementById("product-description").textContent = product.description;
        const serviceListEl = document.getElementById("service-list");
        serviceListEl.innerHTML = "";
        product.services.forEach((service) => {
            const li = document.createElement("li"); li.textContent = service; serviceListEl.appendChild(li);
        });
        document.getElementById("form-product-name").value = product.name;
    }

    function renderPartnerProducts(partnerId, partnerName) {
        productPage.classList.add("hidden");
        partnerProductsPage.classList.remove("hidden");
        allProductsPage.classList.add("hidden");
        const listEl = document.getElementById("partner-product-list");
        document.getElementById("partner-products-title").textContent = `${partnerName}'s Products`;
        listEl.innerHTML = "";
        const filteredProducts = products.filter(p => p.partnerId === partnerId);
        filteredProducts.forEach(product => listEl.appendChild(createProductCard(product)));
    }

    function showAllProductsPage() {
        productPage.classList.add("hidden");
        partnerProductsPage.classList.add("hidden");
        allProductsPage.classList.remove("hidden");
        const listEl = document.getElementById("all-product-list");
        listEl.innerHTML = "";
        products.forEach(product => listEl.appendChild(createProductCard(product)));
    }

    // Event listener for Get Quote button
    if (getQuoteBtn) {
        getQuoteBtn.addEventListener("click", () => {
            document.getElementById("quote-form-container").classList.toggle("hidden");
        });
    }

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const partnerId = urlParams.get('partner');
    const partnerName = urlParams.get('name');

    if (productId) {
        showProductPage(productId);
    } else if (partnerId && partnerName) {
        renderPartnerProducts(partnerId, partnerName);
    } else {
        showAllProductsPage();
    }

    handleHeader();
});