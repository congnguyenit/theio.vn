sudo docker -v
sudo docker rm -f theio.vn
sudo docker run --rm -d -p 80:80 --name theio.vn $1
