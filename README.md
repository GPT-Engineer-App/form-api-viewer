# form-api-viewer

Create a form to enter the parameters on this curl mockup curl -X GET 'https://tmpay747.azurewebsites.net/api/bridge/get-user/chubbyme/false' -H 'accept:*/*'

And show the response in data view format in a popup container here is the sample response and I wanted to see this sample response on the api call.   {
  "clientId": 400959205,
  "isAgent": false,
  "userType": "Player",
  "username": "Chubbyme",
  "topManager": "Marcthepogi",
  "immediateManager": "agentmakdo",
  "statistic": {
    "currentBalance": 4.82,
    "statisticsForThePast7Days": {
      "totalDeposit": 109000,
      "totalBet": 362045,
      "totalWithdraw": 70000,
      "canWithdraw": true,
      "amountToBet": 0,
      "wageringFactor": 3.32151376146789
    },
    "statisticsForMostRecentDeposit": {
      "totalDeposit": 30000,
      "totalBet": 62500,
      "totalWithdraw": 0,
      "canWithdraw": true,
      "amountToBet": 0,
      "wageringFactor": 2.0833333333333335
    },
    "status": 0,
    "message": "OK"
  },
  "turnOver": null,
  "managers": [
    "agentmakdo",
    "Chubbyme"
  ]
} 

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/form-api-viewer.git
cd form-api-viewer
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
