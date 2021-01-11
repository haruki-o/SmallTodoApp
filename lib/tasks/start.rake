namespace :start do
  desc 'Start production server'
  task :production do
    exec 'NPM_CONFIG_PRODUCTION=ture npm run heroku-postbuild && foreman start'
  end
end