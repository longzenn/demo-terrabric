var v=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var A=v((_,m)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();const h=[{id:"classic-terracotta",title:"Classic Terracotta Floor Tiles",category:"flooring",image:"assets/flooring_tiles.png",gallery:["assets/flooring_tiles.png","assets/terracotta_detail.png","assets/about_company.png"],useCases:["Residential verandas and open-air patios","Rustic-themed dining areas and cellars","Restoration of historic architectural layouts"],description:"Sourced from high-purity natural clay, our classic terracotta flooring tiles offer exceptional warmth, earthy aesthetics, and durable wear. Ideal for patios, verandas, and rustic interior floor plans.",specs:{Dimensions:"300 x 300 x 15 mm",Material:"100% Natural Clay","Water Absorption":"< 8% (ISO 10545-3)","Bending Strength":">= 20 N/mm²","Slip Resistance":"R10 (DIN 51130)"},packing:"44 tiles per carton | 40 cartons per pallet | approx. 1,150 kg per pallet"},{id:"glazed-architectural",title:"Glazed Porcelain Ceramic Tiles",category:"flooring",image:"assets/flooring_tiles.png",gallery:["assets/flooring_tiles.png","assets/terracotta_detail.png","assets/about_company.png"],useCases:["High-traffic commercial retail flooring","Modern corporate offices and receptions","Kitchen and wet-room surfaces requiring chemical durability"],description:"High-fired porcelain ceramic tiles with an elegant matte glaze. Engineered for high-traffic commercial environments, offering superior stain resistance, scratching resilience, and ease of maintenance.",specs:{Dimensions:"600 x 600 x 10 mm",Material:"Glazed Porcelain","Water Absorption":"< 0.5% (ISO 10545-3)","Abrasion Resistance":"PEI Class IV","Frost Resistance":"Fully resistant"},packing:"4 tiles per box | 32 boxes per pallet | approx. 950 kg per pallet"},{id:"rustic-cobble-tile",title:"Rustic Clay Paving Tiles",category:"flooring",image:"assets/flooring_tiles.png",gallery:["assets/flooring_tiles.png","assets/terracotta_detail.png","assets/about_company.png"],useCases:["Commercial plazas and public pedestrian walkways","Industrial loading docks and driveway paving","Urban landscaping and heavy-duty load distribution corridors"],description:"Extra-thick, unglazed clay tiles with a rustic anti-slip finish. Specifically formulated for outdoor walkways, public driveways, and industrial landscaping applications demanding heavy load distribution.",specs:{Dimensions:"200 x 100 x 30 mm",Material:"Heavy-duty Extruded Clay","Water Absorption":"< 6%","Compression Strength":">= 45 N/mm²","Slip Resistance":"R12 (DIN 51130)"},packing:"50 tiles per box | 30 boxes per pallet | approx. 1,200 kg per pallet"},{id:"premium-industrial-pellets",title:"Premium ENplus A1 Wood Pellets",category:"pellets",image:"assets/wood_pellets.png",gallery:["assets/wood_pellets.png","assets/pellets_storage.png","assets/shipping_containers.png"],useCases:["Residential automated heating stoves","District heating biomass boilers","Carbon-neutral university campuses and municipal networks"],description:"High-density biomass wood pellets compressed from clean, chemical-free pine and spruce sawdust. Certified to ENplus A1 standards, assuring low ash content, maximum heat output, and minimal furnace maintenance.",specs:{Diameter:"6 mm ± 1 mm",Length:"3.15 to 40 mm","Net Calorific Value":">= 16.5 MJ/kg (4.6 kWh/kg)","Ash Content":"< 0.7% (at 550°C)","Moisture Content":"< 10%"},packing:"15 kg bags (65 bags per pallet) OR 1,000 kg Bulk Jumbo Bags"},{id:"standard-bio-pellets",title:"Industrial Grade Biomass Pellets",category:"pellets",image:"assets/wood_pellets.png",gallery:["assets/wood_pellets.png","assets/pellets_storage.png","assets/shipping_containers.png"],useCases:["Co-firing in thermal coal power stations","Heavy industrial smelting and manufacturing furnaces","Large-scale shipping container logistics and bulk distribution"],description:"High-performance industrial pellets manufactured from hardwood forestry residues. Specifically designed for large-scale district heating systems, power stations, and industrial boilers.",specs:{Diameter:"8 mm ± 1 mm",Length:"10 to 45 mm","Net Calorific Value":">= 16.0 MJ/kg","Ash Content":"< 1.5%","Moisture Content":"< 12%"},packing:"1,100 kg Bulk Bags OR Bulk Loose Loaded in shipping container"},{id:"solid-red-clay-bricks",title:"Solid Red Structural Clay Bricks",category:"bricks",image:"assets/building_bricks.png",gallery:["assets/building_bricks.png","assets/factory_kiln.png","assets/about_company.png"],useCases:["Load-bearing columns and structural brick masonry","Architectural exterior exposed facing facades","High-temperature residential and outdoor fireplace builds"],description:"Traditional kiln-fired solid clay bricks offering unparalleled compression resistance, thermal mass retention, and structural durability. Excellent for load-bearing columns, facades, and classic brick masonry.",specs:{Dimensions:"215 x 102.5 x 65 mm",Material:"Fired Clay","Compressive Strength":">= 30 N/mm²","Water Absorption":"< 12%","Active Soluble Salts":"S2 Grade"},packing:"400 bricks per shrink-wrapped pack | 20 packs per container"},{id:"engineered-hollow-bricks",title:"Thermal Insulating Hollow Bricks",category:"bricks",image:"assets/building_bricks.png",gallery:["assets/building_bricks.png","assets/factory_kiln.png","assets/about_company.png"],useCases:["Multi-story partition wall acoustic dampening","Insulated outer cavity building envelopes","Fast-paced commercial wall framing structures"],description:"Lightweight multi-perforated clay blocks engineered to optimize acoustic dampening and thermal insulation. Enables fast-paced structural wall construction while lowering energy bills.",specs:{Dimensions:"230 x 115 x 115 mm",Material:"Extruded Clay","Compressive Strength":">= 15 N/mm²","Water Absorption":"< 15%","Void Ratio":"35% - 40%"},packing:"280 bricks per pallet | 24 pallets per 20ft container"},{id:"reclaimed-facing-bricks",title:"Reclaimed Finish Facing Bricks",category:"bricks",image:"assets/building_bricks.png",gallery:["assets/building_bricks.png","assets/factory_kiln.png","assets/about_company.png"],useCases:["High-end boutique hotel architectural facades","Luxury residential feature walls and fire hearths","Historic district conservation restoration projects"],description:"Exquisite wire-cut facing bricks treated with surface washes to recreate the look of historic architectural brickwork. Ideal for high-end boutique facades and architectural feature walls.",specs:{Dimensions:"215 x 102.5 x 65 mm",Material:"Unglazed Facing Clay","Compressive Strength":">= 25 N/mm²","Water Absorption":"< 10%","Durability Rating":"F2 (Severe exposure)"},packing:"480 bricks per pack | Banded and palletized"}];typeof window<"u"&&(window.productsData=h);typeof m<"u"&&typeof m.exports<"u"&&(m.exports=h);document.addEventListener("DOMContentLoaded",()=>{w(),k(),L(),x(),document.querySelector(".products-grid")&&E(),document.getElementById("product-detail-container")&&$(),document.getElementById("contact-form")&&(S(),C())});function w(){const t=document.querySelector(".header");if(!t)return;const e=()=>{window.scrollY>50?t.classList.add("scrolled"):t.classList.remove("scrolled")};e(),window.addEventListener("scroll",e)}function k(){const t=document.querySelector(".burger-menu"),e=document.querySelector(".mobile-nav"),s=document.querySelectorAll(".mobile-nav-link");if(!t||!e)return;const i=()=>{t.classList.toggle("open"),e.classList.toggle("open"),e.classList.contains("open")?document.body.style.overflow="hidden":document.body.style.overflow=""};t.addEventListener("click",i),s.forEach(n=>{n.addEventListener("click",()=>{t.classList.remove("open"),e.classList.remove("open"),document.body.style.overflow=""})})}function L(){const t=document.querySelectorAll(".fade-in-element");if(t.length===0)return;const e={root:null,rootMargin:"0px",threshold:.15},s=new IntersectionObserver((i,n)=>{i.forEach(a=>{a.isIntersecting&&(a.target.classList.add("visible"),n.unobserve(a.target))})},e);t.forEach(i=>{s.observe(i)})}function x(){const t=document.querySelectorAll(".faq-item");t.length!==0&&t.forEach(e=>{e.querySelector(".faq-question").addEventListener("click",()=>{t.forEach(i=>{i!==e&&i.classList.contains("open")&&i.classList.remove("open")}),e.classList.toggle("open")})})}function E(){const t=document.querySelector(".products-grid"),e=document.querySelectorAll(".filter-btn");if(!t||typeof productsData>"u")return;const s=(a="all")=>{t.innerHTML="";const c=a==="all"?productsData:productsData.filter(o=>o.category===a);if(c.length===0){t.innerHTML='<p class="no-products">No products found in this category.</p>';return}c.forEach(o=>{const d=o.description.length>90?o.description.substring(0,90)+"...":o.description,u=Object.keys(o.specs)[0]||"",g=o.specs[u]||"",r=document.createElement("div");r.className="product-card fade-in-element",r.setAttribute("data-id",o.id),r.innerHTML=`
        <div class="product-img">
          <img src="${o.image}" alt="${o.title}">
          <span class="product-tag">${o.category.replace("-"," ")}</span>
        </div>
        <div class="product-info">
          <h3>${o.title}</h3>
          <p>${d}</p>
          <div class="product-spec-preview">
            <span><strong>${u}:</strong> ${g}</span>
          </div>
          <span class="product-action-link">View Specifications <span class="btn-icon">→</span></span>
        </div>
      `,r.addEventListener("click",()=>{window.location.href=`product-detail.html?id=${o.id}`}),t.appendChild(r),setTimeout(()=>r.classList.add("visible"),50)})};e.forEach(a=>{a.addEventListener("click",c=>{e.forEach(d=>d.classList.remove("active")),a.classList.add("active");const o=a.getAttribute("data-category");s(o)})});const n=new URLSearchParams(window.location.search).get("category");n&&["flooring","bricks","pellets"].includes(n)?(e.forEach(a=>{a.getAttribute("data-category")===n?a.classList.add("active"):a.classList.remove("active")}),s(n)):s("all")}function S(){const e=new URLSearchParams(window.location.search).get("inquiry");if(!e)return;const s=document.getElementById("contact-product"),i=document.getElementById("contact-message");if(s){let n=!1;for(let a=0;a<s.options.length;a++)if(s.options[a].text.toLowerCase().includes(e.toLowerCase())||s.options[a].value.toLowerCase()===e.toLowerCase()){s.selectedIndex=a,n=!0;break}!n&&i&&(i.value=`Hello, I would like to receive an export quotation and technical datasheet for: "${e}".

`+i.value)}}function C(){const t=document.getElementById("contact-form");t&&t.addEventListener("submit",e=>{e.preventDefault();const s=t.querySelector("button[type='submit']"),i=s.innerHTML;s.disabled=!0,s.innerHTML="Sending Inquiry...",setTimeout(()=>{s.disabled=!1,s.innerHTML=i,t.reset(),q("Thank you! Your inquiry has been sent. A sales representative will contact you within 24 hours.")},1500)})}function q(t){let e=document.getElementById("toast-alert");e||(e=document.createElement("div"),e.id="toast-alert",e.className="toast-notification",document.body.appendChild(e)),e.innerHTML=`
    <span style="font-size: 1.25rem;">✓</span>
    <span>${t}</span>
  `,e.classList.add("show"),setTimeout(()=>{e.classList.remove("show")},5e3)}function $(){const t=document.getElementById("product-detail-container");if(!t||typeof productsData>"u")return;const s=new URLSearchParams(window.location.search).get("id");if(!s){f(t,"No product specified.");return}const i=productsData.find(r=>r.id===s);if(!i){f(t,"Product not found.");return}document.title=`${i.title} | TerraBric Global`;const n=document.getElementById("breadcrumb-product-title");n&&(n.innerText=i.title);const a=document.getElementById("detail-hero-title");a&&(a.innerText=i.title),document.querySelectorAll(".product-sidebar-link").forEach(r=>{r.classList.remove("active");const l=r.getAttribute("href");l&&l.includes(`category=${i.category}`)&&r.classList.add("active")});let o="";for(const[r,l]of Object.entries(i.specs))o+=`
      <div class="modal-spec-row">
        <span class="modal-spec-label">${r}</span>
        <span class="modal-spec-value">${l}</span>
      </div>
    `;const d=i.gallery||[i.image];t.innerHTML=`
    <div class="detail-back-navigation" style="margin-bottom: 2rem;">
      <a href="products.html?category=${i.category}" class="detail-back-btn" style="margin-bottom: 0;">
        &larr; Back to ${i.category.replace("-"," ")} catalog
      </a>
    </div>

    <div class="detail-view-grid">
      <!-- Left side: Image Gallery -->
      <div class="detail-gallery-container">
        <div class="detail-img-box" id="main-detail-img-box" title="Click to view full image">
          <img src="${i.image}" id="main-detail-img" alt="${i.title}">
        </div>
        <div class="detail-thumb-grid">
          ${d.map((r,l)=>`
            <div class="detail-thumb ${l===0?"active":""}" data-index="${l}">
              <img src="${r}" alt="${i.title} angle ${l+1}">
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Right side: Info and Specs -->
      <div class="detail-info-box">
        <span class="detail-tag">${i.category.replace("-"," ")}</span>
        <h2 class="detail-title">${i.title}</h2>
        <p class="detail-description">${i.description}</p>
        
        <div class="detail-specs-table-wrapper">
          <h4>Technical Specifications</h4>
          <div class="modal-specs-table">
            ${o}
            <div class="modal-spec-row">
              <span class="modal-spec-label">Packaging &amp; MOQ</span>
              <span class="modal-spec-value" style="text-align: right; max-width: 60%;">${i.packing}</span>
            </div>
          </div>
        </div>

        <a href="contact.html?inquiry=${encodeURIComponent(i.title)}" class="btn btn-clay" style="width: 100%; text-align: center;">
          Request Export Quote
        </a>
      </div>
    </div>

    <!-- Application Use Cases -->
    <div class="detail-use-cases">
      <h3>Key B2B Application Use Cases</h3>
      <div class="use-cases-grid">
        ${(i.useCases||[]).map((r,l)=>{const y=["🏗️","📐","🚢"],b=["Structural Framing","Architectural Detailing","Export Optimization"];return`
            <div class="use-case-card">
              <span class="use-case-icon">${y[l%3]}</span>
              <h4>${b[l%3]}</h4>
              <p>${r}</p>
            </div>
          `}).join("")}
      </div>
    </div>
  `;const p=t.querySelector("#main-detail-img"),u=t.querySelectorAll(".detail-thumb");let g=0;u.forEach(r=>{r.addEventListener("click",()=>{u.forEach(l=>l.classList.remove("active")),r.classList.add("active"),g=parseInt(r.getAttribute("data-index")),p.src=d[g]})}),t.querySelector("#main-detail-img-box").addEventListener("click",()=>{I(d,g)})}function f(t,e){t.innerHTML=`
    <div style="text-align: center; padding: 4rem 2rem; border: 1px dashed var(--color-border);">
      <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--color-clay);">${e}</h3>
      <p style="margin-bottom: 2rem;">Please verify the product link or explore our full materials catalog.</p>
      <a href="products.html" class="btn btn-primary">Browse All Products</a>
    </div>
  `}function I(t,e){let s=document.getElementById("lightbox-modal");s||(s=document.createElement("div"),s.id="lightbox-modal",s.className="lightbox-overlay",document.body.appendChild(s)),s.innerHTML=`
    <div class="lightbox-container">
      <div class="lightbox-close" id="close-lightbox">&times;</div>
      <div class="lightbox-nav lightbox-prev" id="prev-lightbox">&larr;</div>
      <img src="${t[e]}" class="lightbox-image" id="lightbox-img" alt="Enlarged view">
      <div class="lightbox-nav lightbox-next" id="next-lightbox">&rarr;</div>
    </div>
  `;let i=e;const n=s.querySelector("#lightbox-img"),a=()=>{n.style.opacity="0.5",setTimeout(()=>{n.src=t[i],n.style.opacity="1"},150)},c=()=>{i=(i+1)%t.length,a()},o=()=>{i=(i-1+t.length)%t.length,a()},d=()=>{s.classList.remove("open"),document.body.style.overflow="",document.removeEventListener("keydown",p)},p=u=>{u.key==="ArrowRight"?c():u.key==="ArrowLeft"?o():u.key==="Escape"&&d()};s.querySelector("#close-lightbox").addEventListener("click",d),s.querySelector("#next-lightbox").addEventListener("click",c),s.querySelector("#prev-lightbox").addEventListener("click",o),s.addEventListener("click",u=>{u.target===s&&d()}),document.addEventListener("keydown",p),setTimeout(()=>s.classList.add("open"),10),document.body.style.overflow="hidden"}});export default A();
