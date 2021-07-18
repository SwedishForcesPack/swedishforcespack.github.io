require 'html-proofer'

desc "build and test website"
task :test do
  sh "bundle exec jekyll build"
  HTMLProofer.check_directory(
    "./_site",
    {
      check_img_http: true,
      enforce_https: true,
      url_ignore: [
        "https://www.bohemia.net/community/licenses/arma-public-license-share-alike",
        "https://www.bohemia.net/community/licenses/licensed-data-packages",
        "https://twitter.com/sfpmod"
      ]
    }
  ).run
end
