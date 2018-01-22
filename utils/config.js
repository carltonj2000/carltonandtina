const prod = process.env.NODE_ENV === "production";

exports.config = {
  basedir: prod ? "/weddinginvite/" : "/"
};
