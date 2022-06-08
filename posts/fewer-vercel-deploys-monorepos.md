---
title: "How to configure Vercel deploys for a monorepo package"
date: '2022-06-05'
---

Without configuration, Vercel will create a new deployment any time your repository updates, which is not ideal for monorepos.

With multiple packages, you're probably only hosting one or two on Vercel. So deploying every time any package is changed is unnecessary and might eat up your deployment quota ([100/day](https://vercel.com/docs/concepts/limits/overview) for the free plan). Luckily, Vercel makes it easy to configure deployments to only happen when a specific package is changed.

## Step 1: Navigate to Git settings

Open your Vercel project's dashboard, go to "Settings" > "Git", and scroll to "Ignored Build Step".

## Step 2: Add a Git command

If you've configured the Root Directory in Vercel to be the same package you want to trigger deploys, add the following command:

```bash
git diff HEAD^ HEAD --quiet ./
```

But if you've for some reason left the Root Directory as its default value `./`, you''ll need to use the package's absolute path instead:

```bash
git diff HEAD^ HEAD --quiet ./packages/your-package/
```

*Tip: If you're unsure what your Vercel project's Root Directory is, go to "Settings" > "General" and scroll to "Root Directory".*

## Step 3: Enjoy fewer deploys

Success! When pushing a change to *outside* of `packages/your-package`, Vercel will no longer create a new deployment.

<Image src="/images/vercel-monorepo/build-canceled.png" />

But if you push a change to `packages/your-package`, Vercel will build and deploy as usual.

<Image src="/images/vercel-monorepo/successful-deployment.png" />

May you stay on the free plan for a little bit longer.
