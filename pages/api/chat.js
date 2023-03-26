const { Configuration, OpenAIApi } = require("openai");
import connectDB from "../../middleware/mongoose";
const handler = async (req, res) => {

    const configuration = new Configuration({
        apiKey: process.env.CHAT,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: req.body.text,
        max_tokens: 900,
        temperature: 0,
    });
    res.status(200).json({ text: response.data.choices[0].text })
}
export default connectDB(handler);