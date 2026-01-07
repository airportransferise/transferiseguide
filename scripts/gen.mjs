import fs from "fs";

const cities = [
  {
    cityName: "Antalya",
    citySlug: "antalya",
    airports: [{ airportName: "Antalya Havalimanı", airportSlug: "ayt" }],
    districts: [
      "Muratpasa",
      "Konyaalti",
      "Kepez",
      "Lara",
      "Serik",
      "Manavgat"
    ]
  },
  {
    cityName: "Istanbul",
    citySlug: "istanbul",
    airports: [
      { airportName: "Istanbul Havalimani", airportSlug: "ist" },
      { airportName: "Sabiha Gokcen", airportSlug: "saw" }
    ],
    districts: [
      "Kadikoy",
      "Besiktas",
      "Sisli",
      "Sariyer",
      "Uskudar",
      "Bakirkoy",
      "Fatih",
      "Pendik"
    ]
  },
  {
    cityName: "Bodrum",
    citySlug: "bodrum",
    airports: [{ airportName: "Milas Bodrum Havalimani", airportSlug: "bjv" }],
    districts: [
      "Merkez",
      "Yalikavak",
      "Turgutreis",
      "Gumbet",
      "Bitez"
    ]
  }
];

const areas = [
  "merkez",
  "sahil",
  "oteller",
  "marina",
  "rezidans",
  "villa"
];

const routes = [];

for (const city of cities) {
  for (const airport of city.airports) {
    for (const district of city.districts) {
      for (const area of areas) {
        routes.push({
          cityName: city.cityName,
          citySlug: city.citySlug,
          airportName: airport.airportName,
          airportSlug: airport.airportSlug,
          districtName: district,
          districtSlug: district.toLowerCase(),
          areaName: area,
          areaSlug: area
        });
      }
    }
  }
}

fs.writeFileSync(
  "src/_data/routes.json",
  JSON.stringify(routes, null, 2),
  "utf8"
);

console.log("OK:", routes.length, "sayfa uretildi");
