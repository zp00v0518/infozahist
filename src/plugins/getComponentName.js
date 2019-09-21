function getComponentName(item) {
  const prefix = 'V';
  if (!item.type) return prefix + 'string';
  return prefix + item.type;
}

export default getComponentName;
