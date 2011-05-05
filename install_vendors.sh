#!/bin/sh

cd $(dirname $0)

# initialization
#if [ "$1" = "--reinstall" ]; then
#rm -rf vendor
#fi

#mkdir -p vendor && cd vendor

##
# @param destination directory (e.g. "doctrine")
# @param URL of the git remote (e.g. git://github.com/doctrine/doctrine2.git)
# @param revision to point the head (e.g. origin/HEAD)
#
install_git()
{
    INSTALL_DIR=$1
    SOURCE_URL=$2
    REV=$3

    if [ -z $REV ]; then
        REV=origin/HEAD
    fi

    if [ ! -d $INSTALL_DIR ]; then
        git clone $SOURCE_URL $INSTALL_DIR
    fi

    cd $INSTALL_DIR
    git fetch origin
    git reset --hard $REV
    cd ..
}

# Design-Document Roadrunner
cd roadrunner && rm -rf vendor && mkdir vendor && cd vendor
# couchapp-vendor
install_git couchapp https://github.com/couchapp/vendor.git origin/master
cd .. && cd ..

# Design-Document RoadrunnerSchema
cd roadrunnerschema && rm -rf vendor && mkdir vendor && cd vendor
#JSON Schema Validator
install_git json-schema https://github.com/kriszyp/json-schema.git origin/master
cd .. && cd ..