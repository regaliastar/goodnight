# goodnight
短信定时发送问候与祝福

## Env

See [env.json](./env.json).

## Dependence

[@alicloud/sms-sdk](https://www.npmjs.com/package/@alicloud/sms-sdk)

## Usage

```
npm install
```
```
npm start [options]

options as follows:
* * * * * *
┬ ┬ ┬ ┬ ┬ ┬
│ │ │ │ │ |
│ │ │ │ │ └ day of week (0 - 7) (0 or 7 is Sun)
│ │ │ │ └───── month (1 - 12)
│ │ │ └────────── day of month (1 - 31)
│ │ └─────────────── hour (0 - 23)
│ └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)

for example:
npm start 30 5 1    ——在每天的 1时5分30秒 执行任务

exec task immediately:
npm start
```
