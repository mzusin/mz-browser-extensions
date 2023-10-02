declare module 'mz-browser-extensions' {
    export const getSyncData: <T>(key: string) => Promise<T | null>;
    export const getLocalData: <T>(key: string) => Promise<T | null>;
    export const saveSyncData: <T>(key: string, data: T) => Promise<void>;
    export const saveLocalData: <T>(key: string, data: T) => Promise<void>;
}