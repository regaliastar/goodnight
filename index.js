const schedule = require('node-schedule')
const SMSClient = require('@alicloud/sms-sdk')
const formatDate = require('./lib/format-date')

function sendSMS() {
    const {
        ACCESS_KEY_ID: accessKeyId ,
        ACCESS_KEY_SECRET : secretAccessKey,
        PHONE_NUMBERS: phoneNumbers,
        SING_NAME: signName,
        TEMPLATE_CODE: templateCode
    } = process.env

    const smsClient = new SMSClient({accessKeyId, secretAccessKey})
    const today = formatDate()
    const templateParam = JSON.stringify({"date":today})
    smsClient.sendSMS({
        PhoneNumbers: phoneNumbers,     //必填:待发送手机号。支持以逗号分隔的形式进行批量调用，批量上限为1000个手机号码,批量调用相对于单条调用及时性稍有延迟,验证码类型的短信推荐使用单条调用的方式；发送国际/港澳台消息时，接收号码格式为：国际区号+号码，如“85200000000”
        SignName: signName,             //必填:短信签名-可在短信控制台中找到
        TemplateCode: templateCode,     //必填:短信模板-可在短信控制台中找到，发送国际/港澳台消息时，请使用国际/港澳台短信模版
        TemplateParam: templateParam    //可选:模板中的变量替换JSON串,如模板内容为"亲爱的${name},您的验证码为${code}"时。
    }).then(function (res) {
        let { Code } = res
        if (Code === 'OK') {
            //处理返回参数
            console.log(res)
        }
    }, function (err) {
        console.log(err)
    })
}

function execSchedule() {
    const arguments = process.argv.splice(2)
    if(arguments.length){
        const scheduleStr = arguments.join(' ')
        schedule.scheduleJob(scheduleStr, function () {    //6个占位符从左到右分别代表：秒、分、时、日、月、周几
            sendSMS()
            console.log('success to finish task')
        })
    } else {
        sendSMS()
        console.log('success to finish task')
    }
}
execSchedule()
