require 'html-proofer'

desc "build and test website"
task :test do
  sh "bundle exec jekyll build"
  HTMLProofer.check_directory(
    "./_site",
    {
      typhoeus: {
        followlocation: true,
        ssl_verifypeer: false,
        headers: {
          'User-Agent' => 'html-proofer'
        }
      }
    }
  ).run
end
