# 第２章　Gitの初歩とマークダウン
ToDo
--
- 個人アカウントに任意のリポジトリを作成する
- gitのssh設定
- github desktopベースで作成したリポジトリをcloneする
- 任意のマークダウンファイルをpushし、ファイルがgithubサイトで閲覧できる
-各種の作業は作業手順書としてまとめる

    1.個人アカウントに任意のリポジトリを作成
    --
    **手順**
    1.Repositories内でNewボタンを押す。
    2.リポジトリを作成
    - Repository nameに任意の名前をつける。
    - Public（公開）/Private（非公開）を設定。
    - READMEを作成するか否か。
    - .gitignore(Gitに反映しないファイルを指定するもの)

    2.gitのssh設定
    --
    **手順**
    1.名前,Email設定
    2.sshキーを作成
    ```
    ssh-keygen -t id_ed25519 -C "GitHubに登録したメールアドレス"
    ```
    3.パスワード設定
    4.作成したSSHキーをコピー
    ```
    pbcopy < ~/.ssh/id_ed25519.pub
    ```
    5.GithubのページでSSHキーを登録
    - Settingss
    - SSH and GPG keys
    - 任意の名前をつけ、先程コピーしたものを貼り付ける

    *Check*
    SSH接続を確認する
    ```
    ssh -T git@github.com
    ```

    3.github desktopベースで作成したリポジトリをcloneする
    --
    1.cloneコマンドをターミナルで任意の階層で打つ
    ```
    git clone ///{Githubのリポジトリ内のclone用のURLを打つ}///
    ```

    4.任意のマークダウンファイルをpushし、ファイルがgithubサイトで閲覧できる
    --
    **Commandで打つ**
    
    1.任意の階層に行く
    2.ステージングする
    ```
    git add .
    ```
    3.commitする
    ```
    git commit -m ""
    ```
    4.pushする
    ```
    git push origin main
    ```


    5.各種の作業は作業手順書としてまとめる
    --
    省略


追加項目
--
- マークダウンで様々な記法にふれる
  - [Qitaリンク](https://qiita.com/Qiita/items/c686397e4a0f4f11683d)
- Gitコマンド
  - ブランチ関係
    - git branch
    - git merge
- git運用方法
  - Issue
    - ブランチを切ってIssueごとに管理することが可能
  - Git Actions
    - 未調査

追記
--
> [!NOTE]  
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]  
> Crucial information necessary for users to succeed.

> [!WARNING]  
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.
