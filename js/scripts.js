// $(function() {
//   $(".form").submit(function(event) {
//     event.preventDefault();
//     var reg = /^[a-z]+$/;
//     var input = $("#input").val().toLowerCase();
//     var phrase = "";
//     var reverse = "";
//
//     for(let i=0; i<input.length; i++) {
//       if(reg.test(input.charAt(i))) {
//         phrase += input.charAt(i);
//       }
//     }
//
//     for(let i=phrase.length; i>0; i--) {
//       reverse += phrase[i-1];
//     }
//
//     if(reverse === phrase) {
//       console.log("its a palindrome");
//     } else {
//       console.log("Not a palindrome");
//     }
//
//     console.log(phrase);
//     console.log(reverse);
//   });
// });

$(function() {
  $(".form").submit(function(event) {
    event.preventDefault();
      var reg = /^[a-z]+$/;
      var char = $("input#input").val();
      console.log(char);
      var reverse = [];
      var phrase = "";

      reverse = char.split("");
      reverse.reverse();
      phrase = reverse.join("");
      console.log(phrase);
      if(char === phrase) {
        console.log("This is a palindrome");
      } else {
        console.log("This is not a palindrome");
      }
  });
});
