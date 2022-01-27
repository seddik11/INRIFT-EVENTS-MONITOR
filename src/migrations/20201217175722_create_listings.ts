import { Knex } from "knex"

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("vouchers", async table => {
    table.integer("voucher_id").primary()
    table.integer("drop_id")
    table.text("buyer")
    table.text("transaction_id")
    table.timestamps(true, true)
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("vouchers")
}
