const axios = require('axios');
import OpenAI from "openai";

const openai = new OpenAI();

//음성 인식부

function getSignal(){



}

//신호 구분부

function searchStartSiganl(){


}

//해석부

function getGptInterpret(signal){

    async () => {
        var completion = await openai.chat.completions.create({
            messages: [
              {
                role: "system",
                content: "You are a helpful assistant designed to output JSON.",
              },
              { role: "user", content: `\"${signal}\" 라는 문장에서 화자가 무엇을 주문하려 하는지 수량과 갯수를 json파일 형식으로 출력해줘` },
            ],
            model: "gpt-3.5-turbo-0125",
            response_format: { type: "json_object" },
          });
          console.log(completion.choices[0].message.content);
    }


//gpt 아웃풋을 json형식으로 출력

}

//데이터 전송부
//프로트엔드

getGptInterpret("햄버거 1개 콜라 3개 주세요")