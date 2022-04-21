# SecCam-Client
Raspberry Pi Node


sudo raspi-config
  - interface options
  - i4 spi
  - yes
sudo reboot

sudo apt update && sudo apt upgrade
sudo apt install fswebcam v4l-utils nodejs python3-dev python3-pip git npm
sudo pip3 install spidev mfrc522
sudo usermod -a -G video pi

git clone https://github.com/jonmarcoreyes/SecCam-Client.git
cd SecCam-Client
npm install
python3 read.py
