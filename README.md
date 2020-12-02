# playwright-issue

https://github.com/microsoft/playwright/issues/4444

- for public access deployed functions

```shell script
$ gcloud alpha functions add-iam-policy-binding issue_puppeteer --region=asia-northeast1 --member=allUsers --role=roles/cloudfunctions.invoker"
```

or

```shell script
$ gcloud alpha functions add-iam-policy-binding issue_playwright --region=asia-northeast1 --member=allUsers --role=roles/cloudfunctions.invoker"
```

