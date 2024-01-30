interface SubCategory {
    name: string;
  }
  
  interface Category {
    name: string;
    subcategories: SubCategory[];
  }
  
  interface ConferenceTopics {
    categories: Category[];
  }
  
  // Example instantiation
  const conferenceTopics: ConferenceTopics = {
    categories: [
      {
        name: "Mathematics",
        subcategories: [
          { name: "Mathematical Modelling" },
          { name: "Boundary Layer Flow" },
          { name: "Fractional Calculus" },
          { name: "Analytical/Semi analytical methods" },
          { name: "Numerical Methods" },
        ],
      },
      {
        name: "Mechanical",
        subcategories: [
          { name: "Computational Fluid Dynamics" },
          { name: "Experimental Fluid Dynamics" },
          { name: "Heat Transfer" },
          { name: "Biomaterials & Biomechanics" },
          { name: "Viscous flow" },
          { name: "Multiphase flows" },
          { name: "Microfluidics" },
          { name: "Nanofluids" },
          { name: "Oceanography" },
          { name: "Renewable Energy" },
          { name: "Energy Storage Systems" },
        ],
      },
      {
        name: "Aeronautical",
        subcategories: [
          { name: "Aerodynamics" },
          { name: "Propulsion System" },
          { name: "Compressible Flow" },
          { name: "Atmospheric Sciences" },
          { name: "Geophysical Environmental Fluid Dynamics" },
        ],
      },
      {
        name: "Electronics",
        subcategories: [
          { name: "Nanomaterials/Nanostructures" },
          { name: "Nanodevices" },
          { name: "Nanoelectronics" },
          { name: "Nanosensors" },
          { name: "Nanoenergy" },
          { name: "Nanophotonics" },
          { name: "Nanomagnetism and Spintronics" },
          { name: "Bionanoelectronics" },
          { name: "Quantum Nanotechnology" },
          { name: "Nano wearable devices" },
          { name: "Lab on a chip device development" },
          { name: "Biomimetic Nanoelectronics" },
          { name: "Nano acousto-electronics" },
          { name: "MEMS/NEMS" },
          { name: "Artificial Intelligence/Machine Learning" },
        ],
      },
    ],
  };
  
  export default conferenceTopics;