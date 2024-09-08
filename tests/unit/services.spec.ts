import { describe, expect, test, beforeEach } from "vitest";
import { getFromLocalStorage, setToLocalStorage } from "../../src/app/services";
import { EErrorMessages } from "../../src/shared/enums";

describe("localstorage service callbacks", () => {
  beforeEach(() => {
    if (!global.localStorage) {
      const localStorageMock = (() => {
        let store: Record<string, string> = {};
        return {
          getItem(key: string) {
            return store[key] || null;
          },
          setItem(key: string, value: string) {
            store[key] = value;
          },
          clear() {
            store = {};
          },
          removeItem(key: string) {
            delete store[key];
          },
        };
      })();

      global.localStorage = localStorageMock;
    }
  });

  const testValue = "test";
  const testKey = "testKey";

  describe("getFromLocalstorage", () => {
    test("should get item from localstorage", () => {
      localStorage.setItem(testKey, testValue);

      expect(getFromLocalStorage(testKey)).toEqual(testValue);
    });

    test("should return null when value not exist", () => {
      expect(getFromLocalStorage("notExist")).toBeNull();
    });
  });

  describe("setToLocalstorage", () => {
    test("should set item to local storage", () => {
      setToLocalStorage(testKey, testValue);

      expect(localStorage.getItem(testKey)).toEqual(testValue);
    });
  });
});
