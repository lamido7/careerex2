// set up server

const express = require("express");

const app = express();

//middleware to parse JSON bodies
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const drugs = [
  {
    id: 1,
    name: "Amoxicillin",
    category: "Antibiotic",
    dosageMg: 500,
    isPrescriptionOnly: true,
    stock: 120,
    manufacturer: "Pfizer",
  },

  {
    id: 2,
    name: "Paracetamol",
    category: "Analgesic",
    dosageMg: 1000,
    isPrescriptionOnly: false,
    stock: 200,
    manufacturer: "GSK",
  },

  {
    id: 3,
    name: "Ibuprofen",
    category: "Analgesic",
    dosageMg: 400,
    isPrescriptionOnly: false,
    stock: 150,
    manufacturer: "Bayer",
  },

  {
    id: 4,
    name: "Chloroquine",
    category: "Antimalarial",
    dosageMg: 250,
    isPrescriptionOnly: true,
    stock: 80,
    manufacturer: "Sanofi",
  },

  {
    id: 5,
    name: "Ciprofloxacin",
    category: "Antibiotic",
    dosageMg: 500,
    isPrescriptionOnly: true,
    stock: 70,
    manufacturer: "Pfizer",
  },

  {
    id: 6,
    name: "Loratadine",
    category: "Antihistamine",
    dosageMg: 10,
    isPrescriptionOnly: false,
    stock: 160,
    manufacturer: "Novartis",
  },

  {
    id: 7,
    name: "Metformin",
    category: "Antidiabetic",
    dosageMg: 850,
    isPrescriptionOnly: true,
    stock: 140,
    manufacturer: "Teva",
  },

  {
    id: 8,
    name: "Artemether",
    category: "Antimalarial",
    dosageMg: 20,
    isPrescriptionOnly: true,
    stock: 60,
    manufacturer: "Roche",
  },

  {
    id: 9,
    name: "Aspirin",
    category: "Analgesic",
    dosageMg: 300,
    isPrescriptionOnly: false,
    stock: 180,
    manufacturer: "Bayer",
  },

  {
    id: 10,
    name: "Omeprazole",
    category: "Antacid",
    dosageMg: 20,
    isPrescriptionOnly: true,
    stock: 90,
    manufacturer: "AstraZeneca",
  },

  {
    id: 11,
    name: "Azithromycin",
    category: "Antibiotic",
    dosageMg: 250,
    isPrescriptionOnly: true,
    stock: 50,
    manufacturer: "Pfizer",
  },

  {
    id: 12,
    name: "Cetirizine",
    category: "Antihistamine",
    dosageMg: 10,
    isPrescriptionOnly: false,
    stock: 110,
    manufacturer: "Novartis",
  },

  {
    id: 13,
    name: "Insulin",
    category: "Antidiabetic",
    dosageMg: 100,
    isPrescriptionOnly: true,
    stock: 30,
    manufacturer: "Novo Nordisk",
  },

  {
    id: 14,
    name: "Artemisinin",
    category: "Antimalarial",
    dosageMg: 100,
    isPrescriptionOnly: true,
    stock: 50,
    manufacturer: "GSK",
  },

  {
    id: 15,
    name: "Codeine",
    category: "Analgesic",
    dosageMg: 30,
    isPrescriptionOnly: true,
    stock: 20,
    manufacturer: "Teva",
  },

  {
    id: 16,
    name: "Vitamin C",
    category: "Supplement",
    dosageMg: 500,
    isPrescriptionOnly: false,
    stock: 300,
    manufacturer: "Nature’s Bounty",
  },

  {
    id: 17,
    name: "Ranitidine",
    category: "Antacid",
    dosageMg: 150,
    isPrescriptionOnly: false,
    stock: 90,
    manufacturer: "Sanofi",
  },

  {
    id: 18,
    name: "Doxycycline",
    category: "Antibiotic",
    dosageMg: 100,
    isPrescriptionOnly: true,
    stock: 40,
    manufacturer: "Pfizer",
  },

  {
    id: 19,
    name: "Tramadol",
    category: "Analgesic",
    dosageMg: 50,
    isPrescriptionOnly: true,
    stock: 45,
    manufacturer: "Teva",
  },

  {
    id: 20,
    name: "Folic Acid",
    category: "Supplement",
    dosageMg: 5,
    isPrescriptionOnly: false,
    stock: 250,
    manufacturer: "Nature’s Bounty",
  },
];

//qs1 API endpoint to get antibiotics drugs
app.get("/drugs/antibiotics", (req, res) => {
  const antibiotics = drugs.filter((drug) => drug.category === "Antibiotic");
  res.json(antibiotics);
});

//qs2 API endpoint to print all drugs in lowercase
app.get("/drugs/names", (req, res) => {
  const lowercaseNames = drugs.map((drug) => drug.name.toLowerCase());
  res.json(lowercaseNames);
});

//qs3 API endpoint to get accpet category from user and return drugs in that category
app.post("/drugs/by-category", (req, res) => {
  const { category } = req.body;
  const filterByCategory = drugs.filter((drug) => drug.category === category);
  res.json(filterByCategory);
});

//qs4 API endpoint to get return an array of drugs name and manufacturer
app.get("/drugs/names-manufacturer", (req, res) => {
  const nameManufacturer = drugs.map((drug) => {
    return { name: drug.name, manufacturer: drug.manufacturer };
  });
  res.json(nameManufacturer);
});

//qs5 API endpoint to return all drugs with prescription only
app.get("/drugs/prescription", (req, res) => {
  const prescriptionDrugs = drugs.filter(
    (drug) => drug.isPrescriptionOnly === true
  );
  res.json(prescriptionDrugs);
});

//qs6 API endpoint to return a new array with drug name and dosage
app.get("/drugs/formatted", (req, res) => {
  const newArray = drugs.map(drug => `Drug: ${drug.name}, Dosage: ${drug.dosageMg}mg`);
  res.json(newArray);
});

//qs7 API endpoint to return drugs where the stock is less than 50
app.get("/drugs/low-stock", (req, res)=> {
    const lowStockDrugs = drugs.filter(drug => drug.stock < 50)
    res.json(lowStockDrugs)
})

//qs8 API endpoint to return drugs where its not prescription only
app.get("/drugs/non-prescription", (req, res) => {
    const notPrescriptionDrugs = drugs.filter(drug=> drug.isPrescriptionOnly === false)

    res.json(notPrescriptionDrugs)
})

//qs9 API endpoint to accpet manufacturer name and return drugs from that manufacturer
app.post("/drugs/manufacturer-count", (req, res)=> {
    const {manufacturer} = req.body
    const manufacturerDrugs = drugs.filter(drug => drug.manufacturer === manufacturer).length
    res.json({
        messgse: `The number of drugs from ${manufacturer} is ${manufacturerDrugs}`
    })
})

//qs10 API endpoint to return how many drugs have the category "Analgesic"
app.get("/drugs/count-analgesic", (req, res) => {
    const analgesicCount = drugs.filter(drug => drug.category === "Analgesic").length

    res.json({
        message: `The number of drugs in the Analgesic category is ${analgesicCount}`
    })
})