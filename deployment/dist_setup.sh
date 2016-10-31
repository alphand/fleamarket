#!/bin/bash
distRef = git show-ref -q --verify "refs/remote/dist"

if [$distRef]
then
  git push origin :dist
else
  echo "no dist branch -- continue"
fi

git checkout -b dist
git add -Af ./dist
git commit -m "pushing dist as $CI_NAME - $CI_BUILD_NUMBER"
git push -u origin dist
