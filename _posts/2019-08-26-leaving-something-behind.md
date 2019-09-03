---
layout: post
title:  "Leaving something behind on the blockchain"
date:   2019-08-26 10:13:39 -0400
categories: Blockchain Bitcoin 
---


<figure>   
    <img 
        src='/assets/blockchain-3438501_1920.jpg' 
        alt="Image by Pete Linforth from Pixabay"
    />
    <figcaption>
        <a href='https://pixabay.com/illustrations/blockchain-technology-exchange-3438501/'>
            Image 
        </a>
        by 
        <a href='https://pixabay.com/users/thedigitalartist-202249/'>
            Pete Linforth
        </a> 
        from 
        <a href='https://pixabay.com/users'>
            Pixabay
        </a>
    </figcaption> 
 </figure>   


The original concept for blockchain was to allow people to transfer value between each other, it does a fairly good job at this.

However, many individuals and companies desire to leverage some of the characteristics of the blockchain infrastructure for other purposes. 

Some of these characteristics are:

### Decentralized
<figure>   
    <img style='width: 25%; margin-left:auto; margin-right:auto;' 
        src='/assets/decentralized-2.png' 
        alt="Icons made by Freepik from www.flaticon.com is licensed by CC 3.0 BY"
    />
    <figcaption>
        <a href='https://www.flaticon.com/free-icon/decentralized_1349931'>
        Icons</a> made by 
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
        </a>
        from 
        <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
        </a> 
        is licensed by 
        <a href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0" 
            target="_blank">
            CC 3.0 BY
        </a>
    </figcaption> 
 </figure>

 There is no single authoritative source of the contents the blockchain.  The authority derives from arbitrary nodes that have verified the correctness and validity of the blockchain blocks.  
 
 <p id='blockChainNodeCount'>Loading information about number of full nodes detected on blockchain network....
 </p>
 

Compare this to the list of transactions that go on in your personal bank account.  The bank is the central and authoritative source of all the transactions that go on with your bank account.  

If you had a blockchain wallet, you would be able to see your transactions by searching through the blockchain for your wallet address and your account balance could be calculated.     

By using a single URL containing my Bitcoin wallet address

```
https://blockchain.info/q/addressbalance/1CnxCWztWDsGfxQqNcv4hfPLFw8Hw7AsUH
```

The website blockchain.info is able to calculate my balance of <span id="myBTCBalance"></span> Bitcoin (BTC) almost instantly.  

I think that is pretty neat!  Don't you agree?

### Immutable
<figure>   
    <img style='width: 25%; margin-left:auto; margin-right:auto;' 
        src='/assets/safe-mail.png' 
        alt="Icons made by Freepik from www.flaticon.com is licensed by CC 3.0 BY"
    />
    <figcaption>
        <a href='https://www.flaticon.com/free-icon/safe-mail_98732'>Icons 
        </a> 
        made by 
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
        </a>
        from 
        <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
        </a> 
        is licensed by 
        <a href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0" 
            target="_blank">
            CC 3.0 BY
        </a>
    </figcaption> 
 </figure>   

The blockchain is immutable, which means that it cannot be be changed -- without getting caught.  

Say for example, some rogue actor wanted to change one of his previous transactions such that he only sent .5 bitcoin instead of 5 bitcoin. 

All of the transaction details are run through cryptography functions called hash functions.  These hash functions are able to characterizes any amount of information into a string of 64 hexadecimal characters.  For bitcoin transactions, it uses 2 SHA256 hashes of the plaintext.

If someone were to try to change something, the whole blockchain beyond the change would have to be rewritten because everything after each block all depends on the results of these hash functions. 

I have setup a box below to give you an idea of the variations that would arise from changing a single character in a transaction.  Shown below is a textbox that computes the SHA256(plaintext) and SHA256(SHA256(plaintext)) of the "plain text" that you enter in the box. 

<div id='SHA256Demo'>
    <form name='shademo'>
    <label>Cleartext</label>
    <input 
        name='cleartext' 
        type='text' 
        onKeyPress=
        "shademo.shaOutput.value=SHA256(this.value);shademo.shaOutput2.value=SHA256(shademo.shaOutput.value)" >
    <br/>
    <label>SHA256x1 Hash Result</label>
    <input type="text" name="shaOutput" value="SHA256(cleartext) hash result" size='70' readonly>
    <br/>
    <label>SHA256x2 Hash Result</label>
    <input type="text" name="shaOutput2" value="SHA256(SHA256(Cleartext)) hash result" size='70' readonly>
    
    </form>
</div>


### Secure
<figure>   
    <img style='width: 25%; margin-left:auto; margin-right:auto;' 
        src='/assets/warranty.png' 
        alt="Icons made by Freepik from www.flaticon.com is licensed by CC 3.0 BY"
    />
    <figcaption>
        <a href='https://www.flaticon.com/free-icon/warranty_950326'>
            Icons
        </a> 
        made by 
        <a href="https://www.flaticon.com/authors/eucalyp" 
           title="Eucalyp">
            Eucalyp
        </a>
        from 
        <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
        </a> 
        is licensed by 
        <a href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0" 
            target="_blank">
            CC 3.0 BY
        </a>
    </figcaption> 
 </figure>   

The bitcoin network is secured with digital signatures signed with private keys of the owners of the accounts in question. 

Just to demonstrate how secure things are, there is a mechanism to write messages signed with the private key of your bitcoin wallet. 

