function random()
{
	return Math.floor(Math.random()*6+1);

}

var rand1=random();
var rand2=random();
var img1="images/dice"+rand1+".png";
var img2="images/dice"+rand2+".png";

document.querySelectorAll("img")[0].setAttribute("src",img1);
document.querySelectorAll("img")[1].setAttribute("src",img2);

if(rand1>rand2)
{
	document.querySelector("h1").innerHTML="🚩 Player 1 wins !";
}
else if(rand1<rand2)
{
	document.querySelector("h1").innerHTML="Player 2 wins ! 🚩";
}
else
{
	document.querySelector("h1").innerHTML="Draw !";
}