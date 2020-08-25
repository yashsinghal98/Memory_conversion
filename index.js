const convertTo=()=>
{
  let unit1=document.getElementById("Mem").value;
  let unit2=document.getElementById("Mem2").value;
  let b=document.getElementById("first").value;
  let ans;
  if(unit1==unit2)
  {
    b=b;
  }
  else if(unit1=="Bytes")
  {
    if(unit2=="KB")
    {
      b=b/1000;
    }
    else if(unit2=="MB")
    {
       b=b/1000000;
    }
    else if(unit2=="GB")
    {
      b=b/1000000000;
    }
  }
  else if(unit1=="KB")
  {
    if(unit2=="Bytes")
    {
      b=b*1000;
    }
    else if(unit2=="MB")
    {
      b=b/1000;
    }
    else if(unit2=="GB")
    {
      b=b/1000000;
    }
  }
  else if(unit1=="MB")
  {
    if(unit2=="Bytes")
    {
      b=b*1000000;
    }
    else if(unit2=="KB")
    {
      b=b*1000;
    }
    else if(unit2=="GB")
    {
      b=b/1000;
    }
  }
  else if(unit1=="GB")
  {
    if(unit2=="Bytes")
    {
      b=b*1000000000;
    }
    else if(unit2=="KB")
    {
      b=b*1000000;
    }
    else if(unit2=="MB")
    {
      b=b*1000;
    }
  }
  ans=b;
  document.getElementById("answer").innerHTML=+ans;
};