/**
 * await captureVisibleArea('png');
 */
export const captureVisibleAreaScreenshot = (format: string) : Promise<string|null> => {
    return new Promise((resolve, reject) => {
        chrome.tabs.captureVisibleTab({
            format,
            quality: 100,
        }, (dataUrl) => {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError);
                reject(null);
                return;
            }

            resolve(dataUrl);
        });
    });
};
