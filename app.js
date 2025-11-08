// Cricket Live Scorecard App
class CricketApp {
    constructor() {
        this.matches = [];
        this.currentMatch = null;
        this.initializeMatches();
        this.setupEventListeners();
        this.renderDashboard();
        this.startLiveUpdates();
    }

    initializeMatches() {
        this.matches = [
            {
                id: 1,
                status: 'live',
                tournament: 'IPL 2024',
                team1: 'Mumbai Indians',
                team2: 'Chennai Super Kings',
                team1Logo: '🦁',
                team2Logo: '🐯',
                team1Runs: 156,
                team1Wickets: 7,
                team1Overs: 18.2,
                team2Runs: 142,
                team2Wickets: 5,
                team2Overs: 17.5,
                venue: 'Wankhede Stadium, Mumbai',
                date: '2024-11-08',
                tossWinnerTeam: 'Mumbai Indians',
                tossDecision: 'Batting',
                matchType: 'T20',
                innings: [
                    {
                        teamName: 'Mumbai Indians',
                        totalRuns: 156,
                        totalWickets: 7,
                        totalOvers: 20,
                        currentOvers: 18.2,
                        battingTeam: true,
                        batsmen: [
                            { name: 'Rohit Sharma', runs: 48, balls: 32, fours: 5, sixes: 1, isCurrent: false, dismissal: 'c Dhoni b Simarjit Singh' },
                            { name: 'Ishan Kishan', runs: 52, balls: 38, fours: 6, sixes: 0, isCurrent: true, dismissal: null },
                            { name: 'Suryakumar Yadav', runs: 28, balls: 18, fours: 4, sixes: 0, isCurrent: false, dismissal: 'b Tushar Deshpande' },
                            { name: 'Hardik Pandya', runs: 15, balls: 10, fours: 1, sixes: 1, isCurrent: false, dismissal: 'c Ruturaj Gaikwad b Tushar Deshpande' },
                            { name: 'Tilak Varma', runs: 8, balls: 6, fours: 1, sixes: 0, isCurrent: false, dismissal: 'c Rajvardhan b Simarjit Singh' },
                        ],
                        bowlers: [
                            { name: 'Tushar Deshpande', overs: 4, runs: 28, wickets: 2, maidens: 0, economy: 7.0 },
                            { name: 'Simarjit Singh', overs: 3.2, runs: 24, wickets: 2, maidens: 0, economy: 7.2 },
                            { name: 'Mukesh Choudhary', overs: 4, runs: 32, wickets: 1, maidens: 0, economy: 8.0 },
                            { name: 'Sam Curran', overs: 3.2, runs: 38, wickets: 2, maidens: 0, economy: 11.4 },
                        ]
                    },
                    {
                        teamName: 'Chennai Super Kings',
                        totalRuns: 142,
                        totalWickets: 5,
                        totalOvers: 20,
                        currentOvers: 17.5,
                        battingTeam: true,
                        batsmen: [
                            { name: 'Ruturaj Gaikwad', runs: 42, balls: 35, fours: 5, sixes: 1, isCurrent: false, dismissal: 'c Kishan b Pandya' },
                            { name: 'Ajinkya Rahane', runs: 28, balls: 24, fours: 3, sixes: 0, isCurrent: false, dismissal: 'lbw b Bumrah' },
                            { name: 'Rachin Ravindra', runs: 31, balls: 22, fours: 4, sixes: 0, isCurrent: true, dismissal: null },
                            { name: 'Shivam Dube', runs: 18, balls: 16, fours: 2, sixes: 0, isCurrent: false, dismissal: 'c Varma b Bumrah' },
                            { name: 'MS Dhoni', runs: 12, balls: 10, fours: 1, sixes: 0, isCurrent: false, dismissal: 'c Sharma b Bumrah' },
                        ],
                        bowlers: [
                            { name: 'Jasprit Bumrah', overs: 4, runs: 22, wickets: 3, maidens: 1, economy: 5.5 },
                            { name: 'Hardik Pandya', overs: 3.5, runs: 28, wickets: 1, maidens: 0, economy: 7.3 },
                            { name: 'Arjun Tendulkar', overs: 4, runs: 35, wickets: 0, maidens: 0, economy: 8.75 },
                            { name: 'Piyush Chawla', overs: 4, runs: 32, wickets: 1, maidens: 0, economy: 8.0 },
                        ]
                    }
                ],
                commentary: [
                    { ball: '18.1', bowler: 'Simarjit Singh', runs: 0, description: 'Good line and length, blocked away' },
                    { ball: '18.2', bowler: 'Simarjit Singh', runs: 4, description: 'FOUR! Ishan Kishan gets it in the gap, lovely shot through point' },
                    { ball: '18.3', bowler: 'Simarjit Singh', runs: 1, description: 'Single taken at mid wicket' },
                    { ball: '18.4', bowler: 'Simarjit Singh', runs: 0, description: 'Blocked by the batsman' },
                    { ball: '18.5', bowler: 'Simarjit Singh', runs: 2, description: 'TWO RUNS! Sliced over the infield' },
                    { ball: '18.6', bowler: 'Simarjit Singh', runs: 0, description: 'Excellent yorker, defended' },
                    { ball: '17.1', bowler: 'Tushar Deshpande', runs: 2, description: 'TWO RUNS! Mid off fielder chases but cannot catch' },
                    { ball: '17.2', bowler: 'Tushar Deshpande', runs: 0, description: 'Dot ball, good bowling' },
                    { ball: '17.3', bowler: 'Tushar Deshpande', runs: 1, description: 'WICKET! Varma departs - caught and bowled!' },
                    { ball: '17.4', bowler: 'Tushar Deshpande', runs: 0, description: 'Maiden over incoming' },
                ]
            },
            {
                id: 2,
                status: 'completed',
                tournament: 'IPL 2024',
                team1: 'Rajasthan Royals',
                team2: 'Delhi Capitals',
                team1Logo: '👑',
                team2Logo: '🦅',
                team1Runs: 178,
                team1Wickets: 6,
                team1Overs: 20,
                team2Runs: 165,
                team2Wickets: 8,
                team2Overs: 20,
                venue: 'Arun Jaitley Stadium, Delhi',
                date: '2024-11-07',
                tossWinnerTeam: 'Rajasthan Royals',
                tossDecision: 'Batting',
                matchType: 'T20',
                result: 'Rajasthan Royals won by 13 runs',
                resultDetails: 'RR: 178/6, DC: 165/8'
            },
            {
                id: 3,
                status: 'upcoming',
                tournament: 'IPL 2024',
                team1: 'Kolkata Knight Riders',
                team2: 'Sunrisers Hyderabad',
                team1Logo: '🎪',
                team2Logo: '🌅',
                team1Runs: '-',
                team1Wickets: '-',
                team1Overs: '0',
                team2Runs: '-',
                team2Wickets: '-',
                team2Overs: '0',
                venue: 'Eden Gardens, Kolkata',
                date: '2024-11-09',
                matchTime: '19:30 IST',
                matchType: 'T20'
            }
        ];
    }

