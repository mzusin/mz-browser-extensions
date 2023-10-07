export const getActiveTab = () : Promise<chrome.tabs.Tab> => {
    return new Promise((resolve, reject) => {
        try{
            chrome.tabs.query({
                active: true,
                currentWindow: true
            }, (tabs) => {
                if(!tabs || tabs.length <= 0) {
                    reject(null);
                    return;
                }

                resolve(tabs[0]);
            });
        }
        catch (ex) {
            reject(ex);
        }
    });
};

export const getTabZoom = (tabId: number) : Promise<number> => {
    return new Promise((resolve, _reject) => {
        chrome.tabs.getZoom(tabId, (zoomFactor) => {
            resolve(zoomFactor);
        });
    });
};

/*
export const openNewTab = (createProperties: chrome.tabs.CreateProperties) : Promise<chrome.tabs.Tab> => {
    return new Promise((resolve, reject) => {

        try{
            // https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab
            const creating = await chrome.tabs.create(createProperties);
        }
        catch (ex) {
            reject(ex);
        }
    });
};*/