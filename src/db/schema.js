import { relations } from "drizzle-orm";
import { pgTable, serial, uuid, varchar, integer, text } from "drizzle-orm/pg-core";

export const project = pgTable("projects", {
  // id: uuid().defaultRandom().primaryKey(),
  id: serial().primaryKey(),
  name: text("name"),
});

export const projectRelations = relations(project, ({ many }) => ({
  tasks: many(task),
}));

export const task = pgTable("tasks", {
  id: uuid().defaultRandom().primaryKey(),
  name: text("name"),
  // projectId: varchar("projectId").references(() => project.id),
  projectId: integer().references(() => project.id),
});

export const taskRelations = relations(task, ({ one }) => ({
  project: one(project, {
    fields: [task.projectId],
    references: [project.id],
  }),
}));
