require 'html-proofer'

desc "build and test website"
task :test do
  sh "bundle exec jekyll build"
  HTMLProofer.check_directory(
    "./_site",
    {
      check_img_http: true,
      enforce_https: true,
      typhoeus: {
        followlocation: true,
        ssl_verifypeer: false,
        headers: {
          'User-Agent' => 'html-proofer'
        }
      },
      url_ignore: [
        "https://twitter.com/sfpmod"
      ]
    }
  ).run
end
