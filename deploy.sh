echo "switching to branch server"

git checkout master

echo "Deploying app"
npm run build

echo "Deploying files to server"
scp -r build/* root@70.34.218.198:/var/www/fredrikfischer/

echo "done!"
