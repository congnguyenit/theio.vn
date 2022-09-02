docker ps -q --filter ancestor="theio.vn" | xargs -r docker stop
docker run --rm -ti -p 80:80 --name theio.vn $1
