
var xmlhttp = new XMLHttpRequest();
var url = "https://bitnodes.earn.com/api/v1/snapshots/?page=1&limit=1";
myFunction({ results: [ {timestamp: 1567261618,total_nodes: 9654}] })
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    } 
 
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    var out = "";
    var i;
    var date = new Date(arr.results[0].timestamp*1000).toLocaleString();
    var str = `According to <a href='https://bitnodes.earn.com/'>Bitnodes</a> as at ${date}, there were ${arr.results[0].total_nodes} nodes working to secure the bitcoin network.`;
    document.getElementById("blockChainNodeCount").innerHTML = str; 
    console.dir(arr);

}
var xmlhttp2=new XMLHttpRequest();
url = "https://api.blockchain.info/charts/blocks-size?format=json&timespan=1week&cors=true";


xmlhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction2(myArr);
    }
};
xmlhttp2.open("GET", url, true);
xmlhttp2.send();
function myFunction2(arr) {

    var latest = arr.values.pop();
    console.dir(latest);
    var date = new Date(latest.x*1000).toLocaleString();
    var str = `According to <a href='https://blockchain.info/'>Blockchain.info</a> as at ${date}, the size of the bitcoin ledger is ${parseInt(latest.y)} ${arr.unit}.`;
    document.getElementById("blockChainLedgerSize").innerHTML = str; 
    console.dir(arr);
}
var xmlhttp3=new XMLHttpRequest();
url = "https://blockchain.info/q/addressbalance/1CnxCWztWDsGfxQqNcv4hfPLFw8Hw7AsUH?cors=true";

xmlhttp3.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction3(myArr);
    }
};
xmlhttp3.open("GET", url, true);
xmlhttp3.send();
function myFunction3(arr) {

    //var latest = arr.values.pop();
    //console.dir(latest);
    //var date = new Date(latest.x*1000).toLocaleString();
    //var str = `According to <a href='https://blockchain.info/'>Blockchain.info</a> the balance of my bitcoin account is size of the bitcoin ledger is ${parseInt(latest.y)} ${arr.unit}.`;
    document.getElementById("myBTCBalance").innerHTML = arr/100000000; 
    console.dir("Balance");
    console.dir(arr);
}
