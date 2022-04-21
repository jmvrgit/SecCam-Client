#!/usr/bin/env python
import os
import RPi.GPIO as GPIO
import subprocess
from mfrc522 import SimpleMFRC522
from time import sleep

GPIO.setwarnings(False) 
GPIO.setmode(GPIO.BOARD)
GPIO.setup(11, GPIO.OUT, initial=GPIO.HIGH)
reader = SimpleMFRC522()

#connect = 'node connect.js'
#os.system(connect)

while True:
    print ("===========Wait for UID===========\n")
    GPIO.output(11, GPIO.HIGH)
    id, text = reader.read()
    if (id != "" or text != ""):
        print(id)
        print ("===========Capture pic===========\n")
        takephoto = 'perl takephoto.pl'
        os.system(takephoto)
        # subprocess.Popen(["perl", "takephoto.pl"])
        print ("===========Check RFUID===========\n")
        entryoutput = subprocess.check_output(['node', 'request-entry.js', str(id)])
        entryoutput = str(entryoutput)
        if (len(entryoutput) < 10):
            print ("Entry not Authorized")
            GPIO.output(11, GPIO.HIGH)
        else:
            print ("Entry Authorized")
            print (entryoutput)
            GPIO.output(11, GPIO.LOW)
        print ("===========Run Upload===========\n")
        # runupload = "perl upload.pl " + str(id)
        # os.system(runupload)
        subprocess.Popen(["perl", "upload.pl", str(id)])
        sleep(1)
        
