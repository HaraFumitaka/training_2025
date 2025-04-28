# Dockerの異常調査
インシデント
--
CPU使用率が600%となっており、開発ができない。

Dockerについて
--
コンテナを停止、削除したとしてもCPU使用率600%になっている
再起動した場合
Before
<img src=/img/be_restart.png>
After
<img src=/img/af_restart.png>
ビルドし、開発を行う
- 再起動
  - 変わらない
- Dockerを一時停止、その後起動
  - 変化あり（メモリが削除されている）
- 削除せずにDockerを一時停止、その後起動
  - 変化あり（メモリが削除されている）

コンテナ関係行ったこと
--
- ４つのコンテナ
- ３つのコンテナ（frontend以外）

結論
--
[参照1](https://github.com/docker/for-mac/issues/5164)
[参照2](https://zenn.dev/coconala/articles/fde60ec90571f9)
[参照3](https://github.com/docker/for-mac/issues/5350)
[参照4](https://www.usenimbus.com/post/instantly-improve-docker-performance-on-mac)
Intel Macで「com.docker.backend」が高いCPU使用率を示す主な原因は、バインドマウントによるI/O負荷、仮想化レイヤーのオーバーヘッド、Docker Desktopの一部バージョンの不具合や仕様によるものです。特にバインドマウントを多用する開発環境や、ファイルI/Oが多いプロジェクトで顕著に発生します
