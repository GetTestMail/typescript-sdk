# typescript-sdk
Typescript client for interacting with the GetTestMail API, which provides a simple way to create temporary email addresses and receive emails sent to them.

## Installation
```bash
npm install @gettestmail/typescript-sdk
```

## Compatibility

>Works on Browser, Node.js and React Native!


## Usage

To create a new GetTestMail API client, you need to instantiate the GetTestMail class with your API key. To get an API key, sign up for a free [account](https://gettestmail.com).


```typescript
import { GetTestMail } from "@gettestmail/typescript-sdk";

const testMail = new GetTestMail('YOUR_API_KEY')
```

### Create a new email address

```typescript
const mailBox = await testMail.createNew()
```

### Wait for an email to be received

```typescript
const { message } = await testMail.waitForMessage(mailBox.id)
```

