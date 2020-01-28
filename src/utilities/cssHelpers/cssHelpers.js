const getModifierClasses = (modifiers, baseClass) =>
  modifiers.length ? [`${baseClass}___${modifiers[0]}`] : [];

export { getModifierClasses };
