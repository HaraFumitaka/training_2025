# 第6章　Dockerについて
ToDo
--
- Dockerとはなにか？
  - 具体的なメリット
  - 使い道
- Mac上でコンテナの基本操作を行う（Dockerコマンドで）
  - Ubuntu公式Dockerイメージを使用しコンテナを起動
  - 起動したコンテナ内部でディレクトリを確認
  - Vimでファイルを作成
  - ホストOSで作ったファイルをコンテナ内で確認する
  - コンテナ内で作成したファイルをホストOSで確認する
  - 生成されたコンテナの一覧を確認し、確認コマンドが表示する内容について理解
  - 起動中のコンテナを停止・再開
  - 不要になったコンテナを削除
  - 保存されているイメージを確認
- リモート（インスタンス）環境で同様のことを実行

1.Dockerとは何か？
--
1. 概要
  1台のサーバー上で様々なアプリケーションを手軽に仮想化・実行できるようにするためのプラットフォームのこと。
2. メリット
  - 簡単に環境構築ができる
  - ハードウェアの資源削減
  - 共有化されたシステム
  - イミュータブル・インフラストラクチャである
    - 開発環境をそのまま本番環境に適応できる
3. 使い道
  - アプリケーション開発時
  - 他のエンジニアと環境を揃えて開発する

