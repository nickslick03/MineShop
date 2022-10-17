import { useState } from "react";

export const useLocalStorage = <T>(key: string, initalValue: T) => {
    
    const isNull = localStorage.getItem(key) === null;

    const [value, setState] = useState(isNull 
        ? initalValue 
        : JSON.parse(localStorage.getItem(key) as string) as T);

    if (isNull) localStorage.setItem(key, JSON.stringify(initalValue));

    const setValue = (value: T) => {
        localStorage.setItem(key, JSON.stringify(value));
        setState(value);
    }

    return {value, setValue};
}