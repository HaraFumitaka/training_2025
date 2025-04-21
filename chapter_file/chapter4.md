# 第４章Typescriptについて
ToDo
--
- Typescriptとは
- 特徴
- フレームワーク
- メリット
- デメリット
- できること

    1.Typescriptとは
    --
    - 静的型付け（JSに型をつけたもの）
    - クラスベースのオブジェクト指向プログラミング
    - 高い互換性
    - MicrosoftがJSの上位互換として作成した
      - コンパイルの場合JSにコンパイルする

    2.特徴
    --
    - JSの後継言語
    - JSと異なり静的型付け言語
    - インターフェースが搭載されている
      - インターフェース：「実際の処理機能は持たないものの、プログラムに対して特定の約束や振る舞いを付与する機能」

    3.フレームワーク
    --
    - Angular JS
    - React
    - Vue.js

    4.メリット
    --
    - JSより短く読みやすいコードが書ける可能性がある
    - JSとの互換性がある
    - エラーを防止できる
      - 型エラーチェックできる
    - 処理速度が早い（型があるため余分なメモリを取得しないでいい）
    - アップデートに合わせてコンパイルされる

    5.デメリット
    --
    - 特になし

    6.できること
    --
    - 大規模なシステムやアプリケーションの開発
    - Webアプリの開発
    - ゲームの開発（任天堂）
    - モバイルアプリ開発

    7.学習するポイント
    --
    - JSについての基本知識を抑える
      - JSの基本構文
      - データ型・オブジェクト
      - 関数・スコープ
      - 非同期処理
    - 色々読む

    8.環境構築
    --
    [参考リンク](https://zenn.dev/jinmendog/articles/49a156bc5315a9)
    1. Volta
       - Node.jsの各バージョンをインストールしたりアップデートしたり、管理するためのツール
       - install
       ```
       curl https://get.volta.sh | bash
       ```
       - Check
       ```
       volta -v
       ```
  >[!Tip]
  >`volta -v`が効かない場合はターミナルを再起動すれば解決する。
    2. Node.js
       - nodeをinstallする
       ```
       volta install node
       ```
       - Check
       ```
       node -v
       ```
    3. npm(yarn/pnpm)
       - npmはnodeを入れたときにinstallされている
       - yarmとpnpm
       ```
       volta install yarn
       volta install pnpm
       ```
       - Check
       ```
       npm -v
       yarn -v
       pnpm -v
       ```
    4. パッケージマネージャ
    npm,yarm,pnpmのコマンドが統一される
    - install
      ```
      npm i -g @antfu/ni
      ```
    - Check
      ```
      ni -v
      ```
    5. TypeScript
    - install
      ```
      ni -g typescript
      ```
    - Check
      ```
      tsc -v
      ```
    6. Webpack環境構築
    このまま開発するとJSにコンパイルした場合typescriptでエラーメッセージが表示される
    **概要** : ２つのモジュールを一つにする

    - install
      ```
      ni -D webpack webpack-cli webpack-dev-server ts-loader
      ```
    - webpackの詳細設定
      - webpack.config.jsを作成
        - entrypoint作成
        - output指定
        - mode
        - resolve
        - devServer
        - module
    - tfconfig.jsonの設定
      - 作成する
      ```
      ni tsc --init
      ```
      - コメントアウトを外していく
        - すでにされているtarget
          - JSのバージョンを指定する
        - 詳細は調べる
    7. Classを作成
    - クラスを作成、インスタンス化させる
    - bundleを機能させる
      - webpack
      - bundle.jsを作成
      ```
      npm run build
      ```

