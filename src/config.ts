const flowAccountErrorMessaage = `

No Flow account configured.

Did you export FLOW_ADDRESS and FLOW_PRIVATE_KEY?

`;

const defaultPort = 3000;
const defaultMigrationPath = "./src/migrations";

export function getConfig(env) {
  env = env ?? process.env;

  const port = env.PORT || defaultPort;

  const accessApi = env.FLOW_ACCESS_API_URL;

  const IrVoucherAddress = env.IRVOUCHER_ADDRESS!;

  const fusdTokenAddress = env.FUSD_TOKEN_ADDRESS!;

  const databaseUrl = env.DATABASE_URL!;

  const databaseMigrationPath =
    process.env.MIGRATION_PATH || defaultMigrationPath;

  return {
    port,
    accessApi,
    databaseUrl,
    databaseMigrationPath,
    IrVoucherAddress,
    fusdTokenAddress
  };
}
