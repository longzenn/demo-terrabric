// TerraBric Global - Products Dataset

const productsData = [
  {
    id: "classic-terracotta",
    title: "Classic Terracotta Floor Tiles",
    category: "flooring",
    image: "assets/flooring_tiles.png",
    description: "Sourced from high-purity natural clay, our classic terracotta flooring tiles offer exceptional warmth, earthy aesthetics, and durable wear. Ideal for patios, verandas, and rustic interior floor plans.",
    specs: {
      "Dimensions": "300 x 300 x 15 mm",
      "Material": "100% Natural Clay",
      "Water Absorption": "< 8% (ISO 10545-3)",
      "Bending Strength": ">= 20 N/mm²",
      "Slip Resistance": "R10 (DIN 51130)"
    },
    packing: "44 tiles per carton | 40 cartons per pallet | approx. 1,150 kg per pallet"
  },
  {
    id: "glazed-architectural",
    title: "Glazed Porcelain Ceramic Tiles",
    category: "flooring",
    image: "assets/flooring_tiles.png",
    description: "High-fired porcelain ceramic tiles with an elegant matte glaze. Engineered for high-traffic commercial environments, offering superior stain resistance, scratching resilience, and ease of maintenance.",
    specs: {
      "Dimensions": "600 x 600 x 10 mm",
      "Material": "Glazed Porcelain",
      "Water Absorption": "< 0.5% (ISO 10545-3)",
      "Abrasion Resistance": "PEI Class IV",
      "Frost Resistance": "Fully resistant"
    },
    packing: "4 tiles per box | 32 boxes per pallet | approx. 950 kg per pallet"
  },
  {
    id: "rustic-cobble-tile",
    title: "Rustic Clay Paving Tiles",
    category: "flooring",
    image: "assets/flooring_tiles.png",
    description: "Extra-thick, unglazed clay tiles with a rustic anti-slip finish. Specifically formulated for outdoor walkways, public driveways, and industrial landscaping applications demanding heavy load distribution.",
    specs: {
      "Dimensions": "200 x 100 x 30 mm",
      "Material": "Heavy-duty Extruded Clay",
      "Water Absorption": "< 6%",
      "Compression Strength": ">= 45 N/mm²",
      "Slip Resistance": "R12 (DIN 51130)"
    },
    packing: "50 tiles per box | 30 boxes per pallet | approx. 1,200 kg per pallet"
  },
  {
    id: "premium-industrial-pellets",
    title: "Premium ENplus A1 Wood Pellets",
    category: "pellets",
    image: "assets/wood_pellets.png",
    description: "High-density biomass wood pellets compressed from clean, chemical-free pine and spruce sawdust. Certified to ENplus A1 standards, assuring low ash content, maximum heat output, and minimal furnace maintenance.",
    specs: {
      "Diameter": "6 mm ± 1 mm",
      "Length": "3.15 to 40 mm",
      "Net Calorific Value": ">= 16.5 MJ/kg (4.6 kWh/kg)",
      "Ash Content": "< 0.7% (at 550°C)",
      "Moisture Content": "< 10%"
    },
    packing: "15 kg bags (65 bags per pallet) OR 1,000 kg Bulk Jumbo Bags"
  },
  {
    id: "standard-bio-pellets",
    title: "Industrial Grade Biomass Pellets",
    category: "pellets",
    image: "assets/wood_pellets.png",
    description: "High-performance industrial pellets manufactured from hardwood forestry residues. Specifically designed for large-scale district heating systems, power stations, and industrial boilers.",
    specs: {
      "Diameter": "8 mm ± 1 mm",
      "Length": "10 to 45 mm",
      "Net Calorific Value": ">= 16.0 MJ/kg",
      "Ash Content": "< 1.5%",
      "Moisture Content": "< 12%"
    },
    packing: "1,100 kg Bulk Bags OR Bulk Loose Loaded in shipping container"
  },
  {
    id: "solid-red-clay-bricks",
    title: "Solid Red Structural Clay Bricks",
    category: "bricks",
    image: "assets/building_bricks.png",
    description: "Traditional kiln-fired solid clay bricks offering unparalleled compression resistance, thermal mass retention, and structural durability. Excellent for load-bearing columns, facades, and classic brick masonry.",
    specs: {
      "Dimensions": "215 x 102.5 x 65 mm",
      "Material": "Fired Clay",
      "Compressive Strength": ">= 30 N/mm²",
      "Water Absorption": "< 12%",
      "Active Soluble Salts": "S2 Grade"
    },
    packing: "400 bricks per shrink-wrapped pack | 20 packs per container"
  },
  {
    id: "engineered-hollow-bricks",
    title: "Thermal Insulating Hollow Bricks",
    category: "bricks",
    image: "assets/building_bricks.png",
    description: "Lightweight multi-perforated clay blocks engineered to optimize acoustic dampening and thermal insulation. Enables fast-paced structural wall construction while lowering energy bills.",
    specs: {
      "Dimensions": "230 x 115 x 115 mm",
      "Material": "Extruded Clay",
      "Compressive Strength": ">= 15 N/mm²",
      "Water Absorption": "< 15%",
      "Void Ratio": "35% - 40%"
    },
    packing: "280 bricks per pallet | 24 pallets per 20ft container"
  },
  {
    id: "reclaimed-facing-bricks",
    title: "Reclaimed Finish Facing Bricks",
    category: "bricks",
    image: "assets/building_bricks.png",
    description: "Exquisite wire-cut facing bricks treated with surface washes to recreate the look of historic architectural brickwork. Ideal for high-end boutique facades and architectural feature walls.",
    specs: {
      "Dimensions": "215 x 102.5 x 65 mm",
      "Material": "Unglazed Facing Clay",
      "Compressive Strength": ">= 25 N/mm²",
      "Water Absorption": "< 10%",
      "Durability Rating": "F2 (Severe exposure)"
    },
    packing: "480 bricks per pack | Banded and palletized"
  }
];

// Export helper for ES Modules (if needed, otherwise defined globally)
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = productsData;
}
