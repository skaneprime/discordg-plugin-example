/// <reference types="node" />

/** @public */
declare function ansiRegex({ onlyFirst }?: {
    onlyFirst?: boolean | undefined;
}): RegExp;

/** @public */
declare type Any<T extends any[] = any[], R = any> = (...args: T) => R;

/** @public */
declare type Any_2<T extends any[] = any[], I = any> = new (...args: T) => I;

/** @public */
declare function asyncFunc<T extends (...args: any[]) => Promise<any>>(fn: T, ...args: Parameters<T>): Promise<any>;

/** @public */
declare type CamelCase<S extends string> = S extends `${infer P1}_${infer P2}${infer P3}` ? `${Lowercase<P1>}${Uppercase<P2>}${CamelCase<P3>}` : Lowercase<S>;

/** @public */
declare function chunkItems<T>(items: T[], size: number): T[][];

declare namespace Class {
    export {
        isClass,
        Any_2 as Any,
        Unknown_2 as Unknown
    }
}

/** @public */
declare function combiner(...combinerArgs: any[]): (...funcs: Any[]) => (...args: any[]) => void;

declare namespace Compiler {
    export {
        wrappedDgImport as import,
        wrappedDgCompile as compile
    }
}

declare interface CompilerOptions {
    out?: string;
    ver?: string;
    minify?: boolean;
    declaration?: boolean;
    externals?: string[];
}

/** @public */
declare function create(...args: ConstructorParameters<typeof LoggerService>): LoggerService;

/** @public */
declare function defineStatic<T>(): <U extends T>(constructor: U) => U;

declare namespace dgArray {
    export {
        chunkItems
    }
}

declare namespace dgFs {
    export {
        ensureDirectoryExistence
    }
}

declare namespace dgObject {
    export {
        mergeProp,
        mergeProps,
        keysToCamelCase,
        KeysToCamelCase
    }
}

declare namespace dgPromise {
    export {
        Result
    }
}

declare namespace dgTime {
    export {
        msToTime
    }
}

declare namespace dgTypes {
    export {
        defineStatic,
        ReturnOrInstance,
        ParamsOrClassParams,
        IsFunction,
        JSONValue,
        Exactly
    }
}

declare global {
namespace Dingir {
    export {
        Compiler,
        Utils,
        Logger,
        Performance_2 as Performance,
        env
    }
}
}

/** @public */
declare function disableLog(): void;

/** @public */
declare function enableLog(): void;

/** @public */
declare function endLabel(label: string): void;

/** @public */
declare function ensureDirectoryExistence(filePath: string): true | undefined;

declare namespace env {
    export {
        version
    }
}

/** @public */
declare type Exactly<T, U> = {
    [K in keyof U]: K extends keyof T ? T[K] : never;
};

/** @public */
declare function extend<F extends Any, D, M = {
    [P in keyof D]: D[P];
}>(Function: F, DataMap?: M): F & (M | undefined);

/** @public */
declare function firstLetterToLowerCase(str: string): string;

/** @public */
declare function func<T extends (...args: any[]) => any>(fn: T, ...args: Parameters<T>): ReturnType<T>;

declare namespace Function_2 {
    export {
        extend,
        combiner,
        Any,
        Unknown
    }
}

/** @public */
declare function hashCode(str: string): number;

/** @public */
declare function isClass(obj: unknown): boolean;

/** @public */
declare type IsFunction<T> = T extends Function_2.Any ? true : false;

/** @public */
declare type JSONValue<T = undefined> = string | number | boolean | null | T | Array<JSONValue<T>> | {
    [key: string]: JSONValue<T>;
};

/** @public */
declare type KeysToCamelCase<T> = {
    [K in keyof T as String_2.CamelCase<string & K>]: T[K];
};

/** @public */
declare function keysToCamelCase<T extends Record<string, unknown>>(obj: T): KeysToCamelCase<T>;

declare namespace Logger {
    export {
        create,
        LoggerService,
        LogLevel
    }
}

