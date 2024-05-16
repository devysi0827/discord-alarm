const readline = require("readline");
const { webhook } = require("./env");
const cron = require("node-cron");
const { exec } = require("child_process");

function alarm(time, cmd, isSingleUse) {
  cron.schedule(
    time,
    () => {
      const command = `${cmd}`;

      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
      });
    },
    {
      timezone: "Asia/Seoul",
    }
  );
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputCmd;

rl.on("line", (line) => {
  inputCmd = line;
  console.log(line);
  rl.close();
});
rl.on("close", () => {
  // 분 시간 일 월 요일 (월 = 1)
  alarm("00 17 * * *", inputCmd);
});
