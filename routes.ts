import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { storage } from "./storage";
import { insertCalculationSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route to save calculation results
  app.post("/api/calculations", async (req, res) => {
    try {
      const validatedData = insertCalculationSchema.parse(req.body);
      const calculation = await storage.createCalculation(validatedData);
      res.json(calculation);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid input data",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          message: "Failed to save calculation" 
        });
      }
    }
  });

  // API route to get calculation history (for future feature)
  app.get("/api/calculations", async (req, res) => {
    try {
      const calculations = await storage.getCalculations();
      res.json(calculations);
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to retrieve calculations" 
      });
    }
  });

  // API route to get a specific calculation
  app.get("/api/calculations/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid calculation ID" });
      }
      
      const calculation = await storage.getCalculation(id);
      if (!calculation) {
        return res.status(404).json({ message: "Calculation not found" });
      }
      
      res.json(calculation);
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to retrieve calculation" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
