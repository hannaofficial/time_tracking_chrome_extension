import React from 'react';
import { createRoot } from 'react-dom/client';

function getBrowsingHistory(callback) {
    const startTime = Date.now() - (7 * 24 * 60 * 60 * 1000); 
    chrome.history.search({
        text: '',
        startTime: startTime,
        maxResults: 50
    }, callback);
}

function HistoryList({historyItems}) {
    if (!historyItems || historyItems.length === 0){
        return <p>No browsing history for next 7 days</p>
    }
        return (
            <ul>
                {historyItems.map((item)=>(
                    <li key={item.id || item.url}>
                            {item.title || item.url}
                    </li>
                ))}
            </ul>
        )
    }

    function App() {
        const [historyData, setHistoryData] = React.useState([]);
        const [loading, setLoading] = React.useState(true);
    
        React.useEffect(() => {
            let isMounted = true; // Flag to track if component is mounted
    
            getBrowsingHistory((items) => {
                if (isMounted) { // Only update state if still mounted
                    setHistoryData(items);
                    setLoading(false);
                    console.log("History Data before rendering:", items);
                }
            });
    
            return () => {
                isMounted = false; // Cleanup: set flag to false on unmount
            };
        }, []);
    
        if (loading) {
            return <p>Loading browsing history...</p>;
        }
    
        return (
            <div>
                <HistoryList historyItems={historyData} />
            </div>
        );
    }

    const rootElement = document.getElementById('root');
    const root = createRoot(rootElement);
    root.render(<App />);

