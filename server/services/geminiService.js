const OpenAI = require("openai");

const Openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY
});

async function generatecode(skill) {
  const completion = await Openai.chat.completions.create({
    model: "openrouter/auto",
    messages: [
      {
        role: "user",
        content: `
Generate exactly 3 project ideas for a student who knows ${skill}.

Requirements:
1. First project must be Easy.
2. Second project must be Medium.
3. Third project must be Hard.

Return only JSON.

[
  {
    "title": "Project title",
    "difficulty": "Easy",
    "description": "Short description"
  },
  {
    "title": "Project title",
    "difficulty": "Medium",
    "description": "Short description"
  },
  {
    "title": "Project title",
    "difficulty": "Hard",
    "description": "Short description"
  }
]
`
    }
  ]
});

  const text = completion.choices[0].message.content;

  console.log(text);

  const cleanText = text
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();



  return JSON.parse(cleanText);
}

module.exports = generatecode;