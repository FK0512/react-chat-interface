const API_URL = "https://openrouter.ai/api/v1/chat/completions"; // OpenRouter API Endpoint
const API_KEY = "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"; // Replace with your OpenRouter API Key

export const fetchChatResponse = async (messages) => {
  try {
    console.log("OpenRouter API Key:", API_KEY);

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`, // OpenRouter uses Bearer Authentication
        "HTTP-Referer": "https://www.webstylepress.com", // Optional, helps with OpenRouter ranking
        "X-Title": "WebStylePress", // Optional, helps with OpenRouter ranking
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-r1:free", // Correct model format for DeepSeek on OpenRouter
        messages: messages, // Ensure messages follow OpenAI-compatible format
      }),
    });

    console.log("Response Status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error Response:", errorText);
      throw new Error(`API Error ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    console.log("API Response Data:", data);

    return data.choices?.[0]?.message?.content || "No response received.";
  } catch (error) {
    console.error("Error fetching response:", error);
    return `Error: ${error.message}`;
  }
};
