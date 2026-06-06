// TerraBric Global - Core Site Interactions

document.addEventListener("DOMContentLoaded", () => {
  initHeaderScroll();
  initMobileNav();
  initScrollAnimations();
  initFaqAccordion();
  
  // Page-specific initializations
  if (document.querySelector(".products-grid")) {
    initProductsGrid();
  }
  if (document.getElementById("product-detail-container")) {
    initProductDetailPage();
  }
  if (document.getElementById("contact-form")) {
    initContactInquiryPreFill();
    initContactFormSubmit();
  }
});

/* --- HEADER ON-SCROLL EFFECT --- */
function initHeaderScroll() {
  const header = document.querySelector(".header");
  if (!header) return;

  const checkScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  // Check on load in case page is refreshed while scrolled
  checkScroll();
  window.addEventListener("scroll", checkScroll);
}

/* --- MOBILE DRAWER NAVIGATION --- */
function initMobileNav() {
  const burger = document.querySelector(".burger-menu");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!burger || !mobileNav) return;

  const toggleMenu = () => {
    burger.classList.toggle("open");
    mobileNav.classList.toggle("open");
    
    // Prevent body scrolling when menu is open
    if (mobileNav.classList.contains("open")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  burger.addEventListener("click", toggleMenu);

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      burger.classList.remove("open");
      mobileNav.classList.remove("open");
      document.body.style.overflow = "";
    });
  });
}

/* --- INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS --- */
function initScrollAnimations() {
  const elements = document.querySelectorAll(".fade-in-element");
  if (elements.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, observerOptions);

  elements.forEach(element => {
    observer.observe(element);
  });
}

/* --- FAQ ACCORDION --- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  if (faqItems.length === 0) return;

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      // Close other open items
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains("open")) {
          otherItem.classList.remove("open");
        }
      });
      // Toggle current item
      item.classList.toggle("open");
    });
  });
}

/* --- PRODUCTS GRID GENERATION, FILTERING, & MODAL --- */
function initProductsGrid() {
  const grid = document.querySelector(".products-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  if (!grid || typeof productsData === "undefined") return;

  // Render products helper
  const renderProducts = (category = "all") => {
    grid.innerHTML = "";
    
    const filtered = category === "all" 
      ? productsData 
      : productsData.filter(p => p.category === category);

    if (filtered.length === 0) {
      grid.innerHTML = `<p class="no-products">No products found in this category.</p>`;
      return;
    }

    filtered.forEach(product => {
      // Shorten description for preview
      const previewDesc = product.description.length > 90
        ? product.description.substring(0, 90) + "..."
        : product.description;

      // Create primary spec preview
      const keys = Object.keys(product.specs);
      const specLabel = keys[0] || "";
      const specVal = product.specs[specLabel] || "";

      const card = document.createElement("div");
      card.className = "product-card fade-in-element";
      card.setAttribute("data-id", product.id);
      card.innerHTML = `
        <div class="product-img">
          <img src="${product.image}" alt="${product.title}">
          <span class="product-tag">${product.category.replace("-", " ")}</span>
        </div>
        <div class="product-info">
          <h3>${product.title}</h3>
          <p>${previewDesc}</p>
          <div class="product-spec-preview">
            <span><strong>${specLabel}:</strong> ${specVal}</span>
          </div>
          <span class="product-action-link">View Specifications <span class="btn-icon">→</span></span>
        </div>
      `;

      // Redirect to dedicated details page on card click
      card.addEventListener("click", () => {
        window.location.href = `product-detail.html?id=${product.id}`;
      });
      grid.appendChild(card);
      
      // Small timeout to trigger transition
      setTimeout(() => card.classList.add("visible"), 50);
    });
  };

  // Bind filter buttons
  filterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-category");
      renderProducts(category);
    });
  });

  // Initial render (support category routing from URL parameters)
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get("category");
  if (catParam && ["flooring", "bricks", "pellets"].includes(catParam)) {
    filterBtns.forEach(b => {
      if (b.getAttribute("data-category") === catParam) {
        b.classList.add("active");
      } else {
        b.classList.remove("active");
      }
    });
    renderProducts(catParam);
  } else {
    renderProducts("all");
  }
}

/* --- MODAL OPEN / CLOSE --- */
function openProductModal(product) {
  // Create modal markup dynamically if it doesn't exist
  let modal = document.getElementById("product-detail-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "product-detail-modal";
    modal.className = "modal-overlay";
    document.body.appendChild(modal);
  }

  // Populate specifications rows
  let specsHTML = "";
  for (const [label, val] of Object.entries(product.specs)) {
    specsHTML += `
      <div class="modal-spec-row">
        <span class="modal-spec-label">${label}</span>
        <span class="modal-spec-value">${val}</span>
      </div>
    `;
  }

  modal.innerHTML = `
    <div class="modal-container">
      <div class="modal-close-btn" id="close-modal-btn">&times;</div>
      <div class="modal-gallery-side">
        <img src="${product.image}" alt="${product.title}">
      </div>
      <div class="modal-info-side">
        <div>
          <span class="modal-tag">${product.category.replace("-", " ")}</span>
          <h2 class="modal-title">${product.title}</h2>
          <p class="modal-description">${product.description}</p>
          
          <div class="modal-specs-table">
            <h4 style="margin-bottom: 1rem; font-weight: 600; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em;">Technical Specifications</h4>
            ${specsHTML}
            <div class="modal-spec-row">
              <span class="modal-spec-label">Packaging / MOQ</span>
              <span class="modal-spec-value" style="text-align: right; max-width: 60%;">${product.packing}</span>
            </div>
          </div>
        </div>
        
        <a href="contact.html?inquiry=${encodeURIComponent(product.title)}" class="btn btn-clay" style="width: 100%; text-align: center;">
          Inquire About This Product
        </a>
      </div>
    </div>
  `;

  // Open modal
  setTimeout(() => modal.classList.add("open"), 10);
  document.body.style.overflow = "hidden";

  // Bind close events
  const closeBtn = modal.querySelector("#close-modal-btn");
  const closeModal = () => {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  };
  
  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}

