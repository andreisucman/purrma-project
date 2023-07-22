export function localizedPath({ base, locale, assetName, type }) {
  return `/${base}/${locale}/${assetName}.${type}`;
}
