import Knex from 'knex';

export async function up(Knex: Knex) {
  //create table
  return Knex.schema.createTable('items', table => {
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('title').notNullable();
  });
}

export async function down(knex: Knex) {
  //reverse method up
  return knex.schema.dropTable('items');
}