2.Mac上でコンテナの基本操作を行う（Dockerコマンドで）
--
[参照Qita](https://qiita.com/kurokoya/items/1dc40d35fc62bdd7c21b)
 1. Ubuntu公式Dockerイメージを使用しコンテナを起動
    - Dockerイメージ取得
    ```
    docker pull ubuntu:22.04
    ```
    - コンテナ起動
      - 起動するのみ
      ```
      docker run --name myubuntu ubuntu:22.04 /bin/bash
      ```
      - 起動して稼働中を維持
        - 方法１ tail -d /dev/null実行
        ```
        docker run -d --name myubuntu ubuntu:22.04 tail -f /dev/null
        ```
       > **意味**
       > Ubuntu 22.04 のコンテナをバックグラウンドで起動し、myubuntu という名前を付け、コンテナ内で /dev/null ファイルの末尾を監視し続ける
     - コンテナの確認
       - 起動中コンテナ一覧
       ```
       docker ps
       ```
       - すべてのコンテナ
       ```
       docker ps -a
       ```
 2. 起動したコンテナ内部でディレクトリを確認
    - コンテナに入る
      - 稼働中のコンテナに入る
      ```
      docker exec -it [CONTAINER IDを入れる] /bin/bash
      ```
      - コンテナを起動して中に入る
      ```
      docker run -it --name [任意の名前をいれる] ubuntu:22.04 /bin/bash
      ```
 3. Vimでファイルを作成
    - vimをinstallする
    ```
    apt-get update
    apt-get install vim
    ```
    - chapter3と同様であるため省略
 4. ホストOSで作ったファイルをコンテナ内で確認する
   - ホストOSごとにのディレクトリをコンテナに提供する(コンテナ作成し直し)
   ```
   docker run -it --name [任意の名前] -h dirtest --mount type=bind,src=[ホストOSのファイル名],dst=[Docker内のファイル名] ubuntu:22.04 /bin/bash
   ```
 5. コンテナ内で作成したファイルをホストOSで確認する
   catで確認する（省略）
 6. 生成されたコンテナの一覧を確認し、確認コマンドで表示
   1のコンテナ確認と同様であるため省略


3.リモート（インスタンス）環境で同様のことを実行してみる。
--
  1. ssh接続を行う
  ```
  ssh -i ~/.ssh/training-2025-hara.pem hara@52.196.29.195
  ```
  2. 2のように実行（省略）

追加項目
--
- CentOS公式イメージを使ってワークと同様の内容を実行
- Ubuntu公式イメージのうち、バージョン18.04を指定して取得
- 取得したイメージを削除
- コンテナに自分の名前をつけて起動
- Ubuntu公式イメージを元にカスタマイズして、オリジナルのイメージを作成
- プロセスという概念の調査

1.CentOS公式イメージを使ってワークと同様の内容を実行
--
[参照Zenn](https://zenn.dev/cran/articles/73000c9a590479)
- 概要
  - CentOSについて
    - Red Hat Enterprise Linux（RHEL）と機能的に互換性を持つ、無償で利用可能なLinuxディストリビューション
  - CentOS StreamとCentOS Linuxの違い
    - Linux
      - Red Hat Enterprise Linux(RHEL)のクローン
      - サポートが終了している（前のもの）
    - Stream
      - 現在はこちらに開発が移行されている
  - Quay.io
    - RedHat社が提供するコンテナイメージレジストリ
    - RedHat社が公開するDocker Hubのようなもの
- イメージをpullし、コンテナ作成
  - pull
  ```
  docker pull quay.io/centos/centos:stream8
  ```

2.Ubuntu公式イメージのうち、バージョン18.04を指定して取得
--
- imageをpull
```
docker pull ubuntu:18.04
```
- コンテナ作成
  - 省略

3.取得したイメージを削除
--
1. Dockerイメージ一覧を確認
```
docker images
```
2. Dockerイメージ削除
```
docker rmi [Docker Image IDを記述]
```

4.コンテナに自分の名前をつけて起動
--
ToDoで行っているため省略

5.Ubuntu公式イメージを元にカスタマイズして、オリジナルのイメージを作成
--
[参考Qita](https://qiita.com/S4nTo/items/977d28b0eac316915702)
   1. Dockerの種類
      - Dockerfile
        - 概要
          - DockerfileとはDockerイメージを構築するための設計図のようなもの
          - Dockerfileを編集することで、環境構築ができる
        - コマンドの種類
          - FROM
            - FROMではベースイメージの指定
          - RUN
            - RUNでは、対応するディストリビューション（Ubuntu、CentOS、debianなど）の実行コマンドを入力して必要なライブラリなどのインストール
          - COPY
            - ファイルのコピー（ホストOSから）
          - WORKDIR
            - 作業ディレクトリを指定
          - CMD
            - CMDでは"コンテナの"実行コマンドを指定
            - CMDを編集することで、実行コマンドの省略
      - Docker Compose
        - 役割
          - 複数のコンテナを起動
          - コンテナ間の通信が可能
          - compose.ymlを作成
        - YAMLファイル
   2. Dockerfileの建て方
      - Dockerfileを作成
      - DockerfileからDockerイメージの作成
      ```
      docker image build -t [任意の名前image] [Dockerfileのパス]
      ```
      - Dockerコンテナを起動して中に入る
      ```
      docker run -it --name [任意の名前をいれる] [任意の名前image] /bin/bash
      ```
>[!Tip]
>Dockerfileパスは現在のディレクトリの場合[.]のみ
   3. Docker Composeの建て方
      - compose.ymlファイルを作成
      - Docker composeをビルド
        ```
        docker-compose build
        ```
      - Docker composeを起動
        ```
        docker-compose up -d
        ```
6.Dockerコマンド
--
コンテナ
- コンテナの一覧を表示
```
docker container ls -a
```
- コンテナの起動???
```
docker container run -- name [任意の名前] [Imageの名前]
```
- コンテナの停止
```
docker container stop [コンテナの名前]
```
- 停止中のコンテナの起動
```
docker container start [コンテナの名前]
```
>[!Tip]
>停止中のものは起動して、入らなければならない
- コンテナに入る
```
docker exec -it [コンテナの名前] /bin/bash
```
- 起動中のコンテナの再起動
```
docker container restart [コンテナの名前]
```
- コンテナの削除
```
docker container rm [コンテナの名前]
```

Compose
- コンテナの停止
```
docker compose stop
```
- コンテナの再起動
```
docker compose start
```

7.プロセスという概念の調査
--
dockerのプロセス
Dockerでコンテナを起動すると、コンテナ内で起動するプロセスはdockeredの子プロセスとして起動する
プロセス：実行中のプログラム
例
- 同時に起動する
  - フロントエンドサーバー
  - バックエンドサーバー
