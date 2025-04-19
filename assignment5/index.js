// initializing drug array

const drugs = [

    { id: 1, name: "Amoxicillin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 120, manufacturer: "Pfizer" },
   
    { id: 2, name: "Paracetamol", category: "Analgesic", dosageMg: 1000, isPrescriptionOnly: false, stock: 200, manufacturer: "GSK" },
   
    { id: 3, name: "Ibuprofen", category: "Analgesic", dosageMg: 400, isPrescriptionOnly: false, stock: 150, manufacturer: "Bayer" },
   
    { id: 4, name: "Chloroquine", category: "Antimalarial", dosageMg: 250, isPrescriptionOnly: true, stock: 80, manufacturer: "Sanofi" },
   
    { id: 5, name: "Ciprofloxacin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 70, manufacturer: "Pfizer" },
   
    { id: 6, name: "Loratadine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 160, manufacturer: "Novartis" },
   
    { id: 7, name: "Metformin", category: "Antidiabetic", dosageMg: 850, isPrescriptionOnly: true, stock: 140, manufacturer: "Teva" },
   
    { id: 8, name: "Artemether", category: "Antimalarial", dosageMg: 20, isPrescriptionOnly: true, stock: 60, manufacturer: "Roche" },
   
    { id: 9, name: "Aspirin", category: "Analgesic", dosageMg: 300, isPrescriptionOnly: false, stock: 180, manufacturer: "Bayer" },
   
    { id: 10, name: "Omeprazole", category: "Antacid", dosageMg: 20, isPrescriptionOnly: true, stock: 90, manufacturer: "AstraZeneca" },
   
    { id: 11, name: "Azithromycin", category: "Antibiotic", dosageMg: 250, isPrescriptionOnly: true, stock: 50, manufacturer: "Pfizer" },
   
    { id: 12, name: "Cetirizine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 110, manufacturer: "Novartis" },
   
    { id: 13, name: "Insulin", category: "Antidiabetic", dosageMg: 100, isPrescriptionOnly: true, stock: 30, manufacturer: "Novo Nordisk" },
   
    { id: 14, name: "Artemisinin", category: "Antimalarial", dosageMg: 100, isPrescriptionOnly: true, stock: 50, manufacturer: "GSK" },
   
    { id: 15, name: "Codeine", category: "Analgesic", dosageMg: 30, isPrescriptionOnly: true, stock: 20, manufacturer: "Teva" },
   
    { id: 16, name: "Vitamin C", category: "Supplement", dosageMg: 500, isPrescriptionOnly: false, stock: 300, manufacturer: "Nature’s Bounty" },
   
    { id: 17, name: "Ranitidine", category: "Antacid", dosageMg: 150, isPrescriptionOnly: false, stock: 90, manufacturer: "Sanofi" },
   
    { id: 18, name: "Doxycycline", category: "Antibiotic", dosageMg: 100, isPrescriptionOnly: true, stock: 40, manufacturer: "Pfizer" },
   
    { id: 19, name: "Tramadol", category: "Analgesic", dosageMg: 50, isPrescriptionOnly: true, stock: 45, manufacturer: "Teva" },
   
    { id: 20, name: "Folic Acid", category: "Supplement", dosageMg: 5, isPrescriptionOnly: false, stock: 250, manufacturer: "Nature’s Bounty" }
   
   ];

//display the drugs array in the console
   console.log(drugs)



   //QS1
   //display the drugs array in the console with a filter for antibiotic drugs 
   function isAntibioic(drug){
    return drug.category === "Antibiotic";
   }

   //display the filtered drugs in the console
   console.log(drugs.filter(isAntibioic))

   //QS2
   // function to print the array in lowercase
   function printLowerCase(drug){
    return drug.name.toLowerCase()
   }
  
// prints all the drugs in lowercase
  
   console.log(drugs.map(printLowerCase)) 

   //QS3
   // function to accept a category and return the drugs in that category
   function filterByCategory(category){
    return drugs.filter(drug => drug.category === category)
   }

   console.log(filterByCategory("Supplement")) // prints all the drugs in the antibiotic category


    //QS4
    drugs.forEach(drug => {
        console.log(`Drug: ${drug.name}, Manufacturer: ${drug.manufacturer}`);
      });
      

   //QS5
   //function to print drugs that need a prescription
   function isPrescription(drugs){
    return drugs.isPrescriptionOnly === true;
   }

   console.log(drugs.filter(isPrescription)) // prints all the drugs that need a prescription


   //QS6
   const newDrug = drugs.map(drug => `Drug: ${drug.name} - ${drug.dosageMg} mg`)
   console.log(newDrug) // prints all the drugs with their dosage in mg

   //QS7
   function inStock(drug){
    return drug.stock < 50;
   }

   console.log(drugs.filter(inStock)) // prints all the drugs that are in stock less than 50

    //QS8
   const noPrescriptionDrugs = drugs.filter(drug => !drug.isPrescriptionOnly);
    console.log(noPrescriptionDrugs) // prints all the drugs that do not need a prescription

    //QS9   
    function countByManufacturer(manufacturer){
        return drugs.filter(drug => drug.manufacturer === manufacturer).length;
    }

    console.log(`The manufacturer has `,countByManufacturer("Pfizer"), `drugs`) // prints the number of drugs manufactured by Pfizer

    //QS10
    let count = 0;
    drugs.forEach(drug => {
        if(drug.category === "Analgesic"){
            count++;
        }
    })

    console.log(`The number of analgesic drugs is `, count) // prints the number of analgesic drugs
