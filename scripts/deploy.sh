bash --login <<EOF
sudo docker -v
sudo docker ps -q --filter ancestor="theio.vn" | xargs -r docker stop
sudo docker run --rm -d -p 80:80 --name theio.vn congnguyenit/theio.vn:latest
EOF
