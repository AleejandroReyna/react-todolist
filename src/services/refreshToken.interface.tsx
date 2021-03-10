export interface RefreshToken {
    status: number,
    access?: string,
    error?: string,
    codeError?: string
}