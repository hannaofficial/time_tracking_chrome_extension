import React from 'react';
import { createRoot } from 'react-dom/client';

// JSDoc type definitions for better understanding and editor support

/**
 * @typedef {Object} PageItemData
 * @property {string} url
 * @property {string} [title] - Optional title
 * @property {number} time - Milliseconds
 * @property {string} [extractedText] - Optional extracted text
 */

/**
 * @typedef {Object} DomainTimeInfo
 * @property {number} totalTime - Milliseconds
 * @property {PageItemData[]} items
 */

/**
 * @typedef {{ [domain: string]: DomainTimeInfo }} DomainGroupedTimeData
 */


/**
 * @param {object} props
 * @param {DomainGroupedTimeData} props.timeData
 */
function DomainTimeDisplay({ timeData }) {
    if (!timeData || Object.keys(timeData).length === 0) {
        return <p>No time data available yet.</p>;
    }

    const topDomains = Object.entries(timeData)
        .sort(([, domainA], [, domainB]) => domainB.totalTime - domainA.totalTime)
        .slice(0, 5);

    if (topDomains.length === 0) {
        return <p>No domain time data to display.</p>;
    }

    return (
        <div>
            <h3 style={{fontSize: '16px', marginBottom: '8px', fontWeight: 'bold'}}>Top 5 Domains by Time Spent:</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '12px' }}>
                {topDomains.map(([domain, data]) => {
                    let representativePage = data.items.length > 0 ? data.items[0] : null;
                    if (data.items.length > 0) {
                        const sortedItemsWithTextFirst = [...data.items].sort((a,b) => {
                            if (a.extractedText && !b.extractedText) return -1;
                            if (!a.extractedText && b.extractedText) return 1;
                            return b.time - a.time;
                        });
                        representativePage = sortedItemsWithTextFirst[0];
                    }

                    return (
                        <li key={domain} style={{ marginBottom: '10px', padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }}>
                            <strong style={{ display: 'block', marginBottom: '3px' }}>{domain}</strong>
                            Total: {(data.totalTime / 1000).toFixed(1)} sec
                            {representativePage && (
                                <div style={{ marginTop: '3px', fontSize: '11px', color: '#555' }}>
                                    <p style={{ margin: '2px 0', fontWeight: 'bold' }}>
                                        Sample Page: {representativePage.title || representativePage.url.substring(0, 40) + '...'}
                                    </p>
                                    {representativePage.extractedText ? (
                                        <p style={{ margin: '2px 0', fontStyle: 'italic' }}>
                                            Text Snippet: "{representativePage.extractedText.substring(0, 100)}..."
                                        </p>
                                    ) : (
                                        <p style={{ margin: '2px 0', fontStyle: 'italic' }}>No extracted text for sample page.</p>
                                    )}
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

function App() {
    const [historyData, setHistoryData] = React.useState(null);
    /** @type {[DomainGroupedTimeData | null, React.Dispatch<React.SetStateAction<DomainGroupedTimeData | null>>]} */
    const [timeData, setTimeData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [apiError, setApiError] = React.useState(null);

    React.useEffect(() => {
        const sendDataToAPIAndSetState = async () => {
            console.log("Popup: Initiating data fetch and API send sequence.");
            setLoading(true);
            setApiError(null);

            try {
                const historyResponse = await new Promise((resolve) => {
                    chrome.runtime.sendMessage({ message: "request_history" }, resolve);
                });
                const historyToSend = historyResponse?.history || [];
                setHistoryData(historyToSend);
                console.log("Popup: History data received from background:", historyToSend.length, "items");

                const timeDataResponse = await new Promise((resolve) => {
                    chrome.runtime.sendMessage({ message: "get_time_data" }, resolve);
                });
                /** @type {DomainGroupedTimeData} */
                const timeDataToSend = timeDataResponse?.timeData || {};
                setTimeData(timeDataToSend);
                console.log("Popup: Time data received from background:", Object.keys(timeDataToSend).length, "domains");

                try {
                    console.log("Popup: Sending data to API...");
                    const apiUrl = 'http://localhost:3000/api/data';
                    const res = await fetch(apiUrl, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            history: historyToSend,
                            timeData: timeDataToSend
                        })
                    });

                    if (!res.ok) {
                        const errorData = await res.json().catch(() => ({ message: "Unknown API error format" }));
                        console.error("Popup: API POST error response:", res.status, errorData);
                        setApiError(`API Error: ${res.status} - ${errorData.message || 'Failed to send data'}`);
                    } else {
                        const data = await res.json();
                        console.log("Popup: API POST success response:", data);
                    }
                } catch (apiFetchError) {
                    console.error("Popup: API fetch call failed:", apiFetchError);
                    setApiError(`Network Error: ${apiFetchError.message || 'Failed to connect to API'}`);
                }

            } catch (backgroundError) {
                console.error("Popup: Error communicating with background script:", backgroundError);
                setApiError("Error fetching data from extension background.");
            } finally {
                setLoading(false);
                console.log("Popup: Data fetch and API send sequence complete.");
            }
        };

        sendDataToAPIAndSetState();
    }, []);

    const handleRefreshTimeData = () => {
        setLoading(true);
        chrome.runtime.sendMessage({ message: "get_time_data" }, (timeResponse) => {
            /** @type {DomainGroupedTimeData} */
            const newTimeData = timeResponse?.timeData || {};
            setTimeData(newTimeData);
            setLoading(false);
            console.log("Popup: Time data refreshed for UI.");
        });
    };

    const handleResetTimeData = () => {
        chrome.runtime.sendMessage({ message: "reset_time_data" }, (response) => {
            if (response && response.success) {
                console.log("Popup: Time data reset signal sent. UI cleared.");
                setTimeData({});
            } else {
                console.error("Popup: Time data reset failed or no response.");
            }
        });
    };

    let content;
    if (loading) {
        content = <p>Loading data & sending to server...</p>;
    } else if (apiError) {
        content = (
            <>
                <p style={{ color: 'red' }}>Error: {apiError}</p>
                <DomainTimeDisplay timeData={timeData} />
            </>
        );
    } else if (timeData && Object.keys(timeData).length > 0) {
        content = <DomainTimeDisplay timeData={timeData} />;
    } else {
        content = <p>No time data available. Browse some websites!</p>;
    }

    return (
        <div style={{ width: '350px', padding: '10px', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ textAlign: 'center', fontSize: '18px', marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>Browsing Insights</h2>
            {content}
            <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'space-around', paddingTop: '10px', borderTop: '1px solid #eee' }}>
                <button onClick={handleResetTimeData} style={{padding: '5px 10px'}}>Reset Time</button>
                <button onClick={handleRefreshTimeData} style={{padding: '5px 10px'}}>Refresh View</button>
            </div>
        </div>
    );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);