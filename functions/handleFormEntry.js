export function handleFormEntry(e, data, field, setter) {
  setter(Object.assign({}, data, { [field]: e.target.value }));
}
