#!/usr/bin/perl
$rfuid=$ARGV[0];
$picture= `ls -ltr *.jpg | tail -1 | awk '{print \$9}'`;
chomp($picture);
`node index.js $picture $rfuid`;
`rm $picture`;
print ("Upload Stage Complete $picture $rfuid\n")