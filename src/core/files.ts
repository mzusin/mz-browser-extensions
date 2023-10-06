/**
 * Permissions: downloads
 */
export const download = (url: string) => {
    return new Promise((resolve, reject) => {
        try{
            // https://developer.chrome.com/docs/extensions/reference/downloads/
            chrome.downloads.download({ url },(downloadId) => {
                // chrome.downloads.download's callback function is called
                // when the download begin successfully (not on completed).
                resolve(downloadId);

                /*
                chrome.downloads.onChanged.addListener(listener)
                chrome.downloads.onChanged.removeListener(listener)
                chrome.downloads.onChanged.hasListener(listener)
                chrome.downloads.onChanged.addListener(function (downloadDelta) {...});
                https://stackoverflow.com/questions/51600832/how-to-make-chrome-downloads-api-wait-until-a-download-has-ended
                 */
            });
        }
        catch (ex) {
            console.error(ex);
            reject();
        }
    });
};


