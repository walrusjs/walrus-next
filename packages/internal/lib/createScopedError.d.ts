export interface Errors {
    [code: string]: string;
}
export interface ScopedError<Code extends string = string> {
    code: Code | 'UNKNOWN_ERROR';
    scope: string;
}
export default function createScopedError<Code extends string = string>(scope: string, name: string, errors: Errors): new (code: Code, params?: unknown[]) => Error & ScopedError<Code>;
