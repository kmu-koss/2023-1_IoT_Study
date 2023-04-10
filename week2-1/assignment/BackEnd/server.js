const express = require("express");
const cors = require("cors");
// patch 요청을 처리하기 위해 추가적으로 설치한 라이브러리
const bodyParser = require("body-parser");

const app = express();
const PORT = 8000; // 사용할 포트 번호. 프론트엔드 서버와 겹치면 안됨.
app.use(bodyParser.json());

const corsOptions = {
	// 접근을 허용할 주소를 설정. 프론트엔드 서버의 로컬 주소와 일치해야 함.
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));

// 프론트에서 /dust 주소로 날아온 get 요청을 처리
app.get("/dust", (req, res) => {
	// 응답을 json 형식으로 돌려줌.
  res.json([
    { team: "모각코 6조", value: "1000" },
    { team: "모각코 2조", value: "38" },
  ]);
});

// 프론트에서 /toggle 주소로 날아온 patch 요청을 처리
app.patch("/toggle", (req, res) => {
	// 프론트에서 넘겨준 {toggle: currentStatus} 값이 req.body.toggle의 형태로 넘어온다.
  const toggle = req.body.toggle;

	// toggle 값 변경
  if (toggle === "ON") {
    res.json({ toggle: "OFF" });
  } else if (toggle === "OFF") {
    res.json({ toggle: "ON" });
  }
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`server start on port: ${PORT}`);
});