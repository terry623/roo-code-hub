# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` - Starts Vite dev server with hot reload
- **Build**: `npm run build` - TypeScript compilation + Vite build for production
- **Lint**: `npm run lint` - Run ESLint to check code quality
- **Preview**: `npm run preview` - Preview production build locally

## Architecture

This is a React + TypeScript application built with Vite that serves as a platform for sharing Roo Code Custom Modes and Slash Commands.

### Tech Stack
- **Frontend**: React 19.1 with TypeScript
- **Routing**: React Router DOM v7.8
- **Styling**: Tailwind CSS v4.1
- **Build Tool**: Vite v7.1 with SWC for fast compilation
- **Package Manager**: pnpm (lock file present)

### Application Structure
- **Entry Point**: `src/main.tsx` - React root with BrowserRouter wrapper
- **App Component**: `src/App.tsx` - Main router with three routes: Home (/), Custom Modes (/modes), Slash Commands (/commands)
- **Layout**: `src/components/Layout.tsx` - Shared navigation layout with links to external wiki and submit survey
- **Pages**: Three main pages in `src/pages/` directory for Home, CustomModes, and SlashCommands

### Key Configuration
- **TypeScript**: Uses project references with separate configs for app and node
- **ESLint**: Configured with TypeScript, React hooks, and React refresh plugins
- **Vite**: Uses React SWC plugin and Tailwind CSS integration

### External Links
The application references:
- Wiki URL: https://github.com/anthropics/claude-code
- Survey URL: https://surveycake.com/example
- Related docs: https://docs.roocode.com/features/custom-modes and https://docs.roocode.com/features/slash-commands