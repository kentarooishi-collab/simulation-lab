# 初回公開の変更内容

## 追加する内容
- V5の3つのシミュレーションと、太陽系の最大800px表示・タブ別配色。
- site/about.htmlの説明と使い方。アプリのフッターから相互リンク。
- README、使い方、仕様、更新と公開の手順。
- PR用チェックとGitHub Pagesの自動公開設定。

## 公開するファイル
site/index.html、site/about.html、site/.nojekyllのみ。

## ソースリポジトリに含めるファイル
site/、docs/、scripts/check-site.cjs、README.md、.gitignore、.github/workflows/。

## 含めない内容
メールアドレス、アカウントの秘密情報、元チャット、ローカルの絶対パス、スクリーンショット、作業ログ、参照資料。

## 検証
開発時のV5は9画面サイズと320時点の天体位置、再生停止、ズーム、月周期、グラフ、鍵盤、無音、故障、修理を確認。初回公開のサイトURL・PR・コミット・Actionsとライブ確認の結果は公開後にここへ追記します。

## 初回公開の記録（2026-10-05 / 日本時間）

- 所有者: kentarooishi-collab。以前の別アカウントとは専用認証設定で分離。
- リポジトリ: https://github.com/kentarooishi-collab/simulation-lab （Public）。
- 公開サイト: https://kentarooishi-collab.github.io/simulation-lab/
- 初回PR: https://github.com/kentarooishi-collab/simulation-lab/pull/1
- 初回ソースコミット: d91ad232e48acf93d9a54bca1a1776e41fe49d05
- mainへの初回反映: 46fdf29cb37e5e9ae775852c494e86fb09047980
- PRチェック: https://github.com/kentarooishi-collab/simulation-lab/actions/runs/37237343135 （成功）。
- 初回デプロイ: https://github.com/kentarooishi-collab/simulation-lab/actions/runs/37237380783 （成功）。
- mainの検証: https://github.com/kentarooishi-collab/simulation-lab/actions/runs/37237380808 （成功）。

### ライブ確認
HTTPSでHTTP 200、想定のタイトルと画面を確認。太陽系の再生停止、月周期変更、地球月ズーム、増加グラフ、タブ配色、Web Audioの初期化・発音処理、修理、320×568の画面への収まり、説明ページとの相互移動を確認。ブラウザエラー0。実スピーカーからの聴取は未確認。

### 次回の更新
site/index.htmlを変更してPRを作成。チェック後にmainへマージすると、Pagesへ自動反映。仕様や使い方が変わる場合はsite/about.htmlとdocs/も更新。認証やユーザー入力データを含めない。
