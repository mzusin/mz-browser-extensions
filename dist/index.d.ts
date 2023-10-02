declare module 'mz-browser-extensions' {
    export const getSyncData: <T>(key: string) => Promise<T | null>;
    export const getLocalData: <T>(key: string) => Promise<T | null>;
    export const saveSyncData: <T>(key: string, data: T) => Promise<void>;
    export const saveLocalData: <T>(key: string, data: T) => Promise<void>;
    export const deleteSyncData: (key: string) => Promise<unknown>;
    export const deleteLocalData: (key: string) => Promise<unknown>;

    /// <reference types="chrome" />
    export const getCurrentTab: () => Promise<chrome.tabs.Tab>;
}