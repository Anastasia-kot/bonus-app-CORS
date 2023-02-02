export type BuildMode = 'production' | 'development';

export interface BuildEnv {
    mode: BuildMode;
    port: number;
}


export interface BuildOptions {
    mode: BuildMode;
    paths: {
        entry: string;
        build: string;
        html: string; 
    };
    isDev: boolean;
    port: number;
}
