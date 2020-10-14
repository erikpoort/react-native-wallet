declare module 'react-native-wallet' {
  /**
   * Check if you can add passes.
   * @param callback A callback which will receive a boolean
   */
  export function canAddPasses(callback: (_canAddPasses: boolean) => void): void;

  /**
   * Show the pass controller for the provided URL.
   * The resolving promise will contain a boolean saying if the pass was added or not.
   * @param passURL URL to pkpass file
   * @return Promise Passing a boolean
   */
  export function showAddPassControllerFromURL(passURL: string): Promise<boolean>;

  /**
   * Show the pass controller for the provided filepath.
   * The resolving promise will contain a boolean saying if the pass was added or not.
   * @param filepath File path pkpass file
   * @return Promise Passing a boolean
   */
  export function showAddPassControllerFromFile(filepath: string): Promise<boolean>;
}