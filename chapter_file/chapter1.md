# 第１章　Macの環境構築
install
--
- homebrew
  - ` /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`をコマンドラインで実行
- git
  - homebrewを入れたら勝手にinstallされる
- github desktop
  - [リンク](https://github.com/apps/desktop?ref_cta=download+desktop&ref_loc=installing+github+desktop&ref_page=docs)からinstall
- github アカウント作成
  - [リンク](https://github.com/login)からCreate an accountで作成
- docker desktop
  - [リンク](https://www.docker.com/ja-jp/get-started/)から適切なものをinstall
- docker
  - docker desktopを入れたら勝手にinstallされる
- docker compose
  -  docker desktopを入れたら勝手にinstallされる
- VS code (Visual Studio code)
  - [Qitaリンク](https://qiita.com/qrrq/items/0e116a59743874d18cb1)を参考に拡張機能をインストール
  - [Qitaリンク](https://qiita.com/papi_tokei/items/c639dc7d1e0f5ad68a74)を参考にVS codeの設定
  >[!Tip]
  codeコマンドを打ちたい場合VScodeの検索バーで`>shell command`と打ちinstallするというボタンをクリックすると使用できるようになる。


Check
--
以下を実行し結果と同じであればinstallできている。
1.``docker ps``
```
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```
2.``docker compose``
```
Docker Compose version v2.34.0-desktop.1
```
3.``git -v``
```
git version 2.39.5 (Apple Git-154)
```
4.``brew -v``
```
Homebrew 4.4.31
```

追加項目（解説）
--
- iterm2
  - 多機能のターミナル
  - [downloadリンク](https://iterm2.com/)
  - 使い方[リンク](https://qiita.com/ryamate/items/075c34fcf29d0889c15a)
- homebrew
  - パッケージマネージャ
- Git
  - ソースコードや変更履歴を管理するバージョン管理システム
- docker
  - アプリケーションの実行環境を構築するためのソフトウェア
- vscode
  - エディターもといIDE
