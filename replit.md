# SmartPlate - BMI & Nutrition Calculator

## Overview

SmartPlate is a comprehensive health and fitness application that calculates BMI (Body Mass Index), daily caloric needs, and macronutrient distributions based on user inputs. The application features a modern React frontend with TypeScript, an Express.js backend, and PostgreSQL database integration using Drizzle ORM.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Comprehensive component library based on Radix UI primitives

### Backend Architecture
- **Runtime**: Node.js with TypeScript (tsx for development)
- **Framework**: Express.js for REST API endpoints
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod schemas for type-safe validation
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Build System**: ESBuild for production bundling

### Database Architecture
- **Primary Database**: PostgreSQL (configured via DATABASE_URL)
- **ORM**: Drizzle ORM with migrations support
- **Fallback Storage**: In-memory storage for development (MemStorage)
- **Schema**: Calculations table storing user health metrics and results

## Key Components

### Data Models
- **Calculations Table**: Stores user health data including age, gender, height, weight, activity level, fitness goals, and calculated results (BMI, BMR, daily calories, maintenance calories)
- **Validation Schemas**: Zod schemas for form validation and API data validation

### API Endpoints
- `POST /api/calculations` - Save calculation results
- `GET /api/calculations` - Retrieve calculation history
- `GET /api/calculations/:id` - Get specific calculation

### Frontend Components
- **BMI Calculator**: Interactive form for user input with real-time validation
- **Results Display**: Comprehensive results showing BMI category, caloric needs, and macronutrient breakdown
- **UI Components**: Reusable shadcn/ui components (forms, buttons, cards, etc.)

### Business Logic
- **BMI Calculation**: Standard BMI formula (weight/height²)
- **BMR Calculation**: Mifflin-St Jeor equation for basal metabolic rate
- **Activity Multipliers**: Configurable activity level adjustments
- **Caloric Adjustments**: Goal-based calorie modifications (lose/maintain/gain weight)
- **Macronutrient Distribution**: Protein, carbohydrate, and fat recommendations

## Data Flow

1. **User Input**: Form submission with health metrics (age, gender, height, weight, activity level, fitness goal)
2. **Client-Side Validation**: Zod schema validation ensures data integrity
3. **API Request**: Validated data sent to backend calculation endpoint
4. **Server Processing**: Business logic calculations performed
5. **Database Storage**: Results saved to PostgreSQL via Drizzle ORM
6. **Response**: Calculated results returned to frontend
7. **Result Display**: Comprehensive health metrics and recommendations shown to user

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Framework**: Radix UI primitives, Tailwind CSS, class-variance-authority
- **Data Fetching**: TanStack React Query
- **Validation**: Zod with Hookform resolvers
- **Routing**: Wouter
- **Utilities**: clsx, date-fns, lucide-react icons

### Backend Dependencies
- **Core**: Express.js, TypeScript, tsx
- **Database**: Drizzle ORM, @neondatabase/serverless, connect-pg-simple
- **Validation**: Zod, drizzle-zod
- **Build**: ESBuild for production bundling

### Development Dependencies
- **Build Tools**: Vite, TypeScript compiler
- **Replit Integration**: Replit-specific plugins for development environment

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev` - Runs tsx server with hot reloading
- **Port**: 5000 (configured in .replit)
- **Database**: PostgreSQL 16 module in Replit environment

### Production Build
- **Frontend Build**: `vite build` - Generates optimized static assets
- **Backend Build**: `esbuild` - Bundles server code with external dependencies
- **Start Command**: `npm run start` - Runs production server from dist/

### Deployment Configuration
- **Platform**: Replit Autoscale deployment
- **Build Process**: Parallel frontend and backend builds
- **Static Assets**: Served from dist/public
- **Environment Variables**: DATABASE_URL for PostgreSQL connection

### Database Management
- **Schema Deployment**: `npm run db:push` - Applies schema changes via Drizzle
- **Migrations**: Stored in ./migrations directory
- **Connection**: Neon serverless PostgreSQL driver for production

## Changelog

```
Changelog:
- June 27, 2025. Initial setup
- June 27, 2025. Personalized app with custom branding:
  * Updated page title to "SmartPlate – Personal Nutrition Coach"
  * Changed main headings to Georgia font with green color (#228B22)
  * Updated button text to "Start My Health Journey"
  * Renamed "About BMI" section to "Healthy Hacks"
  * Added personalized footer: "© 2025 SmartPlate | Developed by Abinayavalli C"
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
Personalization preferences: Georgia font for headings, green color scheme, custom branding for Abinayavalli C.
```