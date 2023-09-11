[Node.js & JavaScript]
- Node.js 란 JavaScript 런타임이다.
- JavaScript는 브라우저에서 많이 사용되는 프로그래밍 언어이다.
  브라우저에서 실행되는 언어로 로딩 후에도 페이지와 상호작용이 가능하다.
- Node.js는 JS 기반으로 만들어졌으며, JS 코드를 서버에서 실행하게 만든 것
  node.js를 브라우저 밖에서 실행할 수 있다는 것이 중요하다.
- V8은 구글에서 C++로 개발한 JS 엔진으로, JS를 브라우저에서 실행할 수 있도록 해준다.
  엔진은 JS 코드를 Machine 코드로 컴파일해준다.
- Node.js는 C++로 쓰인 v8 코드를 베이스로 파일시스템을 다루는 기능이 가능하다.
  브라우저는 보안상 로컬 데이터에 접근할 수 없다.

- Node.js는 브라우저가 아닌 서버 사이드에서 브라우저가 할 수 없는 기능을 할 수 있는 
  주로 서버를 만들기 위하여 사용된다. React, Vue 등의 유틸리티 스크립트들을 작성하는 도구로 사용되기도 하며
  Build Tools로써도 사용된다.

- Node.js는 Single Thread로 동작한다. 모든 요청은 하나의 Thread로 들어온다. Node 코드를 Start하면 Event Loop가 시작된다. Event Loop는 Event CallBack을 처리하는데 FS같이 오래걸리는 것이 아닌 빨리 끝나는 콜백만을 다룬다. File System operation과 같이 오래 걸리는 연산들은 Worker Pool에 보내진다. Worker Pool에 있는 작업들은 JavaScript 코드로부터 완전히 분리되어 다른 Thread에서 작동한다. Worker가 작업을 마치면, 작업에 대한 CallBack이 시작되는데 Event Loop가 Event와 CallBack을 처리하기 때문에 결국 Event Loop로 들어간 뒤 알맞은 CallBack이 실행된다. 
  - Event Loop의 처리 순서 : Timers -> Pending(Other) CallBacks -> Poll (새로운 I/O Event를 찾아 해당 이벤트의 콜백을 실행하도록 함) -> Check (setImmediate CallBack 실행 = 열린 콜백 다 실행된 이후에 실행되는 CallBack) -> Close CallBack (Close Event CallBack 실행) -> process.exit (refs==0 => 남은 CallBack 개수 확인. 서버 create, listen 이벤트는 끝나지 않기 때문에 refs가 1이다.) -> 다음 Event Loop 시작 

- NPM(Node Project Manager) : node 빌드 도구
  - npm init을 통해 package.json 파일(프로젝트 관련 설정들) 생성.
  	- scripts에서 name을 통해 설정된 동작을 할 수 있도록 세팅 가능 ex)"start-test" : "node app.js" => npm run start-test
  - npm install을 통해서 유용한 외부 Package들을 다운받을 수 있음(3자 모듈)
    - npm install "패키지명" --save : 프로덕션 의존성으로 설치
    - npm install "패키지명" --save-dev : 개발에만 사용하는 의존성으로 설치
    - npm install "패키지명" -g : 장비 전체에서 사용할 수 있도록 설치
  	- nodemon Package : 서버 자동 재시작을 통해 수정사항 바로 적용 가능
  - 패키지 설치시 package.json에 Dependencies로 설정된다. 또한 node_modules 폴더에 dependency에 설정된 모든 패키지가 들어있다. npm install을 통해 dependency에 설정된 모든 패키지를 다시 install 할 수도 있다.

