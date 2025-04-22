# 第５章　Angularについて
ToDo
--
- Angularについて
- 環境構築

1.Angularについて
--
[参照](https://zenn.dev/milab/articles/a129309d9a84b7)
[RxJS参照](https://zenn.dev/milab/articles/a129309d9a84b7)
- Angularとは
  - SPA（Single Page Application）のフレームワーク
    - ページ遷移をせずに単一のページでコンテンツの切り替えを行う（イメージ：Googleマップ）
  - コンポーネントベースのフレームワーク
  - JSのフレームワーク
    - Webシステムを作るうえで必要な各種機能や関連するライブラリが予め含まれている
  - 必要な技術
    - HTML,CSS,JS,TS,RxJS
    - RxJS
      - JSで非同期処理を用意に扱うためのライブラリ
  - 注意
    - Angular JSはバージョン１系でJSベース
    - Angularはバージョン２以降でTSベース
    - ともに互換性はない
- RxJSライク
  - Observableを利用したリアクティブプログラミングのためのライブラリでコールバックベースのコードや非同期なコードをより使いやすくする
- Observableについて
  - イベントやデータをストリームとして扱うクラス
  - イメージ：川(Observable)にはモノ(value)が流れ,受け取る(Observer),受け取る前に加工(Operators),川をキャンセルする(unsubscribe)の処理
- Observerとは
  - 通知を処理するための3種類のコールバックメソッドを持っているオブジェクト
  - Observerを使うには購読(subscribe)する必要
  - Observableを定義しただけでは値は流れず、subscribeすることで初めて値が受け取れる
  - ３種類
    - next: 必須であり、新しい値が流れてくるたびに呼び出される
    - error:Observableからエラー通知を受けとった際に呼び出される
    - complete:Observableから完了通知を受け取った際に呼び出される

2.環境構築
--
1. Angular CLIをインストール
```
npm install -g @angular/cli
```
*Check*
```
ng version
```
2. アプリの雛形を作成
- 新規プロジェクトの作成
```
ng new [プロジェクト名]
```
- プロジェクト起動
```
ng serve --open
```
3.その他のコマンド
新規コンポーネントの作成
```
ng generate component [任意の名前]
```
サービスクラスをコマンドで作成
```
ng generate servise [フォルダ名]
```
4.コンポーネント
--
ライフサイクルフックを利用することで実行タイミングに合わせた処理の実行が可能

5.用語
--
- データバインディング
- 属性ディレクティブ
- 構造ディレクティブ
- フォーム
  - テンプレート駆動フォーム
  - リアクティブフォーム
- 依存性注入
- ルーティング
- 
