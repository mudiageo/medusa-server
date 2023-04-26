<<<<<<< HEAD
let ignore = [`**/dist`];
=======
let ignore = [`**/dist`]
>>>>>>> master

// Jest needs to compile this code, but generally we don't want this copied
// to output folders
if (process.env.NODE_ENV !== `test`) {
<<<<<<< HEAD
  ignore.push(`**/__tests__`);
=======
  ignore.push(`**/__tests__`)
>>>>>>> master
}

module.exports = {
  presets: [["babel-preset-medusa-package"], ["@babel/preset-typescript"]],
  ignore,
<<<<<<< HEAD
};
=======
}
>>>>>>> master
