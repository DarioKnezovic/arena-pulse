const getEnv = (varKey: string): string => {
    const key = `VITE_${varKey}`;
    return import.meta.env[key];
};

export const envs = {
    API_KEY: getEnv('API_KEY'),
};
