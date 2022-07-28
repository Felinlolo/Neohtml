function numEstPair(n) {
    return (n & 1) ? false : true;
  }
  var aujd = new Date();
  var premJan = new Date(aujd.getFullYear(),0,1);
  var jours = Math.floor((aujd - premJan) / (24 * 60 * 60 * 1000));
  var semaine = Math.ceil(( aujd.getDay() + 1 + jours ) / 7);
  if (numEstPair(semaine)){
      var cacher = document.getElementById("EDTA");
  }else{
      var cacher = document.getElementById("EDTB");
  }
  cacher.style.display = "none";