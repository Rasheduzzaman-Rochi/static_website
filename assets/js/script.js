document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  const learnMoreBtn = document.getElementById("learn-more-btn");
  const bannerSlideshowContainer = document.getElementById("banner-slideshow");
  const productList = document.getElementById("product-list");
  const seeMoreBtn = document.getElementById("see-more-btn");
  let productsVisibleOnMain = 4;

  const products = [
    { id: "1", name: "Warping and Auxiliaries", description: "Specialized services for warping processes...", image: "assets/images/jeniuschem/warping-and-auxiliaries.jpg" },
    { id: "2", name: "Cotton Fabric", description: "High-quality cotton fabric...", image: "assets/images/jeniuschem/cotton.jpg" },
    { id: "3", name: "Staple Fiber", description: "Versatile staple fibers for textile production...", image: "assets/images/jeniuschem/staple.jpg" },
    { id: "4", name: "Cold Sizing Agent", description: "Advanced cold sizing agents...", image: "assets/images/jeniuschem/cold-sizing-agent.jpg" },
    { id: "5", name: "Raw Materials", description: "Sourcing and supply of diverse raw materials...", image: "assets/images/jeniuschem/raw-materials.jpg" },
    { id: "6", name: "Wool Fabric", description: "Premium wool fabrics...", image: "assets/images/jeniuschem/wool.jpg" },
    { id: "7", name: "Ball of Yarn", description: "High-quality ball of yarn...", image: "assets/images/verateks/ball of yarn.jpg" },
    { id: "8", name: "Matweiss Pads", description: "High-quality Matweiss pads...", image: "assets/images/verateks/Matweiss Pads.jpg" },
    { id: "9", name: "Paint Auxiliary", description: "High-performance auxiliaries for paint and coating...", image: "assets/images/verateks/PAINT_AUXILIARY.jpg" },
    { id: "10", name: "Pre-treatment & Finishing", description: "Comprehensive solutions for textile pre-treatment...", image: "assets/images/verateks/pre_finish.jpg" }
  ];

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));
  }

  if (scrollTopBtn) {
    window.onscroll = () => { scrollTopBtn.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "flex" : "none"; };
    scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  function handleScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 50);
  }

  if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const servicesDetailsSection = document.getElementById("our-services-details");
      if (servicesDetailsSection) {
        servicesDetailsSection.classList.remove("hidden");
        servicesDetailsSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Main page product preview rendering (NO-CARD STYLE)
  function renderProductsOnMain(limit) {
    if (!productList) return;
    productList.innerHTML = "";
    const productsToRender = products.slice(0, limit);
    productsToRender.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "text-center transition-all duration-300 transform hover:scale-105 cursor-pointer";
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name} Image" class="w-full h-64 object-cover rounded-xl mb-6">
        <h3 class="text-2xl font-bold text-gray-800 mb-2">${product.name}</h3>
        <p class="text-gray-600">${product.description.split(".")[0]}.</p>
      `;
      productCard.addEventListener("click", () => {
        window.location.href = `product/product.html?id=${product.id}`;
      });
      productList.appendChild(productCard);
    });
    if (seeMoreBtn) {
      seeMoreBtn.style.display = (limit >= products.length) ? "none" : "block";
    }
  }

  if (seeMoreBtn) {
    seeMoreBtn.addEventListener("click", () => {
      productsVisibleOnMain += 4;
      renderProductsOnMain(productsVisibleOnMain);
    });
  }

  document.querySelectorAll(".partner-card").forEach((card) => {
    card.addEventListener("click", () => {
      const partnerId = card.dataset.partnerId;
      const partnerName = card.dataset.partnerNameEn;
      window.location.href = `product/product.html?partner=${partnerId}&name=${partnerName}`;
    });
  });

  if (bannerSlideshowContainer) {
    const bannerImages = ["assets/images/banners/factory_outlook.jpg", "assets/images/banners/lab_1.jpg", "assets/images/banners/lab_2.jpg", "assets/images/banners/automation.jpg", "assets/images/banners/lab_3.jpg", "assets/images/banners/worker_work.jpg"];
    let currentImageIndex = 0;
    bannerImages.forEach(src => {
      const img = document.createElement('img'); img.src = src; img.className = 'banner-image'; bannerSlideshowContainer.appendChild(img);
    });
    const bannerImageElements = bannerSlideshowContainer.querySelectorAll('.banner-image');
    if (bannerImageElements.length > 0) {
      bannerImageElements[0].classList.add('active');
      setInterval(() => {
        bannerImageElements[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % bannerImageElements.length;
        bannerImageElements[currentImageIndex].classList.add('active');
      }, 5000);
    }
  }

  handleScroll();
  window.addEventListener('scroll', handleScroll);
  renderProductsOnMain(productsVisibleOnMain);
});