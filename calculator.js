var count=0;
function getInput(i){
var x=i;
if(x=='=')
{
document.getElementById('screen').value=eval(document.getElementById('screen').value);

}
else if(x=='C')
{
document.getElementById('screen').value=" ";

}
else if(x=='+'||x=='-'||x=='*'||x=='/'||x=='%')
{
if(count==0)
{
document.getElementById('screen').value+=i;
count=1;

}

}

else{
document.getElementById('screen').value+=i;
count=0;
}
}
