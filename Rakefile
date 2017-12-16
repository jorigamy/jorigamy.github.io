task :build do
  system('bundle exec jekyll build')
end

namespace :assets do
  task precompile: :build
end
