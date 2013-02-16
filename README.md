CloudPad
========

CloudPad is a very lightweight, cloud-based notepad using MongoHQ is a data store

Why?
====

I always found myself needing to keep little notes. I've used Evernote and SpringPad, and they're very good, but they are also very heavy duty. CloudPad allows you to keep an online note pad that you can access from any web browser, even from your smartphone!

HOWTO
=====

1. Copy the text contained in the [DataURI](https://raw.github.com/dpbackes/CloudPad/master/DataURI) file into your browser's address bar and hit 'enter'
2. Follow the on screen instructions
3. You will be asked to create a (free) accoutn at MongoHQ.com. This will be used to store your note data
4. Once you have created an account, you will need to get your API token. This can be found on the upper right of your account overview page
5. Enter your API Token into the form and you're all set!

FAQ
===

_What browsers is it compatibile with?_

I have tested it on Chrome for Windows and Android and it works. It does not seem to work on IE.

_I already have a MongoHQ account that I use for something important. Isn't this really insecure?_

YES! If you are concerned about the security of your MongoHQ account, but still want to use cloudpad, create a fork of this project and update the references!
