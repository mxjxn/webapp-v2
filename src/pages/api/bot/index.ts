import { NextApiRequest, NextApiResponse } from 'next'

// LangChain imports
import {
  ChatPromptTemplate,
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
} from 'langchain/prompts'
import { LLMChain } from 'langchain/chains'
import { ConversationSummaryMemory } from 'langchain/memory'
import { OpenAI } from 'langchain/llms/openai'
import { PromptTemplate } from 'langchain/prompts'

const modelName = 'gpt-4' //'text-davinci-002';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).end() // Method Not Allowed
    return
  }

  const { message, history } = req.body

  console.log({ message, history })

  // Langchain time!
  // choose a primary LLM
  const llm = new OpenAI({
    openAIApiKey: process.env.OPENAI,
    modelName,
  })

  // get the memory template set up properly
  const prompt = PromptTemplate.fromTemplate(
    `You're an assistant to Max Jackson. 
			Max is an artist and developer in Boston.
			Max's NFTs are available via mxjxn.eth.co.
			As an artist, he works with pen, brush, digital tools and AI. 
			Hes currently working in conversational and practical AI.
			Max is interested in finding work as a developer.

	Current Conversation: ${history} 
	Guest: {input}
	Assistant:`
  )
  history
  // create a chain
  const chain = new LLMChain({
    llm,
    prompt,
  })

  const output = await chain.call({
    input: message,
  })

  return res.status(200).json({
    message: output.text ?? 'sorry cant hear you',
  })
}
