document.addEventListener("DOMContentLoaded", function () {

  // --- GLOBAL VARIABLES ---
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const learnMoreBtn = document.getElementById("learn-more-btn");
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  let previousPage = 'main';

  
  // --- MOBILE MENU ---
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  
  // --- "LEARN MORE" BUTTON FUNCTIONALITY ---
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const servicesDetailsSection = document.getElementById("our-services-details");
      if (servicesDetailsSection) {
        servicesDetailsSection.classList.remove("hidden");
        servicesDetailsSection.classList.add('animate-fadeIn');
        servicesDetailsSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  
  // --- SCROLL TO TOP BUTTON ---
  window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollTopBtn.style.display = "flex";
    } else {
      scrollTopBtn.style.display = "none";
    }
  };

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  
  // --- PRODUCT DATA ---
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
    {
      id: "1-dup",
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

  
  // --- PRODUCT RENDERING LOGIC ---
  const productList = document.getElementById("product-list");
  let productsVisible = 8;
  const seeMoreBtn = document.getElementById("see-more-btn");

  function renderProducts(limit) {
    if (!productList) return;
    productList.innerHTML = "";
    const productsToRender = products.slice(0, limit);
    productsToRender.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add(
        "p-6", "rounded-2xl", "transition-all", "duration-300", 
        "transform", "hover:scale-105", "cursor-pointer", "animate-on-scroll"
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

  if (seeMoreBtn) {
    seeMoreBtn.addEventListener("click", () => {
      productsVisible = products.length;
      renderProducts(productsVisible);
    });
  }

  
  // --- PAGE NAVIGATION LOGIC ---
  function showProductPage(productId) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const product = products.find((p) => p.id === productId);
    if (product) {
      document.getElementById("main-content").classList.add("hidden");
      document.getElementById("partner-products-page").classList.add("hidden");
      const productPage = document.getElementById("product-page");
      productPage.classList.remove("hidden");

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
  document.getElementById("main-page-logo")?.addEventListener("click", (e) => goToHomePage(e));
  document.getElementById("product-page-logo")?.addEventListener("click", (e) => goToHomePage(e));
  document.getElementById("partner-page-logo")?.addEventListener("click", (e) => goToHomePage(e));

  // Nav link clicks on product and partner pages
  document.querySelectorAll('.nav-link-product, .nav-link-partner').forEach(link => {
    link.addEventListener('click', (e) => {
      const sectionId = link.getAttribute('href');
      goToHomePage(e, sectionId);
    });
  });

  
  // --- FORM HANDLING ---
  document.getElementById("get-quote-btn")?.addEventListener("click", () => {
    document.getElementById("quote-form-container").classList.toggle("hidden");
  });

  document.getElementById("quote-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const formMessage = document.getElementById("form-message");
    formMessage.textContent = "Your message has been sent successfully! We will contact you shortly.";
    formMessage.classList.remove("hidden");
    setTimeout(() => {
      formMessage.classList.add("hidden");
      e.target.reset();
    }, 5000);
  });

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

  
  // --- SCROLL ANIMATION OBSERVER ---
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 }
  );
  document.querySelectorAll(".animate-on-scroll").forEach((section) => {
    observer.observe(section);
  });

  
  // --- ACTIVE NAV LINK OBSERVER ---
  const sections = document.querySelectorAll("section[id]");
  const mainNavLinks = document.querySelectorAll("#desktop-nav .nav-link"); // Use the new navbar's links

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        mainNavLinks.forEach((link) => {
          link.classList.remove("active");
          let sectionId = entry.target.id;
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, { rootMargin: '-50% 0px -50% 0px' }); // Adjusted rootMargin for better accuracy

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });

  
  // --- INITIAL PRODUCT RENDER ---
  renderProducts(productsVisible);

  
  // --- CERTIFICATE ANIMATION ---
  const certificationSection = document.querySelector('#certification-section');
  const certificates = document.querySelectorAll('.certificate-item');

  if (certificationSection && certificates.length > 0) {
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
    certObserver.observe(certificationSection);
  }

  
  // --- BANNER SLIDESHOW ---
  const bannerImages = [
    "assets/images/banners/factory_outlook.jpg", "assets/images/banners/lab_1.jpg", 
    "assets/images/banners/lab_2.jpg", "assets/images/banners/automation.jpg", 
    "assets/images/banners/lab_3.jpg", "assets/images/banners/worker_work.jpg",
  ];
  const bannerSlideshowContainer = document.getElementById('banner-slideshow');

  if (bannerSlideshowContainer) {
    let currentImageIndex = 0;
    bannerImages.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.classList.add('banner-image');
      img.alt = "Banner Image";
      bannerSlideshowContainer.appendChild(img);
    });

    const bannerImageElements = document.querySelectorAll('#banner-slideshow .banner-image');
    
    function startImageSlideshow() {
      if (bannerImageElements.length === 0) return;
      bannerImageElements.forEach(img => img.classList.remove('active'));
      bannerImageElements[currentImageIndex].classList.add('active');
      setInterval(() => {
        bannerImageElements[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % bannerImageElements.length;
        bannerImageElements[currentImageIndex].classList.add('active');
      }, 5000);
    }
    startImageSlideshow();
  }

  
  // --- PARTNER PRODUCTS LOGIC ---
  const partnerProductList = document.getElementById("partner-product-list");
  const partnerProductsTitle = document.getElementById("partner-products-title");
  
  document.querySelectorAll(".partner-card").forEach(card => {
    card.addEventListener("click", () => {
      renderPartnerProducts(card.dataset.partnerId, card.dataset.partnerNameEn);
    });
  });

  function renderPartnerProducts(partnerId, partnerName) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    previousPage = 'partner';
    document.getElementById("main-content").classList.add("hidden");
    document.getElementById("product-page").classList.add("hidden");
    document.getElementById("partner-products-page").classList.remove("hidden");
    
    partnerProductList.innerHTML = "";
    partnerProductsTitle.textContent = `${partnerName}'s Products`;

    let filteredProducts = products.filter(product => product.partnerId === partnerId);

    if (filteredProducts.length === 0) {
      partnerProductList.innerHTML = `<p class="text-center text-gray-600 text-xl col-span-full">No products found for this partner.</p>`;
      return;
    }

    filteredProducts.forEach(product => {
      const productCard = document.createElement("div");
      productCard.classList.add(
        "p-6", "rounded-2xl", "transition-all", "duration-300", 
        "transform", "hover:scale-105", "cursor-pointer", "animate-on-scroll"
      );
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name} Image" class="w-full h-64 object-cover rounded-xl mb-6">
        <h3 class="text-2xl font-bold text-gray-800 mb-2">${product.name}</h3>
        <p class="text-gray-600">${product.description.split(".")[0]}.</p>
      `;
      productCard.addEventListener("click", () => showProductPage(product.id));
      partnerProductList.appendChild(productCard);
    });
    
    document.querySelectorAll(".animate-on-scroll").forEach(section => observer.observe(section));
  }
  

  // --- ENHANCED NAVBAR SCRIPT ---
  const header = document.getElementById("header");
  const desktopNav = document.getElementById("desktop-nav");
  const magicLine = document.getElementById("magic-line");

  // Function for Shrink on Scroll
  function handleScroll() {
      if (window.scrollY > 50) {
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
  }

  // Function for Magic Line
  function handleMagicLine() {
      if (!magicLine || !desktopNav) return;

      function updateMagicLine(element) {
          if (element) {
              magicLine.style.width = `${element.offsetWidth}px`;
              magicLine.style.left = `${element.offsetLeft}px`;
              magicLine.style.opacity = '1';
          }
      }
      
      mainNavLinks.forEach(link => {
          link.addEventListener('mouseenter', () => updateMagicLine(link));
      });

      desktopNav.addEventListener('mouseleave', () => {
          const activeLink = document.querySelector("#desktop-nav .nav-link.active");
          if (activeLink) {
              updateMagicLine(activeLink);
          } else {
              magicLine.style.opacity = '0';
          }
      });

      const activeLink = document.querySelector("#desktop-nav .nav-link.active");
      if (activeLink) {
          updateMagicLine(activeLink);
      } else {
          magicLine.style.opacity = '0';
      }
  }

  // Initialize all navbar functionalities
  handleScroll();
  handleMagicLine();
  
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleMagicLine);

  // Re-run magic line logic when active link changes
  const magicLineObserver = new MutationObserver(() => {
    handleMagicLine();
  });

  mainNavLinks.forEach(link => {
    magicLineObserver.observe(link, { attributes: true, attributeFilter: ['class'] });
  });

});