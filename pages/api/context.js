import { Configuration, OpenAIApi } from 'openai';

const apiKey = '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';

const configuration = new Configuration({
  apiKey,
});
const openai = new OpenAIApi(configuration);

export default async function getTitle(req, res) {
  const { prompt, tone } = req.query;
  const GET_HEADER = `could you generate a title, description, and a headline for ${prompt}. Response as json format.
  Title should be between 50 and 60 characters.
  Headlines should be between 60 and 100 characters.
  Description must be greater than 400 characters.
  The tone of the reponse should be ${tone}
  `;

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
