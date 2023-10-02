export const getCurrentTab = () : Promise<chrome.tabs.Tab> => {
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