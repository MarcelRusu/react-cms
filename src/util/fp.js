export const compose = (...fs) => x => fs.reduce((acc, f) => f(acc), x);

// TODO: might want to change this to a .map
export const all = (...fs) => x => fs.forEach(f => f(x));