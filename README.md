# あみだくじアプリ

## アプリケーション概要

Reactで実装されたあみだくじアプリです。

2~10人を2チーム（チームA, チームB）に振り分けるあみだくじを作成します。

## デモサイト

[こちら](https://palette.pages.devops.aslead.cloud/other/frontend-grouping/amidakuji-m2-sakai)で公開しています。

## ローカルでの起動方法

1. 以下コマンドで依存関係のインストールを行います。
    ```
    npm install
    ```

2. 以下のコマンドで起動します。起動後、ブラウザから`http://localhost:3000` にアクセスしてください。
    ```
    npm start
    ```

## アプリケーションの詳細

- [Create React App](https://ja.reactjs.org/docs/create-a-new-react-app.html)を使用して環境を構築しています。
- 開発言語として、`TypeScript`を採用しています。
- `/src` 以下に、ソースコードをまとめています。

### ディレクトリ構成
```
src/
  ├ components/             # アプリケーションで利用するコンポーネント群
  │
  ├ styles/                 # アプリケーションで利用するCSS群
  │
  ├ views/                  # 画面群
  ├ App.tsx
  ├ ・・・
```