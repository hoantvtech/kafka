const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:29092'],
});

const producer = kafka.producer();

async function sendExample(data) {
  await producer.connect()
  await producer.send({
    topic: 'test-topic',
    messages: data,
  });
}

sendExample([{ value: 'Hello KafkaJS user1!' },]);
