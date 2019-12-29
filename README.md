# eth-simple-bank
An attempt to build a simple bank decentralized application on the Ethereum Network


Follow the steps below to download, install, and run this project.
## Dependencies
- NPM: https://nodejs.org
- Truffle: https://github.com/trufflesuite/truffle
- Ganache: http://truffleframework.com/ganache/
- Metamask: https://metamask.io/


## Step 1. Clone the project
`git clone https://github.com/0xRadi/eth-simple-bank`

## Step 2. Install dependencies
```
$ cd eth-simple-bank
$ npm install -g truffle
$ npm install
```
## Step 3. Start Ganache
Open the Ganache GUI client that you downloaded and installed. This will start your local blockchain instance.


## Step 4. Compile & Deploy The Bank Smart Contract
`$ truffle migrate --reset`
You must migrate the bankNegara smart contract each time your restart ganache.

## Step 5. Configure Metamask
- Install Metamask in your browser
- Connect metamask to your local Etherum blockchain provided by Ganache.
- Import an account provided by ganache.

## Step 6. Run the Front End Application
You can simply run http server using python

`$ python3 -m http.server 3000`

Visit this URL in your browser: http://localhost:3000
