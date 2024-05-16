# 디스코드 웹훅을 이용한 스케줄러

### 사용법

```
node alarm.js
```

실행 후 터미널에서 message와 url에 알맞은 변수를 넣어서 아래 문장 입력

- message : 영어만 가능. 원하는 메시지
- url : 알맞은 채널의 디스코드 webhookURL
- 현재 매일 5시에 알람이 보내도록 개발되어있음. 필요 시, 코드 수정 필요

```
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X POST -d "{\"content\": \"{your_message}\"}" ${your_Discord_webhookURL}
```

### TBD

- 여러 개의 알람을 보낼 수 있도록 만들 것

### Issue

- 한글 메시지가 가능하도록 패치할 것
- 커멘드가 아니라 메시지로 받을 수 있도록 할 것.
- 시간 정보값을 추가로 받을 수 있도록 만들 것
