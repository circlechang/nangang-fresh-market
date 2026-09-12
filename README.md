# 南港新鮮市

Hugo + PagesCMS 的企業官網第一版。

## 目前狀態

這是可建置、可預覽的網站架構示意版。以下內容尚待正式資料：

- Logo、正式品牌識別與圖片
- 實際店家／產品／案例資料
- 營業地址、電話、營業時間
- 表單收件服務與 endpoint
- 正式自訂網域

## 本機預覽

```bash
hugo server -D
```

開啟 http://localhost:1313/。

## 正式建置

```bash
hugo --minify
```

輸出目錄是 `public/`。

## PagesCMS

PagesCMS 設定檔是根目錄的 `.pages.yml`。登入 `app.pagescms.org` 並授權 GitHub 後，可以管理：

- Homepage：`data/home.yaml`
- Site settings：`data/site.yaml`
- Products and services：`content/products/`
- Case studies：`content/cases/`
- News：`content/posts/`

## 表單

目前 `hugo.yaml` 的 `params.formEndpoint` 是空值，因此網站會顯示「尚未設定」訊息，不會假裝已經收件。

正式上線前，請選擇 Formspree、Tally、Web3Forms 或其他靜態表單服務，填入 endpoint，然後用測試資料完成一次收件驗證。

## 部署

`.github/workflows/pages.yml` 預設使用 GitHub Pages。正式設定前需要：

1. 在 GitHub repository 啟用 Pages，Source 選 GitHub Actions。
2. 將正式 `baseURL` 寫入 `hugo.yaml`。
3. 設定自訂網域與 DNS。
4. 確認 HTTPS 憑證啟用。
5. 用正式網域檢查首頁、sitemap、robots.txt 與表單。
