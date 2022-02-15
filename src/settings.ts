export const enum WordInsertionMode {
    MATCH_CASE_REPLACE = "Match-Case & Replace",
    IGNORE_CASE_REPLACE = "Ignore-Case & Replace",
    IGNORE_CASE_APPEND = "Ignore-Case & Append"
}

export interface CompletrSettings {
    characterRegex: string,
    maxLookBackDistance: number,
    minWordLength: number,
    minWordTriggerLength: number,
    enableTabKeyForCompletionInsertion: boolean,
    wordInsertionMode: WordInsertionMode,
    latexProviderEnabled: boolean,
    fileScannerProviderEnabled: boolean,
    fileScannerScanCurrent: boolean,
    wordListProviderEnabled: boolean,
    frontMatterProviderEnabled: boolean,
    frontMatterTagAppendSuffix: boolean,
}

export const DEFAULT_SETTINGS: CompletrSettings = {
    characterRegex: "a-zA-ZöäüÖÄÜß",
    maxLookBackDistance: 50,
    minWordLength: 2,
    minWordTriggerLength: 3,
    enableTabKeyForCompletionInsertion: false,
    wordInsertionMode: WordInsertionMode.IGNORE_CASE_REPLACE,
    latexProviderEnabled: true,
    fileScannerProviderEnabled: true,
    fileScannerScanCurrent: true,
    wordListProviderEnabled: true,
    frontMatterProviderEnabled: true,
    frontMatterTagAppendSuffix: true
}
