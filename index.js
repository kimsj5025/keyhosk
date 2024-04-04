const axios = require('axios');


//음성 인식부

function getSignal(){

    

}

//신호 구분부

function searchStartSiganl(){


}

//해석부

function getGptInfo(signal){

//chatgpt api끌어오기
const apiKey = 'YOUR_API_KEY_HERE';

// 텍스트 생성 요청
const prompt = "Once upon a time, in a land far far away,";
const maxTokens = 50; // 생성할 최대 토큰 수
const temperature = 0.7; // 생성 텍스트의 다양성을 조절하는 매개변수
const n = 1; // 생성할 텍스트의 수

// API 호출
axios.post('https://api.openai.com/v1/completions', {
    prompt: prompt,
    max_tokens: maxTokens,
    temperature: temperature,
    n: n
}, {
    headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
    }
})
.then(response => {
    // 응답에서 생성된 텍스트 추출
    const generatedText = response.data.choices[0].text.trim();
    console.log('Generated Text:', generatedText);
})
.catch(error => {
    console.error('Error:', error.response.data.error.message);
});

// generatedText가 chatGPT에 요청을 보냈을 때 받은 정보

var data = JSON.parse(generatedText);
//gpt 아웃풋을 json형식으로 출력
data.햄버거 = 
}

//데이터 전송부
//프로트엔드