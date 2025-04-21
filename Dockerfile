# ベースイメージを指定
FROM ubuntu:20.04

# 作業ディレクトリを/appに設定
WORKDIR /app

# 環境変数を表示するスクリプトをコピー
COPY print_env.sh .

# スクリプトを実行するコマンド
CMD ["./print_env.sh"]
