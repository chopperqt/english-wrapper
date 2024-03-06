// const docker = "docker compose up -d";
// const englishLibrary = "cd .. && cd word-library && (npm run start&)";
const englishWrapper = "(npm run dev&)";
const englishRepeater =
  "cd .. && cd english-repeater && (npm run serve&) && (npm run build&)";
const englishStatistics =
  "cd .. && cd english-statistics && (npm run serve&) && (npm run build&)";

const spawn = require("child_process").spawn;

const child = spawn(
  `${englishWrapper} && ${englishRepeater} && ${englishStatistics}`,
  {
    shell: true,
  },
);

child.stderr.on("data", function (data) {
  console.error("STDERR:", data.toString());
});
child.stdout.on("data", function (data) {
  console.log("STDOUT:", data.toString());
});
child.on("exit", function (exitCode) {
  console.log("Child exited with code: " + exitCode);
});
