import { Configuration, OpenAIApi } from 'openai';

const apiKey = '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';

const configuration = new Configuration({
  apiKey,
});
const openai = new OpenAIApi(configuration);

export default async function regenerate(req, res) {
  const { prompt } = req.query;
  const GET_HEADER = `Rephrase ${prompt}. Only return the rephrased sentence`;

  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: GET_HEADER + prompt,
      temperature: 0.5,
      max_tokens: 550,
    });
    const result = completion.data.choices[0].text;
    res.status(200).json({ result });
  } catch (error) {
    console.log(error);
  }
}