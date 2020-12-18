#!/bin/bash
DIRS="iac kubernetes linux"

pushd docs

for dir in $DIRS; do
    files=$(ls $dir)
    for file in $files; do
        tag=$(echo $file | cut -d . -f1)
        IFS=$'\n'
        for line in $(cat $dir/$file); do
            #echo $line
            reg='- \[(.*) - (.*)\]\((.*)\)'
            if [[ $line =~ $reg ]]; then
                date="${BASH_REMATCH[1]}"
                title="${BASH_REMATCH[2]}"
                link="${BASH_REMATCH[3]}"
            fi
            echo $date,$tag,$title,$link

# - [2020/11/09 - 幫你的 VIM 增加 Kubernetes YAML 支援](https://www.facebook.com/technologynoteniu/posts/154898276344313)
        done
    done
done

popd
