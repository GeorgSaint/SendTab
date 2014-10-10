SendTab
=======
Working extension SendTab for Safari (http://sendtab.com)

========
INSTALL
========

Download SendTabURL.safariextz and open in Safari. Then prompted click install.

In settings write strings:

-"md5 auth": create auth md5 string from your network name(lowercase) + password(case sensitive) here http://www.md5.cz

For example if your network name is "Network1" and your password is "My1234567890" then md5 auth string is "c86c4c0fa7572a4e3c7b5f1e3e044a46" (network1My1234567890).
[Reeally sorry for this.. Does not have time to play around with js and md5. If you have code please write me]

-"from node": is name for computer from network names from which you are sending url

-"to node" is name for computer from network names to whom shall you send url

========
How to use
========

Click hashtag icon and choose recive/send url.

For recive you will get 1 sended url for each click.

For send nothing to do next. 

========
Additional info
========

Unfortunately I didn't implement choose beetwen who will get url so each time your destination node change you will have to write it in the settings.

To get started I was using this guy guide to create my own extension (never create extensions before) http://arstechnica.com/apple/2010/06/safari-5-extensions-how-to-develop/

