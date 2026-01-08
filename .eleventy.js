module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    pathPrefix: "/transferiseguide/",
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
