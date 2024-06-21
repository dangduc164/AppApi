import axios from 'axios';
const { apiKey } = require('../const/index');

const clinet = axios.create({
    headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
    }
})

const chatGptEndpoint = 'https://api.openai.com/v1/chat/completions';
const dalleEndpoint = 'https://api.openai.com/v1/images/generations';

export const apiCall = async (propmpt, message) => {
    try {
        const response = await clinet.post(chatGptEndpoint, {
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: "user",
                    content: "Does thi message want to generate an AI image, pricture, art or anything else?",
                },
            ]
        })
        console.log('data :>> ', response.data);
        let isArt = response.data?.choices[[0]].message.content.toLowerCase().includes('yes');
        if (isArt) {
            console.log('dalle api call');
            return dallApiCall(propmpt, message || []);
        } else {
            console.log('chatgpt api call');
            return chatgptApiCall(propmpt, message || []);
        }
    } catch (err) {
        console.log('error: ', err);
        return Promise.resolve({
            success: false,
            message: err.message
        })
    }

}

const chatgptApiCall = async (propmpt , messages) => {
    try {
        const res = await clinet.post(chatGptEndpoint, {
            model: 'gpt-3.5-turbo',
            messages
        })
        console.log('data :>> ', res.data);
        let answer = res.data?.choices[[0]].message.content;
        messages.push({ role: 'assistant', content: answer.trim() })
        return Promise.resolve({ success: true, message: answer })
    } catch (error) {
        console.log('error: ', error);
        return Promise.resolve({ success: false, message: error.message })
    }
}

const dallApiCall = async (propmpt, messages) => {
    try {
        const res = await clinet.post(dalleEndpoint, {
            propmpt,
            n: 1,
            size: '512x512',
        })
        let url = res?.data.data[0]?.url
        messages.push({ role: 'assistant', content: url.trim() })
        return Promise.resolve({ success: true, message: res.data.data[0].url })
    } catch (error) {
        console.log('error: ', error);
        return Promise.resolve({ success: false, message: error.message })
    }
}