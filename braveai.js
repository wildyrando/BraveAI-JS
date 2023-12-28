const axios = require('axios');

class braveai {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async call(input) {
    const safeInput = `"[INST] ${input} [/INST]"`;
    const requestData = {
      max_tokens_to_sample: 600,
      model: "llama-2-13b-chat",
      prompt: safeInput,
      stop_sequences: ["</response>", "</s>"],
      temperature: 0.2,
      top_k: -1,
      top_p: 0.999
    };

    try {
      const response = await axios.post('https://ai-chat.bsg.brave.com/v1/complete', requestData, {
        headers: {
          'Content-Type': 'application/json',
          'x-brave-key': this.apiKey,
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:99.0) Gecko/20100101 Firefox/110.0'
        }
      });

      const completionText = response.data?.completion;
      return {
        status: response.status,
        result: completionText.trim()
      };
    } catch (error) {
      return {
        status: "error",
        message: error.message
      };
    }
  }
}

module.exports = braveai;
