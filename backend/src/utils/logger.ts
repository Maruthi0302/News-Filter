export const setupLogger = () => {
  return {
    info: (message: string, ...args: any[]) => {
      console.log(`[INFO] ${message}`, ...args);
    },
    error: (message: string, ...args: any[]) => {
      console.error(`[ERROR] ${message}`, ...args);
    },
    warn: (message: string, ...args: any[]) => {
      console.warn(`[WARN] ${message}`, ...args);
    },
    debug: (message: string, ...args: any[]) => {
      console.debug(`[DEBUG] ${message}`, ...args);
    }
  };
}; 