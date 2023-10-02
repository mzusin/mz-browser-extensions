declare module 'mz-browser-extensions' {
    export const getSyncData: <T>(key: string) => Promise<T | null>;
    export const getLocalData: <T>(key: string) => Promise<T | null>;
    export const setSyncData: <T>(key: string, data: T) => Promise<void>;
    export const setLocalData: <T>(key: string, data: T) => Promise<void>;
    export const deleteSyncData: (key: string) => Promise<unknown>;
    export const deleteLocalData: (key: string) => Promise<unknown>;
    export const clearSyncStorage: () => Promise<unknown>;
    export const clearLocalStorage: () => Promise<unknown>;
    export const clearSyncStorage: () => Promise<unknown>;
    export const clearLocalStorage: () => Promise<unknown>;

    export const getCookie: (domain: string, name: string) => Promise<unknown>;
    export const setCookie: (url: string, name: string, value: string) => Promise<void>;
    export const removeCookie: (url: string, name: string) => Promise<void>;

    /// <reference types="chrome" />
    export const getActiveTab: () => Promise<chrome.tabs.Tab>;
    export const getTabZoom: (tabId: number) => Promise<number>;

    export const captureVisibleAreaScreenshot: (format: string) => Promise<string | null>;
}