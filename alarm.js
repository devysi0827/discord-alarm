const { webhook } = require("./env");
const cron = require("node-cron");
const { exec } = require("child_process");

function alarm(time, message, isSingleUse) {
  const messageJson = JSON.stringify({ content: message });

  console.log(messageJson, typeof messageJson);

  cron.schedule(
    // 분 시간 일 월 요일 (월 = 1)
    time,
    () => {
      console.log("Sending curl request...", messageJson, webhook);
      console.log(JSON.parse(messageJson));

      const command = `curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X POST -d '${messageJson}' ${webhook}`;

      console.log(command);
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

alarm("* * * * *", "sell");
