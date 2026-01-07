import fs from "fs";
import readline from "readline";

const PASSWORD = "123asd.A";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Password: ", pass => {
  if (pass !== PASSWORD) {
    console.log("Access denied.");
    rl.close();
    return;
  }

  rl.question("City (istanbul/antalya/bodrum): ", citySlug => {
    rl.question("Airport code (ist/ayt/bjv): ", airportSlug => {
      rl.question("District: ", district => {
        rl.question("Area: ", area => {

          const data = JSON.parse(fs.readFileSync("src/_data/routes.json"));
          data.push({
            cityName: citySlug.charAt(0).toUpperCase() + citySlug.slice(1),
            citySlug,
            airportName: airportSlug.toUpperCase(),
            airportSlug,
            districtName: district,
            districtSlug: district.toLowerCase().replace(/\s+/g,"-"),
            areaName: area,
            areaSlug: area.toLowerCase().replace(/\s+/g,"-")
          });

          fs.writeFileSync("src/_data/routes.json", JSON.stringify(data,null,2));
          console.log("✅ Page added successfully");
          rl.close();
        });
      });
    });
  });
});
