let table;
let flower;



function setup() {
  createCanvas(800, 800);
}

function preload(){
  table = loadTable ('acacia-data.csv', 'csv', 'header');
}

function countryLabels() {
for (x = 0; x < table.getRowCount(); x++){
  let row = table.getRow(x);
  let row = row.get("Regions");
  text(Region/Genus, 30 + x * 60, 350);
}
}

function showData(){
   for (x = 0; x < table.getRowCount(); x++){
   let row = table.getRow(x);
   let Total = row.get('Acacia');
   text(Total, 30 + x * 60, 320);
 }
}

function draw() {
  background(220);
  countryLabels(); 
}