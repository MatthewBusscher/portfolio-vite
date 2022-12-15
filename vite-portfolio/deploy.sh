echo "Switching to branch master"
git checkout master

echo "Building app..build"
npm run build

echo "deploying files to server.."
scp -r build/* matt@198.74.54.130:/var/www/198.74.54.130/

echo "Done!"
