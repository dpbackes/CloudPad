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
3. You will be asked to create a (free) account at MongoHQ.com. This will be used to store your note data
4. Once you have created an account, you will need to get your API token. This can be found on the upper right of your account overview page
5. Enter your API Token into the form and you're all set!
6. Repeat the process on any other devices you wish to have access to your CloudPad

Notes
=====
Right now there is no versioning scheme and changes that are made on one device will not be automatically pushed to others. Therefore, it is a best practice to close CloudPad once you are done editing.

Closing CloudPad will push the document to the server, so make sure to hit "refresh" to pull the latest data from the server if you know there have been changes from another device.

FAQ
===

_What browsers is it compatibile with?_

I have tested it on Chrome for Windows and Android and it works. It does not seem to work on IE.

_I already have a MongoHQ account that I use for something important. Isn't this really insecure?_

YES! If you are concerned about the security of your MongoHQ account, but still want to use cloudpad, create a fork of this project and update the references!
