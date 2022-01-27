# IR Events handler

The IR Events handler is an app built with [express](https://expressjs.com/) that use the [Flow JS SDK](https://github.com/onflow/fcl-js/tree/master/packages/sdk) to listen and handle events.

## Setup

Run the commands below to get the app ready.

- **ENV Config** - set the environment variables like the `IRVOUCHER_ADDRESS` On Testnet/Mainnet.

```
FUSD_TOKEN_ADDRESS=0xe223d8a629e49c68
IRVOUCHER_ADDRESS=0xfabd9cf4bd46e807 
FLOW_ACCESS_API_URL=https://access-testnet.onflow.org
DATABASE_URL=postgresql://seddik:password@localhost:5432/in-rift
MIGRATION_PATH=src/migrations
BLOCK_WINDOW=1
```

- **Express server setup** -

```
npm install
```
```
npm run dev
```