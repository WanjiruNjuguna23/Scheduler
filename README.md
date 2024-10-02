# Auto-planner

This is a task scheduling app that automatically adds tasks as events to Google Calendar, based on user preferences such as peak focus times, hours to exclude, and task priorities. The app also allows users to preview and rearrange events before they are added.

## Features

- Automatically adds tasks as events to Google Calendar.
- Supports different task priorities (high-priority tasks scheduled first).
- User-configurable preferences (focus times, work hours).
- Task preview and approval before scheduling.
- Option to group tasks into time blocks or individual events.
- **Planned Feature**: Pomodoro timer for tasks.

## Tech Stack

- **Frontend**: React, Axios
- **Backend**: Node.js, Express.js, MongoDB (Mongoose)
- **Database**: MongoDB Atlas
- **External APIs**: Google Calendar API

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) and npm installed.
- MongoDB Atlas (or a local MongoDB instance).
- Google Developer account with access to Google Calendar API.

### Step 1: Clone the Repository

```bash
git clone https://github.com/WanjiruNjuguna23/auto-planner.git
cd auto-planner
