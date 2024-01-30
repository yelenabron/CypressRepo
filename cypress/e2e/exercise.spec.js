

let familySize = 2;
let plannedDistanceToDrive = 100

function recommendedCar (familySize) {
    if (familySize <= 4 && plannedDistanceToDrive <200 ) {
        return "Tesla"
    
    }
    if (familySize <= 4 && plannedDistanceToDrive >=200) {
        return "Toyota Camry"
    }

    if (familySize >4 ){
        return "Minivan"

    }
}

console.log(recommendedCar(familySize, plannedDistanceToDrive));