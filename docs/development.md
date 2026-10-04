# 更新・デプロイ手順

## 編集する場所
主にsite/index.htmlを編集します。使い方が変わる場合はsite/about.html、README.md、docs/usage.mdも更新します。

## Pull Request
1. mainから変更用ブランチを作成。
2. 変更を実施し、node scripts/check-site.cjsを実行。
3. デスクトップ・狭い幅・横長で表示と操作をブラウザ確認。
4. 変更理由、挙動、検証結果、制約を書いてPRを作成。
5. 差分を確認してmainにマージ。

## 公開
GitHub PagesのSourceはGitHub Actions。mainの変更によりpages.ymlが検証し、site/だけをアップロードして公開します。validate.ymlはPRとmainに対して構文・相対リンク・公開対象を検証します。

GitHub上のActionsから「Deploy GitHub Pages」の成功と公開URLを確認し、実際のサイトで3タブ・再生停止・月周期・ズーム・ピアノ・説明リンクを確認してください。成功ステータスだけでは画面と音声の確認は完了しません。

## 戻す場合
問題の変更を取り消すコミットをPRでmainへ反映すると、前の内容が再デプロイされます。履歴の強制書き換えは不要です。

## アカウント
作成・更新・Pages設定の前にGitHubのログインユーザーとremoteの所有者を確認します。メールアドレスとユーザー名は別の識別子です。認証情報をソース・文書・ログへ保存しないでください。

## GitHub公式資料
- [Pagesの公開元設定](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Pagesのカスタムワークフロー](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