<figure>   
    <img style='width: 75%; margin-left:auto; margin-right:auto;' 
        src='/assets/Screenshot 2019-08-31 20.24.41.png' 
        alt="Screenshot from my personal Blockchain.com wallet"
    />
    <figcaption>
        <a href='/assets/Screenshot 2019-08-31 20.24.41.png'>
            Screenshot
        </a> 
        from my personal 
        <a href="https://www.blockchain.com/wallet" 
           title="Blockchain.com Wallet">
            Blockchain.com wallet
        </a>
    </figcaption> 
 </figure>   

I was able to easily verify this using tools called [Bitcoin explorer](https://github.com/libbitcoin/libbitcoin-explorer/wiki/Download-BX)

 You can see below that the generated signatures are the same.  The wif.key is my private key for my account and I am keeping it private ....for obvious reasons.

This verifies that the message I generated on Blockchain.info was signed by my private key and was validating using my bitcoin address. 

```
$ export btc_address=1CnxCWztWDsGfxQqNcv4hfPLFw8Hw7AsUH
$ export signature=HNbSENq09dQWfvnhcIJpF/WiYFB8p5MPHrb67TQZXxuGAw/TqhqXbk3laWvQgAMUAN8PeVjxDZ/JBG83RPTwaLc=
$ export message="This is signed with my private key."
$ bx message-validate $btc_address $signature $message  
The signature is valid.

$ bx message-sign `cat wif.key` $message
HNbSENq09dQWfvnhcIJpF/WiYFB8p5MPHrb67TQZXxuGAw/TqhqXbk3laWvQgAMUAN8PeVjxDZ/JBG83RPTwaLc=
```

### Replicated
<figure>   
    <img style='width: 25%; margin-left:auto; margin-right:auto;' 
        src='/assets/database-2.png' 
        alt="Icons made by Eucalyp from www.flaticon.com is licensed by CC 3.0 BY"
    />
    <figcaption>
        <a href='https://www.flaticon.com/free-icon/database_1122584'>
            Icons
        </a> 
        made by 
        <a href="https://www.flaticon.com/authors/eucalyp" 
           title="Eucalyp">
            Eucalyp
        </a>
        from 
        <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
        </a> 
        is licensed by 
        <a href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0" 
            target="_blank">
            CC 3.0 BY
        </a>
    </figcaption> 
 </figure>   

The contents of the blockchain is replicated many times by the many independent bitcoin processing nodes.  This data will not get lost because all of the market participants have a vested interest in keeping the data intact for all time going forward. 

Whenever a new independent processing node comes online, it spends a considerable amount of time ramping up by collecting and verifying all of the data in the blockchain until it is up to date.  At that point it is able to serve to confirm transactions that are composed by the bitcoin miners.

 <p id='blockChainLedgerSize'>Loading information about the size of the bitcoin ledger.....
 </p>

I hope that this gives an decent overview of many characteristics of the blockchain that may be of interest to others beyond the blockchain's use for transferring cryptocurrency between users.

# Leaving something behind 

One of the key promises of the blockchain technology is the ability to store arbitrary data on the blockchain.  From what I have seen, the practice is to put an identifier, like a hash of a file on the blockchain, and put the actual source data stored off-blockchain.   

When using bitcoin, the way in which arbitrary data can be stored is to send a nominal amount of money to bitcoin addresses that represent the data that we wish to store.  It is exceptionally unlikely that the resulting bitcon addresses will be active so the money will likely remain trapped in the blockchain unspent.  

I wanted to leave my mark on the blockchain, so I used a service called https://cryptograffiti.info where I sent some bitcoin and the service formatted a new transaction with the text that  

This is using a blockchain that was twice forked (i.e branched off) from the main bitcoin and is called Bitcoin SV.  It is The underlying technology is the same, but the rules around it are slightly different. 

[Cryptograffiti.info](https://cryptograffiti.info/#b5060fecdc7e8865a30529fe38dba353ab322973b288141b733a35e64b1f2f80)


<figure>   
    <img style='width: 75%;margin-left:auto; margin-right:auto;' 
        src='/assets/Screenshot 2019-09-03 00.09.05.png' 
        alt="Screenshot from cryptograffiti.info"
    />
    <figcaption>
        <a href='https://cryptograffiti.info/#b5060fecdc7e8865a30529fe38dba353ab322973b288141b733a35e64b1f2f80
        '>
            Screenshot
        </a> 
        from  
        <a href="https://cryptograffiti.info" 
           title="Cryptograffiti.info">
            Cryptograffiti.info
        </a>
    </figcaption> 
 </figure>   

If interested, you can see [the underlying transaction](https://blockchair.com/bitcoin-sv/transaction/b5060fecdc7e8865a30529fe38dba353ab322973b288141b733a35e64b1f2f80) or even get a [receipt](https://pdf.blockchair.com/bitcoin-sv/transaction/b5060fecdc7e8865a30529fe38dba353ab322973b288141b733a35e64b1f2f80) for my cryptograffiti.  

To see how the data is encoded, look at the first two script outputs after the word OP_HASH160 using this [blockchain viewer](https://explorer.viabtc.com/bsv/tx/b5060fecdc7e8865a30529fe38dba353ab322973b288141b733a35e64b1f2f80)... or refer to image below....

![first two script outputs](/assets/Screenshot 2019-09-03 11.12.23.png)

 write to a file and then running it through [hex to bin converter xxd](https://linux.die.net/man/1/xxd) encoder you will find the message I left... for all eternity.

```
% echo 492077617320686572652c20616e64206e6f7720 > msg.hex
% echo 666f72657665722e0a0000000000000000000000 >> msg.hex
% cat msg.hex | xxd -r -p
I was here, and now forever.
```

Where else in the world can you get a receipt for leaving behind graffiti?


<script src='/assets/sha256.js'></script>
<script src='/assets/blockchainstats.js'></script> 
