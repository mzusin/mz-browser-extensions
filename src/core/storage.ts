/**
 * (async () => {
 *     const result = await getSyncData<{
 *         param1: 1,
 *         param2: 2,
 *     }>('my-key');
 * })();
 */
export const getSyncData = <T>(key: string) : Promise<T|null> => {

    return new Promise((resolve, reject) => {
        try{
            chrome.storage.sync.get([key], result => {
                if(!result || !result[key]) {
                    resolve(null);
                    return;
                }

                const _result = JSON.parse(result[key]) as T;

                resolve(_result);
            });
        }
        catch (ex) {
            console.error(ex);
            reject(ex);
        }
    });
};

export const getLocalData = <T>(key: string) : Promise<T|null> => {

    return new Promise((resolve, reject) => {
        try{
            chrome.storage.local.get([key], result => {
                if(!result || !result[key]) {
                    resolve(null);
                    return;
                }

                const _result = JSON.parse(result[key]) as T;

                resolve(_result);
            });
        }
        catch (ex) {
            console.error(ex);
            reject(ex);
        }
    });
};

export const saveSyncData = <T>(key: string, data: T) : Promise<void> => {

    return new Promise((resolve, reject) => {
        try{
            const _data = JSON.stringify(data);

            chrome.storage.sync.set({
                [key]: _data,
            }, () => {
                resolve();
            });
        }
        catch (ex) {
            console.error(ex);
            reject(ex);
        }
    });
};

export const saveLocalData = <T>(key: string, data: T) : Promise<void> => {

    return new Promise((resolve, reject) => {
        try{
            const _data = JSON.stringify(data);

            chrome.storage.local.set({
                [key]: _data,
            }, () => {
                resolve();
            });
        }
        catch (ex) {
            console.error(ex);
            reject(ex);
        }
    });
};

export const deleteSyncData = (key: string) => {
    return new Promise((resolve, reject) => {
        try{
            chrome.storage.sync.remove(key, () => {
                resolve(null);
            });
        }
        catch (ex) {
            reject(ex);
        }
    });
};

export const deleteLocalData = (key: string) => {
    return new Promise((resolve, reject) => {
        try{
            chrome.storage.local.remove(key, () => {
                resolve(null);
            });
        }
        catch (ex) {
            reject(ex);
        }
    });
};