/* --- CONTACT INQUIRY QUERY STRING PRE-FILL --- */
function initContactInquiryPreFill() {
  const urlParams = new URLSearchParams(window.location.search);
  const inquiry = urlParams.get("inquiry");
  if (!inquiry) return;

  const productSelect = document.getElementById("contact-product");
  const messageArea = document.getElementById("contact-message");

  if (productSelect) {
    // Try to find a matching option or set the dropdown value
    let found = false;
    for (let i = 0; i < productSelect.options.length; i++) {
      if (productSelect.options[i].text.toLowerCase().includes(inquiry.toLowerCase()) || 
          productSelect.options[i].value.toLowerCase() === inquiry.toLowerCase()) {
        productSelect.selectedIndex = i;
        found = true;
        break;
      }
    }

    // If it's a specific product name not matching the broad categories exactly, we can set custom select option or prepend to message
    if (!found && messageArea) {
      messageArea.value = `Hello, I would like to receive an export quotation and technical datasheet for: "${inquiry}".\n\n` + messageArea.value;
    }
  }
}

/* --- CONTACT FORM SUBMISSION MOCKUP --- */
function initContactFormSubmit() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Simulate sending email
    const submitBtn = form.querySelector("button[type='submit']");
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = "Sending Inquiry...";

    setTimeout(() => {
      // Reset button
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      
      // Reset form
      form.reset();

      // Show toast
      showToast("Thank you! Your inquiry has been sent. A sales representative will contact you within 24 hours.");
    }, 1500);
  });
}

/* --- TOAST SYSTEM --- */
function showToast(message) {
  let toast = document.getElementById("toast-alert");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-alert";
    toast.className = "toast-notification";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <span style="font-size: 1.25rem;">✓</span>
    <span>${message}</span>
  `;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 5000);
}

/* --- DEDICATED PRODUCT DETAIL PAGE --- */
function initProductDetailPage() {
  const container = document.getElementById("product-detail-container");
  if (!container || typeof productsData === "undefined") return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  if (!productId) {
    showProductError(container, "No product specified.");
    return;
  }

  const product = productsData.find(p => p.id === productId);
  if (!product) {
    showProductError(container, "Product not found.");
    return;
  }

  // Update Page details
  document.title = `${product.title} | TerraBric Global`;
  
  const breadcrumb = document.getElementById("breadcrumb-product-title");
  if (breadcrumb) breadcrumb.innerText = product.title;

  const heroTitle = document.getElementById("detail-hero-title");
  if (heroTitle) heroTitle.innerText = product.title;

  // Highlight active sidebar category
  const sidebarLinks = document.querySelectorAll(".product-sidebar-link");
  sidebarLinks.forEach(link => {
    link.classList.remove("active");
    const linkHref = link.getAttribute("href");
    if (linkHref && linkHref.includes(`category=${product.category}`)) {
      link.classList.add("active");
    }
  });

  // Populate Specs Table HTML
  let specsHTML = "";
  for (const [label, val] of Object.entries(product.specs)) {
    specsHTML += `
      <div class="modal-spec-row">
        <span class="modal-spec-label">${label}</span>
        <span class="modal-spec-value">${val}</span>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="detail-back-navigation" style="margin-bottom: 2rem;">
      <a href="products.html?category=${product.category}" class="detail-back-btn" style="margin-bottom: 0;">
        &larr; Back to ${product.category.replace("-", " ")} catalog
      </a>
    </div>

    <div class="detail-view-grid">
      <!-- Left side: Image Box -->
      <div class="detail-img-box">
        <img src="${product.image}" alt="${product.title}">
      </div>

      <!-- Right side: Info and Specs -->
      <div class="detail-info-box">
        <span class="detail-tag">${product.category.replace("-", " ")}</span>
        <h2 class="detail-title">${product.title}</h2>
        <p class="detail-description">${product.description}</p>
        
        <div class="detail-specs-table-wrapper">
          <h4>Technical Specifications</h4>
          <div class="modal-specs-table">
            ${specsHTML}
            <div class="modal-spec-row">
              <span class="modal-spec-label">Packaging &amp; MOQ</span>
              <span class="modal-spec-value" style="text-align: right; max-width: 60%;">${product.packing}</span>
            </div>
          </div>
        </div>

        <a href="contact.html?inquiry=${encodeURIComponent(product.title)}" class="btn btn-clay" style="width: 100%; text-align: center;">
          Inquire About This Product
        </a>
      </div>
    </div>
  `;
}

function showProductError(container, message) {
  container.innerHTML = `
    <div style="text-align: center; padding: 4rem 2rem; border: 1px dashed var(--color-border);">
      <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--color-clay);">${message}</h3>
      <p style="margin-bottom: 2rem;">Please verify the product link or explore our full materials catalog.</p>
      <a href="products.html" class="btn btn-primary">Browse All Products</a>
    </div>
  `;
}
