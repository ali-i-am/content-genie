import { Configuration, OpenAIApi } from 'openai';

const apiKey = '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';

const configuration = new Configuration({
  apiKey,
});
const openai = new OpenAIApi(configuration);

export default async function getHeadline(req, res) {
  const { prompt } = req.query;
  const GET_HEADER =
    'Based on the following information, please generate a headline for me. Only send the headline.';

  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: GET_HEADER + prompt,
      temperature: 0.5,
      max_tokens: 550,
    });
    const responseText = completion.data.choices[0].text;
    const cleanText = responseText.replace(/(\r\n|\n|\r)/gm, '');
    res.status(200).json({ result: cleanText });
  } catch (error) {
    console.log(error);
  }
}
