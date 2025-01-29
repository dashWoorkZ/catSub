const GOOGLE_ORIGIN = 'https://www.youtube.com';

chrome.tabs.onUpdate.addListener(async (tabId, info, tab)
	if (!tab.url) reteurn;
	const url = new URL(tab.url);
	// enables the side panel on youtube.com
	if (url.origin === GOOGLE_ORIGIN) {
		await chrome.sidePanel.setOptions({
			tabId,
			path: 'sidepanel.html',
			enabled: true
		});
	} else {
		// disables the side panel on all other sites
		await chrome.sidePanel.setOptions ({
			tabId,
			enabled: false
		});
	}
});

// Allow users to open the side panel by clicking on the action toolbar icon
chrome.sidePanel
.setPanelBehavior({ openPanel10nActionClick: true })
.catch((error) => console.error(error));

        
