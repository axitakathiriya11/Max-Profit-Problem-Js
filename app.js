const bussinesses = [
  {
    name: "T",
    earning: 1500,
    developmentTime: 5,
  },
  {
    name: "P",
    earning: 1000,
    developmentTime: 4,
  },
  {
    name: "C",
    earning: 3000,
    developmentTime: 10,
  },
];

const testcase1 = {
  time: 7,
  earning: 3000,
};
const testcase2 = {
  time: 8,
  earning: 4500,
};
const testcase3 = {
  time: 13,
  earning: 16500,
};

const timeToBuild = [5, 4, 10];
const earningPerUnit = [1500, 1000, 3000];

function calculateProfit(input) {
  let result = [];
  for (let i = 0; i < bussinesses.length; i++) {
    let bussiness = bussinesses[i];
    if (input.time < bussiness.developmentTime) {
      continue;
    } else {
      let noOfBussiness = parseInt(input.time / bussiness.developmentTime);
      let totalBussinessRunningTime = 0;
      let totalTimeSpentInDevelopment = 0;
      for (let i = 1; i <= noOfBussiness; i++) {
        let bussinessRunningTime =
          input.time - totalTimeSpentInDevelopment - bussiness.developmentTime;
        totalBussinessRunningTime += bussinessRunningTime;
        totalTimeSpentInDevelopment += bussiness.developmentTime;
      }
      let totalEarningFromBussiness =
        totalBussinessRunningTime * bussiness.earning;
      if (totalEarningFromBussiness == input.earning) {
        let solution = { T: 0, P: 0, C: 0 };
        solution[bussiness.name] = noOfBussiness;
        result.push(solution);
      }
    }
  }
  return result;
}

console.log("Test Case 1 : ", calculateProfit(testcase1));
console.log("Test Case 2 : ", calculateProfit(testcase2));
console.log("Test Case 3 : ", calculateProfit(testcase3));
