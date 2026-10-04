# 体験シミュレーションラボ

太陽系の公転、数値の増加、損傷によって変化するピアノの音を体験する静的Webアプリです。

## 収録内容

| タブ | 内容 | 見た目 |
| --- | --- | --- |
| 太陽系を旅する | 時間速度、月周期1〜12か月、地球・月ズーム、惑星と主要衛星、軌跡、天体説明 | 暗い宇宙 |
| 増加のしくみ | 初期値・増加率・期間による複利グラフ | クリームとブラウン |
| 音とピアノ | 12鍵、音量、演奏強度、耐久度、音程／ノイズの変化、修理、キーボード演奏 | 淡い紫 |

## 公開サイト

公開予定URL: [https://kentarooishi-collab.github.io/simulation-lab/](https://kentarooishi-collab.github.io/simulation-lab/)

[使い方・このラボについて](https://kentarooishi-collab.github.io/simulation-lab/about.html) ／ [ソースリポジトリ](https://github.com/kentarooishi-collab/simulation-lab)

現在は公開準備中です。初回デプロイ成功後に公開状態と検証結果を更新します。

## 手元で開く

[site/index.html](site/index.html) をブラウザで開きます。ビルド・依存パッケージ・ネット接続は不要です。説明ページは [site/about.html](site/about.html) です。

## ドキュメント

- [使い方](docs/usage.md)
- [仕様と構成](docs/specification.md)
- [更新・デプロイ手順](docs/development.md)
- [初回公開の変更内容](docs/initial-release.md)

## 更新の流れ

変更用ブランチ → Pull Request → 検証 → mainへマージ → GitHub ActionsでPagesに自動公開。

変更前にNode.jsで次のチェックを実行できます。

```sh
node scripts/check-site.cjs
```

## 前提

天体の距離・サイズ・衛星周期は観察用の簡略モデルです。入力はブラウザ内で処理し、外部送信も保存もしません。音声は最初の鍵盤操作で有効化します。
