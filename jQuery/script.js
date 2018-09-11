$(document).ready(function() {
    
    // make buttton with alert
    let $button = $('body').append($('<button id="button1">Click Me!</button>'));
    
    $('#button1').click(function() {
        alert('You clicked me!');
    });

    //button, text box, alert
    $('#btnSubmit').click(function() {
        alert($("#textBox").val());
    });

    //change div color at mouseover
    $('.box1').hover(function() {
        $(this).css({
            'background-color': 'navy'
        });
    });

    //return to original color at mouseout
    $('.box1').mouseout(function() {
        $(this).css({
            'background-color': 'aquamarine'
        });
    });

    //paragraph to random color when clicked
    let $para = $('body').append($('<p>Example paragraph text.</p>'));
    $('p').click(function() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        $(this).css('color', color);
    });

    //when button is clicked, add name to div
    let $nameButton = $('body').append($('<button id="addName">Add Name</button>'));    
    let $emptyDiv = $('body').append($('<div></div>'));

    $nameButton.click(function() {
        let $span = $emptyDiv.append($('<span>Eleanor</span>'));
    });

    //when friend button is clicked, add friends to ul
    let friends = ['Lizzy', 'Nadia', 'Rene', 'Betsy', 'Natalie', 'Jackie', 'Alex', 'Andrew', 'Justine', 'Jo'];
    
    $('#friendButton').click(function() {
        for (let i = 0; i < friends.length; i++) {
            let $eachFriend = $('#friendList').append('<li>' + friends[i] + '</li>');
        }
    });
});