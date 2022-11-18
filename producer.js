const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:29092'],
});

const producer = kafka.producer();

async function sendCoreActionLog(data) {
  await producer.connect()
  await producer.send({
    topic: 'dev_createCoreActionLog',
    messages: data,
  });
}

for (let i = 0; i <= 2; i++) {
  sendCoreActionLog([
    {
      value: JSON.stringify({
        action: 'view_video_lesson',
        user_id: 4297,
        create_date: '2022-11-17 05:46:49',
        update_date: '2022-11-17 03:28:49'
      }),
    }
  ]);
}

