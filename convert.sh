#!/bin/bash

DIR_PREFIX="awesome-notes/docs"
rm -rf $DIR_PREFIX/kubernetes $DIR_PREFIX/iac
mkdir -p $DIR_PREFIX/kubernetes
mkdir -p $DIR_PREFIX/iac

IFS=$'\n'
for line in $(cat posts.csv | tail -n +2 | tr -d '\r'); do
    year=$(echo $line | cut -d, -f 1)
    tag=$(echo $line | cut -d, -f 2)
    title=$(echo $line | cut -d, -f 3)
    link=$(echo $line | cut -d, -f 4)

    cat=""
    if [ "$tag" == "terraform" ]; then
        cat="iac"
    else
        cat="kubernetes"
    fi

    echo "- [$year - $title]($link)" >> $DIR_PREFIX/$cat/$tag.md
done
