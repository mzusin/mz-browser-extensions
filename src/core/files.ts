/**
 * Permissions: downloads
 * Also the standard JavaScript FileReader APIs can be used in popup/content.
 */
export const download = (url: string, filename: string) => {
    return new Promise((resolve, reject) => {
        try{
            // https://developer.chrome.com/docs/extensions/reference/downloads/
            chrome.downloads.download({
                url,
                filename,
            },(downloadId) => {
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

declare global {
    interface Window {
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        showOpenFilePicker: any;
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        showSaveFilePicker: any;
    }
}

export interface IFileType {
    description: string;
    accept: {
        [key: string]: string[];
    }
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/API/File_System_API
 */
export const getFile = (fileTypes: IFileType[]) => {
    return new Promise((resolve, reject) => {
        (async () => {
            try {
                /*
                const fileTypes = [
                   {
                       description: "Text file",
                       accept: {
                           "text/plain": [".txt"]
                       }
                   },
               ];*/

                const fileHandlerArray = await window.showOpenFilePicker({
                    types: fileTypes
                });

                if(!fileHandlerArray || fileHandlerArray.length <= 0) {
                    reject();
                    return;
                }

                const fh = fileHandlerArray[0];
                const fd = await fh.getFile();
                const text = await fd.text();

                resolve({
                    name: fh.name,
                    text,
                });
            }
            catch (ex) {
                reject(ex);
            }
        })();
    });
};

export const saveFile = (fileTypes: IFileType[], fileName: string, text: string) => {
    return new Promise((resolve, reject) => {
        (async () => {
            try {
                /*
                const fileTypes = [
                   {
                       description: "Text file",
                       accept: {
                           "text/plain": [".txt"]
                       }
                   },
               ];*/

                const fileHandler = await window.showSaveFilePicker({
                    types: fileTypes,
                    suggestedName: fileName,
                });

                const ws = await fileHandler.createWritable();
                await ws.write(text);
                await ws.close();

                resolve(null);
            }
            catch (ex) {
                reject(ex);
            }
        })();
    });
};


