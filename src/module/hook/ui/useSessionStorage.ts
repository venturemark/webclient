import { useState } from "react";

class BrowserStorage {
  length: number = 0;
  storage: { [key: string]: string } = {};
  key(n: number) {
    const keys = Object.keys(this.storage);
    if (keys.length > n) {
      return null;
    }
    return keys[n];
  }
  setItem(id: string, val: string) {
    return (this.storage[id] = JSON.stringify(val));
  }
  getItem(id: string) {
    return this.hasOwnProperty(id) ? this.storage[id] : null;
  }
  removeItem(id: string) {
    return delete this.storage[id];
  }
  clear() {
    var self = this;
    Object.keys(this.storage).forEach(function (key) {
      self.removeItem(key);
    });
  }
}

function newBrowserStorage(): Storage {
  const target = new BrowserStorage();
  const handler = {
    get(target: object, property: PropertyKey, receiver: BrowserStorage) {
      if (property === "length") {
        return Object.keys(receiver).length;
      }
      return Reflect.get(target, property, receiver);
    },
  };
  return new Proxy<BrowserStorage>(target, handler) as Storage;
}

let storage: Storage;

function getStorage() {
  if (!storage) {
    try {
      localStorage.setItem("_", "_");
      localStorage.removeItem("_");
      storage = window.sessionStorage;
    } catch (e) {
      storage = newBrowserStorage();
    }
  }
  return storage;
}

export function useSessionStorage<T>(key: string, initialValue: T) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      // Get from local storage by key
      const item = getStorage().getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      if (typeof window !== "undefined") {
        getStorage().setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue] as const;
}
