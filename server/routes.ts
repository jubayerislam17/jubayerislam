import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // For now, just log the contact message
      // In a real application, you would store this in the database
      console.log("Contact form submission:", {
        ...validatedData,
        timestamp: new Date().toISOString()
      });
      
      // You could also send an email notification here
      // using nodemailer or a service like SendGrid
      
      res.json({ 
        success: true, 
        message: "Message received successfully" 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
