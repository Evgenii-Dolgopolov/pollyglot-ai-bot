import OpenAI from "openai"

const apiKey = import.meta.env.VITE_OPENAI_API_KEY

const openai = new OpenAI({
  apiKey: apiKey,
  dangerouslyAllowBrowser: true,
})

export async function fetchTranslation(text, language) {
  const messages = [
    {
      role: "system",
      content: "You are a helpful assistant.",
      temperature: 1,
      presence_penalty: 0,
      frequency_penalty: 0,
    },
    {
      role: "user",
      content: `Translate the following text to ${language}: ${text}`,
    },
  ]

  try {
    const completion = await openai.chat.completions.create({
      messages: messages,
      model: "gpt-3.5-turbo",
    })
    console.log(completion.choices[0].message.content)
    return completion.choices[0].message.content
  } catch (error) {
    console.error("Error: ", error)
    throw new Error("Translation failed")
  }
}
