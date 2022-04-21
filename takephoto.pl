#!/usr/bin/perl
$picture =`date +%Y%m%d_%H.%M.%S`;
chomp($picture);
`fswebcam -r 1280x720 -S3 -pYUYV $picture.jpg`;
print ("Photo Stage Complete\n");