/** @public */
declare class LoggerService {
    private options?;
    theme: {
        level: Record<LogLevel, string>;
        time: {
            color: string;
            format: string;
        };
    };
    private file?;
    private stdout;
    private showableLevels;
    private timeLabels;
    private get time();
    private colorizeLvl;
    private seperate;
    private write;
    constructor(options?: {
        stdout?: (NodeJS.WriteStream & {
            fd: 1;
        }) | undefined;
        logs?: boolean | undefined;
        logFilePath?: string | undefined;
        label?: string | undefined;
    } | undefined);
    enableLevel(level: LogLevel): this;
    disableLevel(level: LogLevel): this;
    private wrap;
    trace: ((...args: unknown[]) => void) & {
        time: (label?: string | undefined) => ((...args: unknown[]) => void) | undefined;
        timeEnd: (label: string, ...args: unknown[]) => void;
        timeFunc: <T extends (...args: unknown[]) => void>(callback: T) => T;
    };
    debug: ((...args: unknown[]) => void) & {
        time: (label?: string | undefined) => ((...args: unknown[]) => void) | undefined;
        timeEnd: (label: string, ...args: unknown[]) => void;
        timeFunc: <T extends (...args: unknown[]) => void>(callback: T) => T;
    };
    info: ((...args: unknown[]) => void) & {
        time: (label?: string | undefined) => ((...args: unknown[]) => void) | undefined;
        timeEnd: (label: string, ...args: unknown[]) => void;
        timeFunc: <T extends (...args: unknown[]) => void>(callback: T) => T;
    };
    warn: ((...args: unknown[]) => void) & {
        time: (label?: string | undefined) => ((...args: unknown[]) => void) | undefined;
        timeEnd: (label: string, ...args: unknown[]) => void;
        timeFunc: <T extends (...args: unknown[]) => void>(callback: T) => T;
    };
    error: ((...args: unknown[]) => void) & {
        time: (label?: string | undefined) => ((...args: unknown[]) => void) | undefined;
        timeEnd: (label: string, ...args: unknown[]) => void;
        timeFunc: <T extends (...args: unknown[]) => void>(callback: T) => T;
    };
    fatal: ((...args: unknown[]) => void) & {
        time: (label?: string | undefined) => ((...args: unknown[]) => void) | undefined;
        timeEnd: (label: string, ...args: unknown[]) => void;
        timeFunc: <T extends (...args: unknown[]) => void>(callback: T) => T;
    };
}

/** @public */
declare enum LogLevel {
    "TRACE" = 0,
    "DEBUG" = 1,
    "INFO" = 2,
    "WARN" = 3,
    "ERROR" = 4,
    "FATAL" = 5
}

/** @public */
declare function mergeProp<T, S>(target: T, prop: S): T & S;

/** @public */
declare function mergeProps<T extends object, S extends object[]>(target: T, ...sources: S[]): T & S;

/** @public */
declare function msToTime(ms: number): string;

/** @public */
declare type ParamsOrClassParams<T> = T extends Function_2.Any ? Parameters<T> : T extends Class.Any ? ConstructorParameters<T> : unknown;

declare namespace Performance_2 {
    export {
        enableLog,
        disableLog,
        func,
        asyncFunc,
        setLabel,
        endLabel,
        wrapFunc,
        wrapAsyncFunc
    }
}

/** @public */
declare type Result<T> = T extends PromiseLike<infer U> ? U : T;

/** @public */
declare type ReturnOrInstance<T extends Function_2.Any | Class.Any> = T extends Function_2.Any ? ReturnType<T> : T extends Class.Any ? InstanceType<T> : unknown;

/** @public */
declare function setLabel(label: string): void | (() => void);

declare namespace String_2 {
    export {
        ansiRegex,
        stripAnsi,
        firstLetterToLowerCase,
        hashCode,
        CamelCase
    }
}

/** @public */
declare function stripAnsi(string: string): string;

/** @public */
declare type Unknown<T extends unknown[] = unknown[], R = unknown> = (...args: T) => R;

/** @public */
declare type Unknown_2<T extends unknown[] = unknown[], I = unknown> = new (...args: T) => I;

declare namespace Utils {
    export {
        dgTime as Time,
        dgTypes as Types,
        Class,
        dgArray as Array,
        dgObject as Object,
        String_2 as String,
        dgPromise as Promise,
        Function_2 as Function,
        dgFs as fs
    }
}

/** @public */
declare const version = "0.9.6";

/** @public */
declare function wrapAsyncFunc<T extends (...args: any[]) => any>(fn: T): (...args: Parameters<T>) => Promise<ReturnType<T>>;

/** @public */
declare function wrapFunc<T extends (...args: any[]) => any>(fn: T): (...args: Parameters<T>) => ReturnType<T>;

/** @public */
declare const wrappedDgCompile: (entry: string, options?: CompilerOptions | undefined) => Promise<Promise<void>>;

/** @public */
declare const wrappedDgImport: (entry: string) => void | Record<string, unknown>;

export { }
