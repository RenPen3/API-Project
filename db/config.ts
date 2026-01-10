import { defineDb } from "astro:db";
import { defineTable, column, NOW } from "astro:db";
import { date } from "astro:schema";

// https://astro.build/db/config
export default defineDb({
  tables: {},
});

export const Person = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    birthday: column.date(), // store full date; we’ll treat it as recurring yearly
    remindDaysBefore: column.number({ default: 7 }),
    createdAt: column.date({ default: NOW }),
  },
});
