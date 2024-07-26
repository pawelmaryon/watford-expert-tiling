export const TILING_SERVICES = {
  floor: {
    title: 'Floor Tiling',
    description: "Floor tiling is a versatile and practical flooring option that can enhance the functionality and aesthetics of any space, from residential to commercial settings. This process involves several key steps and considerations, including the choice of tile material, the design pattern, and the installation process.",
    material: {
      title: 'Materials',
      description: "Floor tiles can be made from various materials, each offering different benefits and aesthetic qualities:",
      types: {
        title: 'Types',
        ceramic_tiles: {
          title: 'Ceramic Tiles',
          description: "Made from clay and other natural materials, ceramic tiles are durable, water-resistant, and available in numerous designs and colors."},
        porcelain_tiles: {
          title: 'Porcelain Tiles',
          description: "A type of ceramic tile, porcelain is denser, more durable, and less porous. It is suitable for high-traffic areas and wet environments."},
        natural_stone_tiles: {
          title: "Natural Stone Tiles",
          description: "Includes marble, granite, slate, and travertine. These tiles offer a natural, luxurious look but often require more maintenance."},
        vinyl_tiles:{
          title: 'Vinyl Tiles',
          description: "Made from synthetic materials, vinyl tiles are cost-effective, water-resistant, and available in a wide range of styles, including those that mimic natural stone or wood."},
        glass_tiles: {
          title: 'Glass Tiles',
          description: "Typically used for decorative purposes, glass tiles can add a unique, glossy finish to a floor."},
        cement_tiles: {
          title: 'Ceramic Tiles',
          description: "Known for their durability and variety of patterns, cement tiles are often used in decorative applications."}
      }
    },
    design_patterns: {
      title: 'Design Patterns',
      description: 'The layout of the tiles can significantly impact the visual appeal of the floor. Common patterns include:',
      types: {
        straight_lay: {
          title: 'Straight Lay',
          description: 'Tiles are aligned in a straightforward grid, creating a clean and simple look.',
        },
        diagonal_lay: {
          title: 'Diagonal Lay',
          description: 'Tiles are laid at a 45-degree angle to the walls, adding a dynamic element to the floor.',
        },
        herringbone: {
          title: 'Herringbone',
          description: 'Rectangular tiles are arranged in a zigzag pattern, creating a sophisticated and intricate design.',
        },
        basket_weave: {
          title: 'Basket Weave',
          description: 'This pattern mimics the look of woven baskets, adding texture and complexity.',
        },
        checkerboard: {
          title: 'Checkerboard',
          description: 'Alternating colors in a grid pattern, reminiscent of a checkerboard.',
        },
        versailles: {
          title: 'Versailles',
          description: 'A complex pattern that combines tiles of different sizes to create a patchwork effect.',
        },
      }
    },
    installation_process: {
      title: 'Installation Process',
      description: 'Installing floor tiles involves several steps:',
      guide: {
        preparation: {
          title: 'Preparation',
          description: 'The floor must be clean, level, and dry. If necessary, old flooring is removed, and the surface is prepared with an appropriate underlayment.'
        },
        layout: {
          title: 'Layout',
          description: ' A layout plan is created, often starting from the center of the room to ensure a balanced design. Dry laying the tiles can help visualize the final result.'
        },
        adhesive_application: {
          title: 'Adhesive Application',
          description: 'Tile adhesive or mortar is spread on the floor using a notched trowel. The tiles are then pressed into place, following the chosen pattern.'
        },
        cutting_tiles: {
          title: 'Cutting Tiles',
          description: 'Tiles near edges or around obstacles are cut to fit using a tile cutter or wet saw.'
        },
        grouting: {
          title: 'Grouting',
          description: 'Once the adhesive sets, grout is applied between the tiles to fill the gaps. The excess grout is wiped off, and the surface is cleaned.'
        },
        sealing: {
          title: 'Sealing',
          description: 'Depending on the material, a sealant may be applied to protect the tiles and grout from stains and moisture.'
        },
      }
    },
    benefits_and_considerations: {
      title: 'Benefits and Considerations',
      durability: {
        title: 'Durability',
        description: 'Tiles are long-lasting and can withstand heavy traffic.'
      },
      maintenance: {
        title: 'Maintenance',
        description: 'Tiles are generally easy to clean and maintain, but some materials, like natural stone, may require special care.'
      },
      aesthetics: {
        title: 'Aesthetics',
        description: 'With a vast array of materials, colors, and patterns, tiles can enhance the aesthetic appeal of any space.'
      },
      cost: {
        title: 'Cost',
        description: 'The cost can vary widely depending on the material and complexity of the installation.'
      },
    }
  },
  wall: {
    title: 'Wall Tiling',
    description: 'Wall tiling enhances the functionality and aesthetic appeal of any space, offering a durable and visually pleasing solution for various applications. This process enhances both the functionality and aesthetic appeal of the walls. Here are the key aspects of wall tiling:',
    material: {
      title: 'Materials',
      description: "Wall tiles can be made from different materials, each offering unique qualities and benefits:",
      types: {
        ceramic_tiles: {
          title: 'Ceramic Tiles',
          description: "Made from clay and other natural materials, ceramic tiles are durable, water-resistant, and available in numerous designs and colors."
        },
        porcelain_tiles: {
          title: 'Porcelain Tiles',
          description: "A type of ceramic tile, porcelain is denser, more durable, and less porous, making it ideal for high-moisture areas like bathrooms."
        },
        glass_tiles: {
          title: 'Glass Tiles',
          description: "Known for their shiny, reflective surface, glass tiles are often used for decorative purposes, adding brightness and a modern touch to spaces."
        },
        natural_stone_tiles: {
          title: 'Natural Stone Tiles',
          description: "Includes marble, granite, slate, and travertine. These tiles offer a luxurious, natural look but often require more maintenance and are generally more expensive."
        },
        metal_tiles: {
          title: 'Metal Tiles',
          description: "Made from materials like stainless steel, copper, and aluminum, metal tiles add a contemporary and industrial look."
        },
        mosaic_tiles: {
          title: 'Mosaic Tiles',
          description: "Small tiles made from ceramic, glass, stone, or metal arranged to create intricate patterns or images. They are often used for decorative features or backsplashes."
        },
      },
    },
    design_patterns: {
      straight_lay: {
        name: 'Straighs Lay',
        description: 'Tiles are aligned in a straightforward grid, creating a clean and simple appearance.'
      },
      diagonal_lay: {
        name: 'Diagonal Lay',
        description: 'Tiles are laid at a 45-degree angle to the edges, adding a dynamic and visually interesting element.'
      },
      herringbone: {
        name: 'Herringbone',
        description: 'Rectangular tiles are arranged in a zigzag pattern, providing a sophisticated and intricate design.'
      },
      brick_or_subway: {
        name: 'Brick or Subway',
        description: 'Tiles are staggered like bricks in a wall, creating a timeless and classic look.'
      },
      chevron: {
        name: 'Chevron',
        description: 'Similar to herringbone but with each rectangular tile cut at an angle to form a continuous zigzag pattern.'
      },
      basket_weave: {
        name: 'Basket Weave',
        description: 'Mimics the look of woven baskets, adding texture and complexity.'
      },
    },
    installation_process: {
      preparation: {
        name: 'Preparation',
        description: 'The wall surface must be clean, dry, and even. Any old coverings or loose paint should be removed, and repairs made if necessary.'
      },
      layout: {
        name: 'Layout',
        description: 'Planning the layout is crucial to ensure a balanced design. A dry run, where tiles are placed without adhesive, helps visualize the final result..'
      },
      adhesive_application: {
        name: 'Adhesive Application',
        description: 'Tile adhesive or thin-set mortar is applied to the wall with a notched trowel, creating grooves for better adhesion.'
      },
      setting_tiles: {
        name: 'Setting Tiles',
        description: 'Tiles are pressed into the adhesive, following the chosen pattern. Spacers are used to maintain consistent gaps between tiles for grout lines.'
      },
      cutting_tiles: {
        name: 'Cutting Tiles:',
        description: 'Tiles around edges, corners, or obstacles like outlets are cut to fit using a tile cutter or wet saw.'
      },
      grouting: {
        name: 'Grouting',
        description: ' Once the adhesive sets, grout is applied to fill the gaps between tiles. Excess grout is wiped off, and the surface is cleaned.'
      },
      sealing: {
        name: 'Sealing',
        description: 'Depending on the tile material, a sealant may be applied to protect the tiles and grout from stains and moisture.'
      },
    },
    benefits_and_considerations: {
      durability: {
        name: 'Durability',
        description: 'Wall tiles are durable and can withstand impacts, moisture, and heat, making them ideal for kitchens, bathrooms, and other high-use areas.'
      },
      maintenance: {
        name: 'Maintenance',
        description: 'Tiles are generally easy to clean and maintain. However, grout lines may require periodic cleaning and resealing.'
      },
      aesthetics: {
        name: 'Aesthetics',
        description: 'Wall tiles come in a wide range of materials, colors, and patterns, allowing for creative and personalized designs.'
      },
      cost: {
        name: 'Cost',
        description: 'The cost of wall tiling can vary widely based on the material chosen and the complexity of the installation.'
      },
    },
    applications: {
      kitchens: {
        name: 'Kitchens',
        description: 'Commonly used for backsplashes to protect walls from moisture and stains while adding decorative elements.'
      },
      bathrooms: {
        name: 'Bathrooms',
        description: 'Used extensively in showers, around bathtubs, and on walls to create water-resistant surfaces.'
      },
      accent_walls: {
        name: 'Accent Walls',
        description: 'Adding a tiled accent wall can create a focal point in living rooms, bedrooms, or entryways.'
      },
      commercial_spaces: {
        name: 'Commercial Spaces',
        description: 'Often used in restaurants, hotels, and other commercial settings for their durability and design versatility.'
      },
    },
    installation_process: {
      title: 'Installation Process',
      preparation: {
        title: 'Preparation',
        description: 'The wall surface must be clean, dry, and even. Any old coverings or loose paint should be removed, and repairs made if necessary.'
      },
      layout: {
        title: 'Layout',
        description: 'Planning the layout is crucial to ensure a balanced design. A dry run, where tiles are placed without adhesive, helps visualize the final result..'
      },
      adhesive_application: {
        title: 'Adhesive Application',
        description: 'Tile adhesive or thin-set mortar is applied to the wall with a notched trowel, creating grooves for better adhesion.'
      },
      setting_tiles: {
        title: 'Setting Tiles',
        description: 'Tiles are pressed into the adhesive, following the chosen pattern. Spacers are used to maintain consistent gaps between tiles for grout lines.'
      },
      cutting_tiles: {
        title: 'Cutting Tiles:',
        description: 'Tiles around edges, corners, or obstacles like outlets are cut to fit using a tile cutter or wet saw.'
      },
      grouting: {
        title: 'Grouting',
        description: ' Once the adhesive sets, grout is applied to fill the gaps between tiles. Excess grout is wiped off, and the surface is cleaned.'
      },
      sealing: {
        title: 'Sealing',
        description: 'Depending on the tile material, a sealant may be applied to protect the tiles and grout from stains and moisture.'
      },
    },
    benefits_and_considerations: {
      title: 'Benefits and Considerations',
      durability: {
        title: 'Durability',
        description: 'Wall tiles are durable and can withstand impacts, moisture, and heat, making them ideal for kitchens, bathrooms, and other high-use areas.'
      },
      maintenance: {
        title: 'Maintenance',
        description: 'Tiles are generally easy to clean and maintain. However, grout lines may require periodic cleaning and resealing.'
      },
      aesthetics: {
        title: 'Aesthetics',
        description: 'Wall tiles come in a wide range of materials, colors, and patterns, allowing for creative and personalized designs.'
      },
      cost: {
        title: 'Cost',
        description: 'The cost of wall tiling can vary widely based on the material chosen and the complexity of the installation.'
      },
    },
    applications: {
      title: 'Applications',
      kitchens: {
        title: 'Kitchens',
        description: 'Commonly used for backsplashes to protect walls from moisture and stains while adding decorative elements.'
      },
      bathrooms: {
        title: 'Bathrooms',
        description: 'Used extensively in showers, around bathtubs, and on walls to create water-resistant surfaces.'
      },
      accent_walls: {
        title: 'Accent Walls',
        description: 'Adding a tiled accent wall can create a focal point in living rooms, bedrooms, or entryways.'
      },
      commercial_spaces: {
        title: 'Commercial Spaces',
        description: 'Often used in restaurants, hotels, and other commercial settings for their durability and design versatility.'
      },
    }
  },
  heating: {
    title: 'Underfloor Heating',
    description: "Underfloor heating (UFH) is a method of heating a space by warming the floor surface, which then radiates heat evenly throughout the room. This system can be more efficient and comfortable compared to traditional radiators or heating systems. Here are the key aspects of underfloor heating:",
    types: {
      title: 'Types',
      electric_underfloor_heating: {
        title: 'Electric Underfloor Heating:',
        components: {
          name: 'Components',
          describtion: 'Consists of electric heating cables or mats installed beneath the floor covering.'
        },
        installation: {
          title: 'Installation',
          describtion: 'Easier and less expensive to install, particularly in smaller areas or individual rooms. The electric mats or cables are laid out on the subfloor and connected to the electrical system.'
        },
        operation: {
          title: 'Operation',
          describtion: 'Heat is generated by the electrical resistance of the cables or mats, which warms the floor surface.'
        },
        usage: {
          title: 'Usage',
          describtion: 'Best suited for smaller areas, such as bathrooms or kitchens, due to higher operating costs compared to hydronic systems.'
        },
      },
      hydronic_underfloor_heating: {
        title: 'Hydronic Underfloor Heating:',
        components: {
          title: 'Components',
          description: 'Uses a network of pipes laid beneath the floor, through which warm water is circulated.'
        },
        installation: {
          title: 'Installation',
          description: 'More complex and expensive to install, often involving the integration with the home’s central heating system (such as a boiler). Best suited for new constructions or major renovations.'
        },
        operation: {
          title: 'Operation',
          description: 'Heated water from a boiler or heat pump is circulated through the pipes, transferring heat to the floor.'
        },
        usage: {
          title: 'Usage',
          description: 'Ideal for larger areas or entire homes, offering more energy-efficient heating over the long term.'
        },
      }
    },
    installation_process: {
      title: 'Installation Process',
      description: 'The installation process varies depending on the type of underfloor heating system:',
      electric_underfloor_heating_installation:{
        title: 'Electric Underfloor Heating Installation',
        preparation: {
          title: 'Preparation',
          description: 'Ensure the subfloor is clean, level, and properly insulated to prevent heat loss.'
        },
        laying_the_heating_elements: {
          title: 'Laying the Heating Elements',
          description: "Electric cables or mats are laid out according to the manufacturer's guidelines, avoiding overlap and ensuring even coverage."
        },
        connecting_the_system: {
          title: 'Connecting the System',
          description: 'The heating elements are connected to a thermostat and the electrical system.'
        },
        floor_covering: {
          title: 'Floor Covering',
          description: 'Once installed and tested, the chosen floor covering (tiles, laminate, etc.) is laid over the heating elements.'
        },
      },
      hydronic_underfloor_heating_installation: {
        title: 'Hydronic Underfloor Heating Installation',
        preparation: {
          title: 'Preparation',
          description: 'The subfloor must be clean, level, and insulated to improve efficiency.'
        },
        laying_the_pipes: {
          title: 'Laying the Pipes',
          description: 'A network of pipes is laid out in a specific pattern (often a serpentine or spiral layout) to ensure even heat distribution.'
        },
        connecting_the_system: {
          title: 'Connecting to Heating System',
          description: 'The pipes are connected to a manifold, which distributes the warm water, and then linked to the boiler or heat pump.'
        },
        floor_covering: {
          title: 'Floor Covering',
          description: 'Once the system is pressure-tested and confirmed to be leak-free, the floor covering is installed over the pipes.'
        },
      }
    },
    considerations: {
      title: 'Considerations',
      cost: {
        title: 'Cost',
        description: 'Higher initial installation costs, particularly for hydronic systems. However, long-term energy savings can offset this expense.'
      },
      flooring_compatibility: {
        title: 'Flooring Compatibility',
        description: 'Works best with certain types of flooring, such as tile, stone, or engineered wood. Some types of flooring, like thick carpets or solid hardwood, may not be as effective.'
      },
      installation: {
        title: 'Installation',
        description: 'Easier to install during new construction or major renovations. Retrofitting in existing buildings can be more challenging and expensive.'
      },
      maintenance: {
        title: 'Maintenance',
        description: 'Generally low maintenance once installed. However, any repairs may require accessing the system beneath the floor, which can be disruptive.'
      },
    },
    applications: {
      title: 'Applications',
      residential: {
        title: 'Residential',
        description: 'Commonly used in homes, particularly in bathrooms, kitchens, and open-plan living areas.',
      },
      commercial: {
        title: 'Commercial',
        description: 'Used in office buildings, hotels, and other commercial spaces to provide efficient and comfortable heating.'
      },
      retrofits: {
        title: 'Retrofits',
        description: 'Can be added to existing homes, although it requires careful planning and can be more complex.'
      },
    }
  },
  wetrooms: {
    title: 'Wet Rooms',
    description: "Wet rooms offer a modern, accessible, and stylish solution for bathrooms, with careful consideration needed for waterproofing, drainage, and ventilation to ensure functionality and longevity. This design creates an open, accessible, and modern space, eliminating the need for a separate shower enclosure. Here are the key aspects of wet rooms:",
    design_and_structure: {
      title: 'Design and Structure',
      waterproofing: {
        title: 'Waterproofing',
        tank_the_room: {
          title: 'Tank the Room:',
          description: 'The entire room is waterproofed (or "tanked") to ensure no water leaks through floors or walls. This involves applying waterproof membranes or coatings to all surfaces.'

        },
        sealed_surfaces: {
          title: 'Sealed Surfaces',
          description: 'All joints, including those between floors and walls, are sealed with waterproof materials.'

        },
      },
      flooring: {
        title: 'Flooring',
        slope: {
          title: 'Slope',
          description: 'The floor is subtly sloped towards a drain to ensure proper water runoff.'
        },
        non_slip_surface: {
          title: 'Non-Slip Surface',
          description: 'Flooring materials are chosen for their water resistance and non-slip properties, such as tiles, vinyl, or specialized concrete.'
        },
        drainage: {
          title: 'Drainage',
          description: 'A linear drain or a central drain is installed to collect water efficiently.'
        },
      },
      shower_area: {
        title: 'Shower Area',
        open_plan: {
          title: 'Open Plan',
          description: 'The shower is integrated into the room without barriers, creating a seamless and spacious appearance.'
        },
        screen: {
          title: 'Screen (Optional)',
          description: 'Some wet rooms may have a partial screen or a glass partition to prevent water splashing on certain areas, though this is not always necessary.'
        }
      },
      vantilation: {
        title: 'Ventilation',
        description: 'Proper ventilation is crucial to prevent mold and mildew. An effective extraction fan system is often installed to manage humidity.'
      },
      heating: {
        title: 'Heating',
        underfloor_heating: {
          title: 'Underfloor Heating',
          description: 'Often used to keep the floor dry and warm, enhancing comfort and preventing slips.'
        },
        heated_towel_rails: {
          title: 'Heated Towel Rails',
          description: 'These can provide additional warmth and keep towels dry.'
        }
      }
    },
    materials_and_finishes: {
      title: 'Materials and Finishes',
      tiles: {
        title: 'Tiles',
        ceramic_or_porcelain: {
          title: 'Ceramic or Porcelain',
          description: 'Common choices for walls and floors due to their durability and water resistance.'
        },
        mosaic_tiles: {
          title: 'Mosaic Tiles',
          description: 'Often used for flooring because their numerous grout lines offer better grip and slip resistance.'
        },
        natural_stone: {
          title: 'Natural Stone',
          description: 'Used for a luxurious look but requires sealing to ensure water resistance.'
        }
      },
      vinyl: {
        title: 'Vinyl',
        sheet_vinyl: {
          title: 'Sheet Vinyl',
          description: 'Provides a seamless, waterproof surface, ideal for wet room floors.'
        }
      }
    },
    benefits: {
      title: 'Benefits',
      accessibility: {
        title: 'Accessibility',
        barrier_free: {
          title: 'Barrier-Free',
          description: ' Ideal for individuals with mobility issues as there are no steps or thresholds.'
        },
        wheelchair_friendly: {
          title: 'Wheelchair-Friendly',
          description: 'The open design accommodates wheelchair users.'
        }
      },
      aesthetics: {
        title: 'Aesthetics',
        modern_look: {
          title: 'Modern Look',
          description: 'Creates a sleek, minimalist, and contemporary appearance.'
        },
        illusion_of_space: {
          title: 'Illusion of Space',
          description: 'Makes small bathrooms appear larger due to the open, uncluttered design.'
        },
        ease_of_cleaning: {
          title: 'Ease of Cleaning',
          minimalist_design: {
            title: 'Minimalist Design',
            description: 'Fewer fixtures and fittings make it easier to clean.'
          },
          water_flow: {
            title: 'Water Flow',
            description: 'Water from the shower can wash over the entire floor, making cleaning more efficient.'
          }
        },
        versatility: {
          title: 'Versatility',
          description: 'Can be installed in bathrooms of all sizes, from compact en-suites to large master bathrooms.'
        }
      }
    },
    considerations: {
      title: 'Considerations',
      cost: {
        title: 'Cost',
        higher_installation_costs: {
          title: 'Higher Installation Costs',
          description: 'The need for comprehensive waterproofing and proper drainage can make wet rooms more expensive to install than traditional bathrooms.'
        },
        quality_materials: {
          title: 'Quality Materials',
          description: 'Using high-quality materials for waterproofing and finishes can add to the cost.'
        }
      },
      water_management: {
        title: 'Water Management',
        proper_slope: {
          title: 'Proper Slope',
          description: 'Ensuring the floor is properly sloped towards the drain is crucial to prevent water pooling.'
        },
        effective_drainage: {
          title: 'Effective Drainage',
          description: 'A reliable drainage system is essential to handle the volume of water from the shower.'
        }
      },
      privacy: {
        title: 'Privacy',
        open_design: {
          title: 'Open Design',
          description: 'The open layout might reduce privacy if the wet room is part of a shared bathroom.'
        }
      },
      humidity_control: {
        title: 'Humidity Control',
        ventilation: {
          title: 'Ventilation',
          description: 'Adequate ventilation is necessary to manage moisture and prevent mold growth.'
        }
      }
    },
    installation_process: {
      title: 'Installation Process',
      planning: {
        title: 'Planning',
        layout_design: {
          title: 'Layout Design',
          description: 'Careful planning of the layout to position the drain, shower, and other fixtures.'
        },
        choosing_materials: {
          title: 'Choosing Materials:',
          description: 'Selecting appropriate waterproofing materials and finishes.'
        }
      },
      waterproofing: {
        title: 'Waterproofing',
        applying_membranes: {
          title: 'Applying Membranes',
          description: 'aterproof membranes are applied to all surfaces, including floors and walls.'
        },
        sealing: {
          title: 'Sealing',
          description: 'Ensuring all joints and connections are properly sealed.'
        },
      },
      floor_preparation: {
        title: 'Floor Preparation',
        creating_slope: {
          title: 'Creating Slope',
          description: ' Installing a sloped subfloor to direct water towards the drain.'
        },
        installing_drain: {
          title: 'Installing Drain',
          description: 'Positioning the drain and connecting it to the plumbing system.'
        }
      },
      finishing: {
        title: 'Finishing',
        tiling_or_flooring: {
          title: 'Tiling or Flooring',
          description: 'Laying tiles or other flooring materials and ensuring they are sealed.'
        },
        installing_fixtures: {
          title: 'Installing Fixtures',
          description: 'Adding the showerhead, controls, and any optional screens or partitions.'
        }
      }
    }
  }
};
