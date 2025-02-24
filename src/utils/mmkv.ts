import { MMKV } from 'react-native-mmkv';

// Tạo các instance với ID riêng biệt
export const errorStore = new MMKV({ id: 'error-store' });
export const languageStore = new MMKV({ id: 'language-store' });
export const settingsStore = new MMKV({ id: 'settings-store' });

// Hàm tiện ích để lưu dữ liệu
export const saveData = (instance: MMKV, key: string, value: any) => {
    if (typeof value === 'object') {
        instance.set(key, JSON.stringify(value));
    } else {
        instance.set(key, value);
    }
};

// Hàm tiện ích để lấy dữ liệu
export const getData = (instance: MMKV, key: string): any => {
    const value = instance.getString(key);
    try {
        return value ? JSON.parse(value) : null;
    } catch {
        return value;
    }
};

// Hàm xóa dữ liệu
export const removeData = (instance: MMKV, key: string) => {
    instance.delete(key);
};

// Ví dụ trong ErrorScreen.tsx
// import { errorStore, saveData, getData } from '../mmkv';
// saveData(errorStore, 'lastError', 'API connection failed!');
// const lastError = getData(errorStore, 'lastError'); // 'API connection failed!'
