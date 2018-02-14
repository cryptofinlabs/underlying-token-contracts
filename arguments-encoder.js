let abi = require("ethereumjs-abi");

for (let token of ["eos", "tron"]) {
  console.log(token);
  let args = require(`./${token}/args.json`);
  let encoded = abi.rawEncode(args.types, args.values);
  console.log(encoded.toString("hex"));
}
