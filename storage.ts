import { calculations, type Calculation, type InsertCalculation } from "@shared/schema";

export interface IStorage {
  createCalculation(calculation: InsertCalculation): Promise<Calculation>;
  getCalculation(id: number): Promise<Calculation | undefined>;
  getCalculations(): Promise<Calculation[]>;
}

export class MemStorage implements IStorage {
  private calculations: Map<number, Calculation>;
  private currentId: number;

  constructor() {
    this.calculations = new Map();
    this.currentId = 1;
  }

  async createCalculation(insertCalculation: InsertCalculation): Promise<Calculation> {
    const id = this.currentId++;
    const calculation: Calculation = {
      ...insertCalculation,
      id,
      createdAt: new Date(),
    };
    this.calculations.set(id, calculation);
    return calculation;
  }

  async getCalculation(id: number): Promise<Calculation | undefined> {
    return this.calculations.get(id);
  }

  async getCalculations(): Promise<Calculation[]> {
    return Array.from(this.calculations.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }
}

export const storage = new MemStorage();
