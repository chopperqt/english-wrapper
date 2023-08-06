// const spawn = require("child_process").spawn;

// const englishWrapper = spawn("npm run dev -- --host");
//
// const { exec } = require("child_process");
//
// exec("ls", (error, stdout, stderr) => {
//   if (error) {
//     console.log(`error: ${error.message}`);
//
//     return;
//   }
//
//   if (stderr) {
//     console.log(`stderr: ${stderr}`);
//
//     return;
//   }
//
//   console.log(`Output: ${stdout}`);
// });
//

const docker = "docker compose up -d";
const englishWrapper = "(npm run dev -- --host&)";
const englishLibrary = "cd .. && cd word-library && (npm run start&)";
const englishRepeater = "cd .. && cd english-repeater && npm run start";

var spawn = require("child_process").spawn;

var child = spawn(
  `${docker} && ${englishWrapper} && ${englishLibrary} && ${englishRepeater}`,
  {
    shell: true,
  }
);

child.stderr.on("data", function(data) {
  console.error("STDERR:", data.toString());
});
child.stdout.on("data", function(data) {
  console.log("STDOUT:", data.toString());
});
child.on("exit", function(exitCode) {
  console.log("Child exited with code: " + exitCode);
});
