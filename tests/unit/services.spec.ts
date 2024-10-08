import { describe, expect, test, beforeEach, vi, afterEach } from "vitest";
import { getFromLocalStorage, setToLocalStorage, getFetchedData, getFetchedDataFromArray } from "../../src/app/services";

// Мок fetch
global.fetch = vi.fn();

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

describe('getFetchedData', () => {
  const mockData = { key: 'value' };

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('should fetch data successfully', async () => {
    // Mock the global fetch function
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockData,
    }));

    const url = 'https://example.com';
    const result = await getFetchedData(url);

    expect(result).toEqual(mockData);
    expect(fetch).toHaveBeenCalledWith(url, { method: 'GET' });
  });

  test('should throw error for invalid URL', async () => {
    const invalidUrl = '    ';
    
    await expect(getFetchedData(invalidUrl)).rejects.toThrow();
  });
});

describe('getFetchedDataFromArray', () => {
  const mockDataArray = [{ key1: 'value1' }, { key2: 'value2' }];

  beforeEach(() => {
    // Mock global fetch function for all tests
    vi.stubGlobal('fetch', vi.fn((url) => {
      if (url === 'https://example.com/1') {
        return Promise.resolve({
          ok: true,
          json: async () => mockDataArray[0],
        });
      } else if (url === 'https://example.com/2') {
        return Promise.resolve({
          ok: true,
          json: async () => mockDataArray[1],
        });
      }
      return Promise.reject(new Error('Fetch failed'));
    }));
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('should fetch data from multiple URLs successfully', async () => {
    const urls = ['https://example.com/1', 'https://example.com/2'];
    const result = await getFetchedDataFromArray(urls);

    expect(result).toEqual(mockDataArray);
  });
});
