# 全部○段にして古典インドっぽくする

## セットアップ

### 依存関係インストールと.envのコピー

```bash
bun run setup
```

### PostgreSQLの起動、マイグレーション

```bash
docker compose up -d
```

```bash
bun run db:mig
```

## 開発

### Next.jsの起動

```bash
bun dev
```
