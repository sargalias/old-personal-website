const getModifierClasses = (modifiers, baseClass) => {
  const appendModifier = modifier => `${baseClass}___${modifier}`;
  return modifiers.map(appendModifier);
};

export { getModifierClasses };
