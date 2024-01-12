import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserStats = ({ platform }) => {
    const [lifetimeStats, setLifetimeStats] = useState(null);
    const [recentMatches, setRecentMatches] = useState(null);
    const [selectedMatchId, setSelectedMatchId] = useState(null);
    const [matchInfo, setMatchInfo] = useState(null);

    useEffect(() => {
        const fetchCodData = async () => {
            try {
                // Replace the URL with your Django backend endpoint
                const response = await axios.post('http://localhost:8000/cod-data/', {
                    unoId: unoId,
                    platform: platform
                });

                setLifetimeStats(response.data.lifetimeStats);
                setRecentMatches(response.data.recentMatches);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        if (unoId && platform) {
            fetchCodData();
        }
    }, [platform]);

    const handleMatchInfo = async (matchId) => {
        try {
            // Replace the URL with your Django backend endpoint for match info
            const response = await axios.get(`http://localhost:8000/cod-match-info/${matchId}/`, {
                params: { unoId: unoId, platform: platform }
            });
            setMatchInfo(response.data);
        } catch (error) {
            console.error('Failed to fetch match info:', error);
        }
    };

    return (
        <div className="user-stats centered-content">
            <h2>Lifetime Stats</h2>
            {lifetimeStats && <pre>{JSON.stringify(lifetimeStats, null, 2)}</pre>}

            <h2>Recent Matches</h2>
            {recentMatches && recentMatches.map(match => (
                <div key={match.matchId}>
                    <p>Match ID: {match.matchId}</p>
                    <button onClick={() => handleMatchInfo(match.matchId)}>View Match Info</button>
                </div>
            ))}

            {selectedMatchId && (
                <div>
                    <h2>Match Details</h2>
                    {matchInfo && <pre>{JSON.stringify(matchInfo, null, 2)}</pre>}
                </div>
            )}
        </div>
    );
};

export default UserStats;