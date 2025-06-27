import { pgTable, text, serial, integer, real, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const calculations = pgTable("calculations", {
  id: serial("id").primaryKey(),
  age: integer("age").notNull(),
  gender: text("gender").notNull(),
  height: real("height").notNull(), // in cm
  weight: real("weight").notNull(), // in kg
  activityLevel: text("activity_level").notNull(),
  fitnessGoal: text("fitness_goal").notNull(),
  bmi: real("bmi").notNull(),
  bmr: real("bmr").notNull(),
  dailyCalories: integer("daily_calories").notNull(),
  maintenanceCalories: integer("maintenance_calories").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertCalculationSchema = createInsertSchema(calculations).omit({
  id: true,
  createdAt: true,
});

export type InsertCalculation = z.infer<typeof insertCalculationSchema>;
export type Calculation = typeof calculations.$inferSelect;

// Form validation schemas
export const bmiFormSchema = z.object({
  age: z.number().min(13, "Age must be at least 13").max(120, "Age must be less than 120"),
  gender: z.enum(["male", "female"], { required_error: "Please select a gender" }),
  height: z.number().min(100, "Height must be at least 100cm").max(250, "Height must be less than 250cm"),
  weight: z.number().min(30, "Weight must be at least 30kg").max(300, "Weight must be less than 300kg"),
  activityLevel: z.enum(["sedentary", "light", "moderate", "active", "very-active"], {
    required_error: "Please select an activity level"
  }),
  fitnessGoal: z.enum(["lose", "maintain", "gain"], {
    required_error: "Please select a fitness goal"
  })
});

export type BMIFormData = z.infer<typeof bmiFormSchema>;
