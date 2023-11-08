# lig-nextjs-microcms-template

## フロントエンド使用技術

- Next.js (Using Pages Router / SSG & CSR)
- CSS Modules
- TypeScript

## CMS

- microCMS

## microCMS プレビュー

`src/pages/preview`配下はプレビュー用ページでアクセス制限をかけます。またこのページは microCMS の下書きの変更をリアルタイムに反映したいため、CSR でレンダリングさせます。

## ローカル開発環境構築手順

Node.js >=18.0.0

### microCMS　のセットアップ

microCMS のセットアップを行います。

- APIのエンドポイント名を「blog」として指定して、リスト型のデータを作成し、下記のデータをインポートしてください。

- APIのエンドポイント名を「about」として指定して、オブジェクト型のデータを作成し、下記のデータをインポートしてください。

### env ファイルの作成

.env.sample に下記の値を登録してください。`NEXT_PUBLIC`の接頭辞がつく環境変数は CSR のための変数です。

- SERVICE_DOMAIN
- API_KEY
- NEXT_PUBLIC_SERVICE_DOMAIN
- NEXT_PUBLIC_API_KEY
- NEXT_PUBLIC_SITE_URL

.env.sample を複製して .env を作成してください。

### パッケージインストール

```bash
npm ci
```

### 起動

```bash
npm run dev
```

<http://localhost:3000/> で確認できれば成功です。

## フロントエンド コーディング規約

### コンポーネントについて

- コンポーネントは`src/components/`直下に全てフラットに置きます。
- ファイル名はなるべく属性を先頭に持ってきて、一覧で見たときに探しやすい状態を維持するようにしてください。（ex.「BaseHoge」「PageHoge」「CardHoge」「ButtonHoge」etc...）
- `pages`ディレクトリはデータの取得のみにして、`src/components/PageHoge`に受け渡します。

### スタイリングについて

CSS Modules を使用してスタイリングを行います。

- CSS Modules の特性上、モディファイアをクラス名として扱うのが面倒なため、data 属性を利用することを推奨します。(ex. data-color="hoge" etc...)
- コンポーネント名とCSS Modulesのファイル名を揃えてください。

### 画像について

- ローカルの画像は[next-export-optimize-images](https://github.com/dc7290/next-export-optimize-images)を使用させていただき SSG でも`next/image`が使用できるようにします。

```bash
import Image from "next/image";

<Image src="/images/hoge.jpg" alt="hoge" width={1280} height={800} className=""/>
```

- microCMS にホスティングされている画像は画像 API 機能を使用して最適化を行います。

```bash
<img src="https://images.microcms-assets.io/assets/xxxxx/xxxxx/hoge.jpg?fm=webp&q=80" alt="hoge" width={1280} height={800} decoding="async"/>
```

### アクセシビリティ

- 外部サイトを開く場合は`rel="noopener noreferrer"`をつけて基本的には参照元リンク情報を渡さないでください。

```bash
<a href="https://liginc.co.jp/" target="_blank" rel="noopener noreferrer">
```

## Linter

Lint は`husky`を使用してプリコミット時に実行します。以下の vscode プラグインをインストールすると vscode 保存時にも Lint が実行されます。

- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [markuplint](https://marketplace.visualstudio.com/items?itemName=yusukehirao.vscode-markuplint)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
