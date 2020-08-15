
let like = function(btnElement){
   console.log(btnElement);

   let likecountstr = btnElement.children[0].innerHTML;

   let likecount = parseInt(likecountstr);

   likecount++;

   btnElement.children[0].innerHTML=likecount;


};
  function Comment(){
      let inpvalue= document.querySelector("#inp").value;
      let clonevalue=document.querySelector("#Commentdiv").cloneNode(true);
      clonevalue.innerHTML=inpvalue;

      let commentsdiv=document.querySelector("#Commentdiv");

      document.querySelector("#inp").value="";

      commentsdiv.insertBefore(clonevalue, commentsdiv.firstChild);
  };

  let deleteco = function(btnElementdel){
      console.log(btnElementdel.parentElement.parentElement);

      btnElementdel.parentElement.parentElement.remove();
  }



