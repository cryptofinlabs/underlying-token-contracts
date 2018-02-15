let abi = require("ethereumjs-abi");

let SIZE = 2;
for (let token of ["eos", "qtum"]) {
  let args = require(`./${token}/args.json`);
  let decodedBuffer = abi.rawDecode(args.types, new Buffer(args.rawdata, 'hex'));
  let decodedString = decodedBuffer.toString('hex');
  let decodedValues = decodedString.split(',');
  console.log(token);
  for (let i = 0; i < args.argument_names.length; i++) {
    console.log(`${args.argument_names[i]}: ${decodedValues[i]}`);
  }
}

//module.exports()
  //takes string,
  //returns full
  //function(token) {
    //return hex
  //}
