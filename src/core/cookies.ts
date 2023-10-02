/**
 * Required permission: cookies
 */
export const getCookie = (domain: string, name: string) => {
    return new Promise((resolve, reject) => {
        try{
            chrome.cookies.getAll({
                domain,
                name,
            }, ((cookies) => {
                resolve(cookies);
            }));
        }
        catch (ex) {
            console.error(ex);
            reject();
        }
    });
};

export const setCookie = (url: string, name: string, value: string) : Promise<void> => {
    return new Promise((resolve, reject) => {
        try{
            chrome.cookies.set({
                url,
                name,
                value,
            }, () => {
                resolve();
            });
        }
        catch (ex) {
            console.error(ex);
            reject();
        }
    });
};

export const removeCookie = (url: string, name: string) : Promise<void> => {
    return new Promise((resolve, reject) => {
        try{
            chrome.cookies.remove({
                url,
                name,
            }, () => {
                resolve();
            });
        }
        catch (ex) {
            console.error(ex);
            reject();
        }
    });
};