import { Configuration, OpenAIApi } from 'openai';

const apiKey = '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';

const configuration = new Configuration({
  apiKey,
});
const openai = new OpenAIApi(configuration);

export default async function regenerate(req, res) {
  const { prompt, topic } = req.query;
  const _prompt = `In regards of ${topic}, rephrase ${prompt}. Only return the rephrased sentence`;

  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: _prompt,
      temperature: 0.5,
      max_tokens: 550,
    });
    const result = completion.data.choices[0].text;
    res.status(200).json({ result });
  } catch (error) {
    console.log(error);
  }
}