    setupEventListeners() {
        // Tab navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.switchTab(e.target.dataset.tab));
        });

        // Match card selection
        this.updateMatchSelection();
    }

    switchTab(tabName) {
        // Update active tab button
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tabName);
        });

        // Update active tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(tabName).classList.add('active');

        // Load content for the selected tab
        if (tabName === 'scorecard' && this.currentMatch) {
            this.renderScorecard();
        } else if (tabName === 'statistics' && this.currentMatch) {
            this.renderStatistics();
        } else if (tabName === 'commentary' && this.currentMatch) {
            this.renderCommentary();
        }
    }

    renderDashboard() {
        const matchesList = document.getElementById('matches-list');
        matchesList.innerHTML = '';

        this.matches.forEach(match => {
            const matchCard = document.createElement('div');
            matchCard.className = 'match-card';
            matchCard.onclick = () => this.selectMatch(match);

            const statusClass = `status-${match.status}`;
            const statusText = match.status === 'live' ? '🔴 LIVE' : match.status === 'completed' ? '✓ COMPLETED' : '⏱ UPCOMING';

            matchCard.innerHTML = `
                <div class="match-status ${statusClass}">${statusText}</div>
                <div class="match-teams">
                    <div class="team">
                        <span class="team-name">${match.team1Logo} ${match.team1}</span>
                        <span class="team-score">${match.team1Runs}</span>
                    </div>
                    <div class="team">
                        <span class="team-name">${match.team2Logo} ${match.team2}</span>
                        <span class="team-score">${match.team2Runs}</span>
                    </div>
                </div>
                <div class="match-info">
                    <span>${match.matchType}</span>
                    <span>${match.venue}</span>
                </div>
            `;

            matchesList.appendChild(matchCard);
        });
    }

    selectMatch(match) {
        this.currentMatch = match;
        this.updateMatchSelection();
        this.switchTab('scorecard');
    }

    updateMatchSelection() {
        document.querySelectorAll('.match-card').forEach(card => {
            card.style.opacity = '1';
            card.style.borderLeftColor = 'var(--primary-color)';
        });
    }

    renderScorecard() {
        const scorecardContent = document.getElementById('scorecard-content');
        const matchSelected = document.getElementById('match-selected');

        if (!this.currentMatch) {
            matchSelected.style.display = 'block';
            scorecardContent.style.display = 'none';
            return;
        }

        matchSelected.style.display = 'none';
        scorecardContent.style.display = 'block';

        const match = this.currentMatch;
        const statusClass = `status-${match.status}`;
        const statusText = match.status === 'live' ? '🔴 LIVE' : match.status === 'completed' ? '✓ COMPLETED' : '⏱ UPCOMING';

        let html = `
            <div class="match-status-info">
                <div class="current-status">${match.tournament} - ${match.matchType}</div>
                <div class="status-detail">${match.status === 'live' ? 'Live Updates' : match.status === 'completed' ? match.result || 'Match Completed' : 'Match Scheduled for ' + match.date}</div>
            </div>

            <div class="match-header">
                <div>
                    <div style="text-align: center; margin-bottom: 1rem;">
                        <div style="font-size: 3rem; margin-bottom: 0.5rem;">${match.team1Logo}</div>
                        <div style="font-size: 1.2rem; font-weight: 700;">${match.team1}</div>
                    </div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; margin-bottom: 0.5rem;">vs</div>
                    <div style="color: var(--text-secondary);">${match.venue}</div>
                    <div style="color: var(--text-secondary); margin-top: 0.5rem;">${match.date}</div>
                </div>
            </div>

            <div class="match-header" style="border-bottom: none; margin-top: 0;">
                <div>
                    <div style="text-align: center;">
                        <div style="font-size: 3rem; margin-bottom: 0.5rem;">${match.team2Logo}</div>
                        <div style="font-size: 1.2rem; font-weight: 700;">${match.team2}</div>
                    </div>
                </div>
            </div>
        `;

        if (match.innings && match.innings.length > 0) {
            match.innings.forEach((innings, index) => {
                const isCurrentInnings = index === match.innings.length - 1;
                html += `
                    <div class="innings-section">
                        <div class="innings-title">${innings.teamName} Innings</div>
                        <div style="display: flex; justify-content: space-around; margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-color);">
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: var(--primary-color);">${innings.totalRuns}</div>
                                <div style="font-size: 0.85rem; color: var(--text-secondary);">RUNS</div>
                            </div>
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-color);">${innings.totalWickets}</div>
                                <div style="font-size: 0.85rem; color: var(--text-secondary);">WICKETS</div>
                            </div>
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: var(--secondary-color);">${innings.currentOvers}/${innings.totalOvers}</div>
                                <div style="font-size: 0.85rem; color: var(--text-secondary);">OVERS</div>
                            </div>
                        </div>

                        <div style="margin-bottom: 1.5rem;">
                            <h4 style="margin-bottom: 1rem; font-weight: 600;">Batting</h4>
                            <div class="batting-info">
                                ${innings.batsmen.map((batsman, idx) => `
                                    <div class="batsman-row ${batsman.isCurrent ? 'batsman-current' : ''}">
                                        <div class="batsman-name">${batsman.name}${batsman.isCurrent ? ' *' : ''}</div>
                                        <div>${batsman.runs}</div>
                                        <div>${batsman.balls}b</div>
                                        <div>${batsman.fours}×4 ${batsman.sixes}×6</div>
                                        <div style="color: var(--text-secondary);">${batsman.dismissal || 'not out'}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <div>
                            <h4 style="margin-bottom: 1rem; font-weight: 600;">Bowling</h4>
                            <div class="bowling-info">
                                ${innings.bowlers.map((bowler, idx) => `
                                    <div class="bowler-row">
                                        <div>${bowler.name}</div>
                                        <div>${bowler.overs}</div>
                                        <div>${bowler.runs}</div>
                                        <div>${bowler.wickets}W</div>
                                        <div>${bowler.maidens}M</div>
                                        <div>${bowler.economy}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;
            });
        } else if (match.status === 'upcoming') {
            html += `
                <div class="innings-section">
                    <div style="text-align: center; padding: 2rem;">
                        <p style="color: var(--text-secondary); margin-bottom: 1rem;">Match not yet started</p>
                        <p style="font-size: 1.1rem; font-weight: 600;">Scheduled for ${match.matchTime || ''}</p>
                    </div>
                </div>
            `;
        } else {
            html += `
                <div class="innings-section">
                    <div style="text-align: center; padding: 2rem;">
                        <p style="color: var(--text-secondary);">Match details not available</p>
                    </div>
                </div>
            `;
        }

        scorecardContent.innerHTML = html;
    }

    renderStatistics() {
        const statisticsContent = document.getElementById('statistics-content');
        const statisticsSelected = document.getElementById('statistics-selected');

        if (!this.currentMatch || !this.currentMatch.innings) {
            statisticsSelected.style.display = 'block';
            statisticsContent.style.display = 'none';
            return;
        }

        statisticsSelected.style.display = 'none';
        statisticsContent.style.display = 'block';

        const match = this.currentMatch;
        let html = `<h2>Match Statistics</h2>`;

        match.innings.forEach((innings, index) => {
            const totalBoundaries = innings.batsmen.reduce((sum, batsman) => sum + batsman.fours + batsman.sixes, 0);
            const runRate = (innings.totalRuns / parseFloat(innings.currentOvers || 1)).toFixed(2);

            html += `
                <div style="margin-bottom: 2rem;">
                    <h3 style="margin-bottom: 1rem; font-weight: 600; color: var(--primary-color);">${innings.teamName}</h3>
                    <div class="statistics-grid">
                        <div class="stat-card success">
                            <div class="stat-card-label">Total Runs</div>
                            <div class="stat-card-value">${innings.totalRuns}</div>
                        </div>
                        <div class="stat-card warning">
                            <div class="stat-card-label">Wickets Lost</div>
                            <div class="stat-card-value">${innings.totalWickets}</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-card-label">Overs</div>
                            <div class="stat-card-value">${innings.currentOvers}</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-card-label">Run Rate</div>
                            <div class="stat-card-value">${runRate}</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-card-label">Boundaries</div>
                            <div class="stat-card-value">${totalBoundaries}</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-card-label">Avg/Wicket</div>
                            <div class="stat-card-value">${(innings.totalRuns / Math.max(1, innings.totalWickets)).toFixed(1)}</div>
                        </div>
                    </div>

                    <h4 style="margin-top: 2rem; margin-bottom: 1rem; font-weight: 600;">Top Batsmen</h4>
                    <div style="display: grid; gap: 1rem;">
                        ${innings.batsmen.slice(0, 3).map((batsman, idx) => `
                            <div style="background: var(--background-color); padding: 1rem; border-radius: 0.5rem; display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <div style="font-weight: 600;">${batsman.name}</div>
                                    <div style="font-size: 0.85rem; color: var(--text-secondary);">${batsman.runs} runs from ${batsman.balls} balls</div>
                                </div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: var(--primary-color);">${((batsman.runs / batsman.balls) * 100).toFixed(1)}%</div>
                            </div>
                        `).join('')}
                    </div>

                    <h4 style="margin-top: 2rem; margin-bottom: 1rem; font-weight: 600;">Best Bowlers</h4>
                    <div style="display: grid; gap: 1rem;">
                        ${innings.bowlers.sort((a, b) => b.wickets - a.wickets).slice(0, 3).map((bowler, idx) => `
                            <div style="background: var(--background-color); padding: 1rem; border-radius: 0.5rem; display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <div style="font-weight: 600;">${bowler.name}</div>
                                    <div style="font-size: 0.85rem; color: var(--text-secondary);">${bowler.overs} overs, ${bowler.runs} runs</div>
                                </div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-color);">${bowler.wickets}W</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        });

        statisticsContent.innerHTML = html;
    }

    renderCommentary() {
        const commentaryContent = document.getElementById('commentary-content');
        const commentarySelected = document.getElementById('commentary-selected');

        if (!this.currentMatch || !this.currentMatch.commentary) {
            commentarySelected.style.display = 'block';
            commentaryContent.style.display = 'none';
            return;
        }

        commentarySelected.style.display = 'none';
        commentaryContent.style.display = 'block';

        const match = this.currentMatch;
        let html = `
            <h2>Ball-by-Ball Commentary</h2>
            <div style="margin-bottom: 1rem; padding: 1rem; background: var(--background-color); border-radius: 0.5rem;">
                <p style="color: var(--text-secondary);">Latest commentary from the match</p>
            </div>
            <ul class="commentary-list">
        `;

        match.commentary.forEach((item, idx) => {
            const runsClass = item.runs > 0 ? `<span class="commentary-runs">+${item.runs}</span>` : '';
            html += `
                <li class="commentary-item">
                    <div class="commentary-ball">${item.ball} - ${item.bowler}${runsClass}</div>
                    <div class="commentary-text">${item.description}</div>
                </li>
            `;
        });

        html += `</ul>`;
        commentaryContent.innerHTML = html;
    }

    startLiveUpdates() {
        // Simulate live updates every 5 seconds for live matches
        setInterval(() => {
            const liveMatch = this.matches.find(m => m.status === 'live');
            if (liveMatch && this.currentMatch && this.currentMatch.id === liveMatch.id) {
                // Update live match data
                this.simulateLiveUpdate(liveMatch);

                // Re-render if viewing the match
                const activeTab = document.querySelector('.tab-content.active').id;
                if (activeTab === 'scorecard') {
                    this.renderScorecard();
                } else if (activeTab === 'statistics') {
                    this.renderStatistics();
                } else if (activeTab === 'commentary') {
                    this.renderCommentary();
                }
            }
        }, 5000);
    }

    simulateLiveUpdate(match) {
        // Simulate minor variations in live data
        if (match.innings && match.innings.length > 0) {
            const currentInnings = match.innings[match.innings.length - 1];
            const currentBatsman = currentInnings.batsmen.find(b => b.isCurrent);

            if (currentBatsman) {
                // Random chance of runs
                const rand = Math.random();
                if (rand < 0.3) {
                    currentBatsman.runs += Math.floor(Math.random() * 2);
                    currentBatsman.balls += 1;
                    currentInnings.totalRuns += Math.floor(Math.random() * 2);
                } else {
                    currentBatsman.balls += 1;
                }

                // Advance overs occasionally
                if (Math.random() < 0.1) {
                    const [overs, balls] = currentInnings.currentOvers.split('.').map(Number);
                    if (balls < 5) {
                        currentInnings.currentOvers = `${overs}.${balls + 1}`;
                    } else {
                        currentInnings.currentOvers = `${overs + 1}.0`;
                    }
                }
            }
        }
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new CricketApp();
});
