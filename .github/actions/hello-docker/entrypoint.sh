#!/bin/sh -l

# Test failing via bash
if [ true ]
then
	echo "error"
	exit 1
fi


# Format is specific to the GitHub runner machines, to get these logged at the correct level
# This works in any language -- printf("::warning ::Warning message") etc works
echo "::debug ::Debug Message"
echo "::warning ::Warning Message"
echo "::error ::Error Message"


echo "::add-mask ::$1"
echo "Hello $1"

time=$(date)
echo "::set-output name=time::$time"

echo "::group::Some expandable logs"
echo "Some stuff"
echo "Some stuff"
echo "Some stuff"
echo "::end-group"

# https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#environment-files
echo "{HELLO}={heya!}" >> $GITHUB_ENV