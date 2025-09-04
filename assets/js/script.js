document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const learnMoreBtn = document.getElementById("learn-more-btn");
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  let previousPage = 'main';

  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  learnMoreBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const servicesDetailsSection = document.getElementById("our-services-details");
    if (servicesDetailsSection) {
      servicesDetailsSection.classList.remove("hidden");
      servicesDetailsSection.classList.add('animate-fadeIn');
      servicesDetailsSection.scrollIntoView({ behavior: "smooth" });
    }
  });

  window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollTopBtn.style.display = "flex";
    } else {
      scrollTopBtn.style.display = "none";
    }
  };

  scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });

  const products = [
    {
      id: "1",
      name: "Warping and Auxiliaries",
      description:
        "Specialized services for warping processes and auxiliary textile operations, ensuring high-quality yarn preparation for weaving.",
      image:
        "assets/images/jeniuschem/warping-and-auxiliaries.jpg",
      services: [
        "Yarn Preparation",
        "Warping Machine Operation",
        "Beam Preparation",
        "Quality Inspection of Warped Beams",
        "Auxiliary Textile Services",
      ],
      partnerId: "jeniuschem",
    },
    {
      id: "2",
      name: "Cotton Fabric",
      description:
        "High-quality cotton fabric, perfect for various apparel applications, offering comfort and durability.",
      image:
        "assets/images/jeniuschem/cotton.jpg",
      services: [
        "Raw Material Sourcing",
        "Fabric Quality Testing",
        "Sustainable Cotton Options",
        "Bulk Supply",
      ],
      partnerId: "jeniuschem",
    },
    {
      id: "3",
      name: "Staple Fiber",
      description:
        "Versatile staple fibers for textile production, available in various types like cotton, polyester, and blends.",
      image:
        "assets/images/jeniuschem/staple.jpg",
      services: [
        "Fiber Sourcing",
        "Fiber Quality Analysis",
        "Custom Fiber Blends",
        "Technical Support",
      ],
      partnerId: "jeniuschem",
    },
    {
      id: "4",
      name: "Cold Sizing Agent",
      description:
        "Advanced cold sizing agents for efficient and eco-friendly textile processing, improving yarn strength and weaveability.",
      image:
        "assets/images/jeniuschem/cold-sizing-agent.jpg",
      services: [
        "Sizing Agent Supply",
        "Application Guidance",
        "Performance Optimization",
        "Technical Consultation",
      ],
      partnerId: "jeniuschem",
    },
    {
      id: "5",
      name: "Raw Materials",
      description:
        "Sourcing and supply of diverse raw materials for textile and apparel manufacturing, ensuring quality and sustainability.",
      image: "assets/images/jeniuschem/raw-materials.jpg",
      services: [
        "Material Sourcing & Procurement",
        "Quality Assurance",
        "Supply Chain Management",
        "Sustainable Material Options",
      ],
      partnerId: "jeniuschem",
    },
    {
      id: "6",
      name: "Wool Fabric",
      description:
        "Premium wool fabrics for luxurious and comfortable garments, known for their warmth and natural properties.",
      image: "assets/images/jeniuschem/wool.jpg",
      services: [
        "Wool Sourcing",
        "Fabric Blending",
        "Quality Control",
        "Custom Weaving",
      ],
      partnerId: "jeniuschem",
    },
    {
      id: "7",
      name: "Ball of Yarn",
      description: "High-quality ball of yarn, suitable for various knitting and crochet projects.",
      image: "assets/images/verateks/ball of yarn.jpg",
      services: [
        "Yarn Supply",
        "Color Matching",
        "Custom Orders",
      ],
      partnerId: "verateks",
    },
    {
      id: "8",
      name: "Matweiss Pads",
      description: "High-quality Matweiss pads for various applications.",
      image: "assets/images/verateks/Matweiss Pads.jpg",
      services: [
        "Pad Supply",
        "Custom Sizing",
        "Bulk Orders",
      ],
      partnerId: "verateks",
    },
    // Duplicated products to ensure "See More" always shows more
    {
      id: "1-dup", // Changed ID to avoid conflicts if product ID is used elsewhere for unique identification
      name: "Warping and Auxiliaries",
      description:
        "Specialized services for warping processes and auxiliary textile operations, ensuring high-quality yarn preparation for weaving.",
      image:
        "assets/images/jeniuschem/warping-and-auxiliaries.jpg",
      services: [
        "Yarn Preparation",
        "Warping Machine Operation",
        "Beam Preparation",
        "Quality Inspection of Warped Beams",
        "Auxiliary Textile Services",
      ],
      partnerId: "jeniuschem",
    },
    {
      id: "2-dup",
      name: "Cotton Fabric",
      description:
        "High-quality cotton fabric, perfect for various apparel applications, offering comfort and durability.",
      image:
        "assets/images/jeniuschem/cotton.jpg",
      services: [
        "Raw Material Sourcing",
        "Fabric Quality Testing",
        "Sustainable Cotton Options",
        "Bulk Supply",
      ],
      partnerId: "jeniuschem",
    },
    {
      id: "3-dup",
      name: "Staple Fiber",
      description:
        "Versatile staple fibers for textile production, available in various types like cotton, polyester, and blends.",
      image:
        "assets/images/jeniuschem/staple.jpg",
      services: [
        "Fiber Sourcing",
        "Fiber Quality Analysis",
        "Custom Fiber Blends",
        "Technical Support",
      ],
      partnerId: "jeniuschem",
    },
    {
      id: "4-dup",
      name: "Cold Sizing Agent",
      description:
        "Advanced cold sizing agents for efficient and eco-friendly textile processing, improving yarn strength and weaveability.",
      image:
        "assets/images/jeniuschem/cold-sizing-agent.jpg",
      services: [
        "Sizing Agent Supply",
        "Application Guidance",
        "Performance Optimization",
        "Technical Consultation",
      ],
      partnerId: "jeniuschem",
    }
  ];

  const productList = document.getElementById("product-list");

  let productsVisible = 8;
  const seeMoreBtn = document.getElementById("see-more-btn");

  function renderProducts(limit) {
    productList.innerHTML = "";
    const productsToRender = products.slice(0, limit);
    productsToRender.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add(
        "p-6",
        "rounded-2xl",
        "transition-all",
        "duration-300",
        "transform",
        "hover:scale-105",
        "cursor-pointer",
        "animate-on-scroll"
      );

      productCard.innerHTML = `
                      <img src="${product.image}" alt="${product.name} Image" class="w-full h-64 object-cover rounded-xl mb-6">
                      <h3 class="text-2xl font-bold text-gray-800 mb-2">${product.name}</h3>
                      <p class="text-gray-600">${product.description.split(".")[0]}.</p>
                  `;
      productCard.addEventListener("click", () => {
        previousPage = 'main';
        showProductPage(product.id);
      });
      productList.appendChild(productCard);
    });

    // Re-observe new product cards for scroll animation
    document.querySelectorAll(".animate-on-scroll").forEach((section) => {
      observer.observe(section);
    });

    if (limit >= products.length) {
      seeMoreBtn.style.display = "none";
    } else {
      seeMoreBtn.style.display = "block";
    }
  }

  seeMoreBtn.addEventListener("click", () => {
    productsVisible = products.length;
    renderProducts(productsVisible);
  });

  function showProductPage(productId) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const product = products.find((p) => p.id === productId);
    if (product) {
      document.getElementById("main-content").classList.add("hidden");
      document.getElementById("partner-products-page").classList.add("hidden");
      const productPage = document.getElementById("product-page");
      productPage.classList.remove("hidden");

      // Hide the quote form by default
      document.getElementById("quote-form-container").classList.add("hidden");

      document.getElementById("product-image").src = product.image;
      document.getElementById("product-name").textContent = product.name;
      document.getElementById("product-description").textContent = product.description;

      const serviceListEl = document.getElementById("service-list");
      serviceListEl.innerHTML = "";
      product.services.forEach((service) => {
        const li = document.createElement("li");
        li.textContent = service;
        serviceListEl.appendChild(li);
      });

      document.getElementById("form-product-name").value = product.name;
    }
  }

  function goToHomePage(e, sectionId = '#') {
    if (e) e.preventDefault();
    document.getElementById("product-page").classList.add("hidden");
    document.getElementById("partner-products-page").classList.add("hidden");
    document.getElementById("main-content").classList.remove("hidden");

    if (sectionId && sectionId !== '#') {
      setTimeout(() => {
        const targetSection = document.querySelector(sectionId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // Logo clicks
  document.getElementById("main-page-logo").addEventListener("click", (e) => goToHomePage(e));
  document.getElementById("product-page-logo").addEventListener("click", (e) => goToHomePage(e));
  document.getElementById("partner-page-logo").addEventListener("click", (e) => goToHomePage(e));

  // Nav link clicks on product and partner pages
  document.querySelectorAll('.nav-link-product, .nav-link-partner').forEach(link => {
    link.addEventListener('click', (e) => {
      const sectionId = link.getAttribute('href');
      goToHomePage(e, sectionId);
    });
  });

  document.getElementById("get-quote-btn").addEventListener("click", () => {
    const formContainer = document.getElementById("quote-form-container");
    formContainer.classList.toggle("hidden");
  });

  document.getElementById("quote-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const formMessage = document.getElementById("form-message");
    formMessage.textContent = "Your message has been sent successfully! We will contact you shortly.";
    formMessage.classList.remove("hidden");
    setTimeout(() => {
      formMessage.classList.add("hidden");
      e.target.reset();
    }, 5000);
  });

  // --- NEW --- Embedded Contact Form Handler
  document.querySelectorAll(".embedded-contact-form").forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const messageEl = form.querySelector(".form-success-message");
      if (messageEl) {
        messageEl.textContent = "Thank you! Your message has been sent.";
        setTimeout(() => {
          messageEl.textContent = "";
          form.reset();
        }, 5000);
      }
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          // Unobserve after the animation has run once
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".animate-on-scroll").forEach((section) => {
    observer.observe(section);
  });

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            let sectionId = entry.target.id;
            if (sectionId === 'our-services-details') {
              sectionId = 'banner-section';
            }
            if (link.getAttribute('href') === '#' && sectionId === 'main-content') {
              link.classList.add("active");
            } else if (link.href.includes(sectionId)) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });

  renderProducts(productsVisible);

  // Staggered animation for certificate items
  const certificationSection = document.querySelector('#certification-section');
  const certificates = document.querySelectorAll('.certificate-item');

  const certObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        certificates.forEach((cert, index) => {
          setTimeout(() => {
            cert.classList.add('in-view');
          }, index * 150);
        });
        certObserver.unobserve(certificationSection);
      }
    });
  }, { threshold: 0.2 });

  if (certificationSection) {
    certObserver.observe(certificationSection);
  }

  // Banner Slideshow
  const bannerImages = [
    "assets/images/banners/banner.jpg",
    "assets/images/banners/lab-1.jpg",
    "assets/images/banners/product_zone_2.jpg",
    "assets/images/banners/product_zone.jpg",
    "assets/images/banners/products_out.jpg"
  ];

  let currentBannerImage = 0;
  const bannerElements = document.querySelectorAll('.banner-with-bg');

  function nextBannerImage() {
    const nextImageIndex = (currentBannerImage + 1) % bannerImages.length;

    const currentBanner = bannerElements[currentBannerImage % 2];
    const nextBanner = bannerElements[(currentBannerImage + 1) % 2];

    nextBanner.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${bannerImages[nextImageIndex]})`;

    currentBanner.classList.remove('active');
    nextBanner.classList.add('active');

    currentBannerImage = nextImageIndex;
  }

  bannerElements[0].style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${bannerImages[0]})`;
  bannerElements[0].classList.add('active');


  setInterval(nextBannerImage, 4000);


  // New JavaScript for Partner Products
  const partnerProductList = document.getElementById("partner-product-list");
  const partnerProductsTitle = document.getElementById("partner-products-title");
  const mainContent = document.getElementById("main-content");

  document.querySelectorAll(".partner-card").forEach(card => {
    card.addEventListener("click", () => {
      const partnerId = card.dataset.partnerId;
      const partnerName = card.dataset.partnerNameEn;

      renderPartnerProducts(partnerId, partnerName);
    });
  });

  function renderPartnerProducts(partnerId, partnerName) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    previousPage = 'partner';
    document.getElementById("product-page").classList.add("hidden"); // Hide product detail page if open
    mainContent.classList.add("hidden");
    document.getElementById("partner-products-page").classList.remove("hidden");
    partnerProductList.innerHTML = "";

    partnerProductsTitle.textContent = `${partnerName}'s Products`;

    let filteredProducts = products.filter(product => product.partnerId === partnerId);

    if (filteredProducts.length === 0) {
      partnerProductList.innerHTML = `<p class="text-center text-gray-600 text-xl col-span-full">
            No products found for this partner.
          </p>`;
      return;
    }

    filteredProducts.forEach(product => {
      const productCard = document.createElement("div");
      productCard.classList.add(
        "p-6",
        "rounded-2xl",
        "transition-all",
        "duration-300",
        "transform",
        "hover:scale-105",
        "cursor-pointer",
        "animate-on-scroll"
      );

      productCard.innerHTML = `
                      <img src="${product.image}" alt="${product.name} Image" class="w-full h-64 object-cover rounded-xl mb-6">
                      <h3 class="text-2xl font-bold text-gray-800 mb-2">${product.name}</h3>
                      <p class="text-gray-600">${product.description.split(".")[0]}.</p>
                  `;
      productCard.addEventListener("click", () => showProductPage(product.id));
      partnerProductList.appendChild(productCard);
    });

    // Re-observe new product cards for scroll animation
    document.querySelectorAll(".animate-on-scroll").forEach((section) => {
      observer.observe(section);
    });
  }

  document.getElementById("partner-products-contact-link").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("partner-products-page").classList.add("hidden");
    document.getElementById("main-content").classList.remove("hidden");
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});