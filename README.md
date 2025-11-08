# 🏏 Cricket Live Scorecard App

A responsive web application for viewing live cricket match scorecards with real-time updates, player statistics, and ball-by-ball commentary.

## Features

### 1. **Dashboard**
- View all live, completed, and upcoming matches
- Quick overview of team scores and match status
- Intuitive match selection interface

### 2. **Live Scorecard**
- Detailed match information with team lineups
- Current batting and bowling statistics
- Real-time score updates
- Match status (Live, Completed, Upcoming)
- Support for multi-innings matches

### 3. **Match Statistics**
- Total runs, wickets, and overs
- Run rate calculations
- Boundary statistics
- Top performers (batsmen and bowlers)
- Player performance metrics

### 4. **Ball-by-Ball Commentary**
- Detailed description of each delivery
- Runs scored per ball
- Live play-by-play narration
- Easy-to-follow format

### 5. **Responsive Design**
- Mobile-optimized layout
- Desktop and tablet support
- Touch-friendly interface
- Adaptive grid layouts

## Technical Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **No External Dependencies:** Pure frontend implementation
- **Real-time Updates:** Simulated live data with automatic refresh

## 🌐 Live Demo

The app is deployed and accessible at:

**🔗 https://chetan-singh77.github.io/Myown/**

Access from any device - phone, tablet, or desktop! No installation required.

## How to Use

### Online (Recommended)
1. Visit **https://chetan-singh77.github.io/Myown/**
2. The app loads instantly in your browser
3. View available matches on the Dashboard
4. Click on a match to view the detailed scorecard
5. Switch between tabs to view different information:
   - **Dashboard:** All matches overview
   - **Scorecard:** Detailed match information
   - **Statistics:** Performance metrics
   - **Commentary:** Ball-by-ball play description

### Local Development
1. Download or clone this repository to your machine
2. Open `index.html` directly in any modern web browser (double-click the file or drag it into a tab)
3. Follow the same steps as above

> ℹ️ All assets are linked with relative paths, so no build tools or local server are required to run the app.

## Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy-pages.yml   # GitHub Pages deployment workflow
├── index.html                 # Main HTML file with structure
├── styles.css                 # All styling and responsive design
├── app.js                     # JavaScript application logic
├── README.md                  # This file
├── DEPLOYMENT.md              # Deployment guide
└── .gitignore                 # Git ignore file
```

## 🚀 Deployment

The app is automatically deployed to GitHub Pages using GitHub Actions.

- **Live URL:** https://chetan-singh77.github.io/Myown/
- **Auto-deploy:** Pushes to `main` branch trigger automatic deployment
- **Update time:** Changes appear live in 2-3 minutes

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)

## Match Information Displayed

### Scorecard View
- **Teams:** Team names with logos/emojis
- **Score:** Current runs, wickets, overs
- **Batsmen:** Name, runs, balls, fours, sixes, dismissal
- **Bowlers:** Name, overs, runs, wickets, economy rate
- **Venue & Date:** Match location and schedule
- **Match Type:** T20, ODI, Test format information

### Statistics View
- Total runs and wickets
- Run rate analysis
- Boundary count
- Top batsmen and bowlers
- Player performance percentages

### Commentary View
- Ball number and bowler information
- Runs per delivery
- Detailed description of each play

## Features Implemented

✅ Display live cricket match scorecard with real-time updates
✅ Show match details: teams, players, current runs, wickets, overs
✅ Live score display: runs per ball, current batsman/bowler info
✅ Match statistics: total runs, boundaries, wickets, required run rate
✅ Ball-by-ball commentary
✅ Team lineup/squad display
✅ Match status (live, completed, upcoming)
✅ Responsive design for mobile and desktop
✅ Dashboard showing live matches
✅ Detailed scorecard view
✅ Live score updates
✅ Player statistics
✅ Match history/past scores
✅ Simple, clean, intuitive UI

## Responsive Breakpoints

- **Desktop:** Full feature-rich interface
- **Tablet (768px):** Optimized grid layouts
- **Mobile (480px):** Touch-friendly interface with essential information

## Sample Data

The app includes sample cricket match data:
- Live match: Mumbai Indians vs Chennai Super Kings
- Completed match: Rajasthan Royals vs Delhi Capitals
- Upcoming match: Kolkata Knight Riders vs Sunrisers Hyderabad

## Future Enhancements

- Integration with real cricket API
- User authentication
- Match predictions and insights
- Fantasy cricket integration
- Advanced analytics and visualizations
- Multiple language support
- Dark mode theme

---

**Version:** 1.0.0
**Last Updated:** 2024
