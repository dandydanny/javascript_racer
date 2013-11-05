$(document).ready(function() {
  // Player 1
  var counter_1 = 2;
  var counter_2 = 2;
  var disableRace = 1; // value 1 disables input
  var date = new Date();
  var starttime = 0;
  var endtime = 0;
  var elapsedtime = 0;
  var winner = "";

  // Start race
  $("#start_button").click(function(event){
    // disable input while counting down
    disableRace = 1;
    var countdown = 3;
    counter_1 = 2;
    counter_2 = 2;
    starttime = 0;
    endtime = 0;
    elapsedtime = 0;
    console.log(counter_1, counter_2, disableRace);
    $("td").removeClass("active"); // clear all actives
    // place cars on starting line 
    $("#player1_strip td:nth-child(2)").addClass("active");
    $("#player2_strip td:nth-child(2)").addClass("active");
        
    document.getElementById('win').innerHTML="";



      id = setInterval(function() {
        console.log(countdown);
        if(countdown == 0){
          disableRace = 0; 
          clearInterval(id);
          document.getElementById('win').innerHTML="Go!";
        } else {
          document.getElementById('win').innerHTML=countdown;
        }
        countdown--;
      },1000);
    console.log('outside loop');
    starttime = date.getTime();
  });
    



  $(document).on('keyup', function(event) {
    // Racer 1
    // key 81 = q
    if(event.keyCode == 81 && disableRace != 1)
      {

        console.log(' player 2 hitting key');
        console.log(counter_1);
        $("#player1_strip td:nth-child(" + counter_1 + ")").removeClass("active");
        counter_1++;
        $("#player1_strip td:nth-child(" + counter_1 + ")").addClass("active");
        if(counter_1 == 21) {
          endtime = date.getTime();
          document.getElementById('win').innerHTML="Player 1 Wins!";
          disableRace = 1;
        };
      };
    // Racer 2
    // key 80 = P
    if(event.keyCode == 80 && disableRace != 1)
      {

        console.log(' player 2 hitting key');
        console.log(counter_2);
        $("#player2_strip td:nth-child(" + counter_2 + ")").removeClass("active");
        counter_2++;
        $("#player2_strip td:nth-child(" + counter_2 + ")").addClass("active");
        if(counter_2 == 21) {
          endtime = date.getTime();
          document.getElementById('win').innerHTML="Player 2 Wins!";
          console.log(starttime, endtime);
          disableRace = 1;
        };
      };

    $("#reset_button").click(function(event){
        console.log("hello");
        counter_1 = 2;
        counter_2 = 2;
        disableRace = 1;
        starttime = 0;
        endtime = 0;
        elapsedtime = 0;
        console.log(counter_1, counter_2, disableRace);
        $("td").removeClass("active");
        $("#player1_strip td:nth-child(2)").addClass("active");
        $("#player2_strip td:nth-child(2)").addClass("active");
        
        document.getElementById('win').innerHTML="";


    });


  });

      

  // update_player_position(player, position) {
  //   $("#player2_strip td:nth-child(" + (position) + ")").addClass("active");
  //   $("#player2_strip td:nth-child(" + (position)-- + ")").removeClass("active");

  // };


  // function Player(name) {
  //   this.name = name;
  //   this.position = 1;
  // }

  // var jake = new Player('jake');
});
