import * as dotenv from 'dotenv';
dotenv.config({ path: 'Key.env' });

import OpenAI from "openai";

const key = process.env.TZ

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a helpful assistant designed to output JSON." },
      { role: "user", content: "Who won the world series in 2020?" },
    ],
  });


  // Null check
  if(completion.choices[0].message.content != null){
    console.log(completion.choices[0].message.content.slice(0,1))
  }
  else{
    console.log("n");
  }
}

main();