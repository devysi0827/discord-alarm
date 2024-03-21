const cron = require("node-cron");
const { exec } = require("child_process");

cron.schedule(
  // 분 시간 일 월 요일 (월 = 1)
  "22 1 * * *",
  () => {
    console.log("Sending curl request...");
    const json = '{"content": "alarm is gone"}';

    exec(
      `curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X POST -d ${json} webhook`,
      (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
      }
    );
  },
  {
    timezone: "Asia/Seoul",
  }
);
