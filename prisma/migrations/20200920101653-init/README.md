# Migration `20200920101653-init`

This migration has been generated at 9/20/2020, 3:46:53 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200920101653-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,18 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "mysql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Category{
+  id Int @default(autoincrement()) @id
+  name String @unique
+  created_at DateTime @default(now())
+  updated_at DateTime @default(now())
+}
```


