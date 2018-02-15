let abi = require("ethereumjs-abi");

for (let token of ["eos", "tron", "qtum"]) {
  console.log(token);
  let args = require(`./${token}/args.json`);
  let encoded = abi.rawEncode(args.types, args.values);
  let encodedString = encoded.toString("hex");
  console.log(encodedString);
  console.log(encodedString === args.rawdata ? "rawdata matches" : "rawdata doesn't match");
}

//module.exports()
  //takes string,
  //returns full
  //function(token) {
    //return hex
  //}
