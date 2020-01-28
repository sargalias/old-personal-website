const getModifierClasses = (modifiers, baseClass) => {
  const appendModifier = modifier => `${baseClass}___${modifier}`;
  return modifiers.map(appendModifier);
};

const getCssModuleClasses = (styles, baseClass, modifiers) => [
  _getCssModuleClass(styles, baseClass),
];

const _getCssModuleClass = (styles, className) => styles[className];

export { getModifierClasses, getCssModuleClasses };
