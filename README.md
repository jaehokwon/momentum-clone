# Vanilla JS Basic
Vanilla.js를 활용한 Chrome Extension Momentum Clone Coding

## 사용 언어
- HTML, CSS, Javascript

## 기능 구현
- [x] set nickname / logout
- [x] clock
- [x] to-do list
- [x] daily background photo
- [x] quotes
- [x] search text
- [x] weather

## 웹서버 구현(nginx)
- [Web page link](https://t01.kaylabs.dev)
```yaml
version: '3.3'
services:
    nginx:
        ports:
            - '10000:80'
        volumes:
            - '/volume1/docker/momentum-web/html:/usr/share/nginx/html'
        container_name: momentum-web
        image: nginx
```

- Static File Cache 문제로 *.css/*.js/*.png 등 파일이 최신파일로 변경되지 않을 경우 아래와 같이 수행
    ```bash
    # docker container terminal 진입
    $ docker exec -it momentum-web /bin/bash
    $ vi /etc/nginx/nginx.conf

    # vi/vim 설치 안되어 있는 경우 아래 명령어 실행 후 진행
    $ apt-get update
    $ apt-get install vim
    ```
  - `/etc/nginx/nginx.conf`
      ```conf
      ...
      http {
          ...
          sendfile off; // default로 sendfile on;으로 설정되어 있는 부분을 off로 전환 후 저장
          ...
      }
      ...
      ```
      ```bash
      # nginx.conf 다시 로드
      $ nginx -s reload
      ```